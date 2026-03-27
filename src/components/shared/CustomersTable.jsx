import { useEffect, useMemo, useRef, useState } from "react";
import CustomerCard from "./CustomerCard";

const CustomersTable = ({ users = [] }) => {
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");
  const [confirmDelete, setConfirmDelete] = useState(false);

  const selectAllRef = useRef();

  // 🔍 Filtered users
  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const data = user?.userData || {};
      const matchSearch =
        data.displayName?.toLowerCase().includes(search.toLowerCase()) ||
        data.email?.toLowerCase().includes(search.toLowerCase());

      const matchRole = roleFilter === "all" || data.role === roleFilter;

      return matchSearch && matchRole;
    });
  }, [users, search, roleFilter]);

  // ✅ Toggle select
  const toggleSelect = (id) => {
    setSelectedUsers((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  // ✅ Select all (filtered only)
  const toggleSelectAll = () => {
    if (selectedUsers.length === filteredUsers.length) {
      setSelectedUsers([]);
    } else {
      setSelectedUsers(filteredUsers.map((u) => u._id));
    }
  };

  // ✅ Indeterminate checkbox logic
  useEffect(() => {
    if (selectAllRef.current) {
      selectAllRef.current.indeterminate =
        selectedUsers.length > 0 && selectedUsers.length < filteredUsers.length;
    }
  }, [selectedUsers, filteredUsers]);

  const getInitial = (name) => name?.charAt(0)?.toUpperCase() || "?";

  return (
    <div className="w-full">
      {/* 🔍 Search + Filter */}
      <div className="flex flex-col sm:flex-row gap-3 mb-4">
        <input
          type="text"
          placeholder="Search name or email..."
          className="input input-bordered w-full sm:max-w-xs outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="select select-bordered w-full sm:w-40 outline-none"
          value={roleFilter}
          onChange={(e) => setRoleFilter(e.target.value)}
        >
          <option value="all">All Roles</option>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
      </div>

      {/* Bulk Actions */}
      {selectedUsers.length > 0 && (
        <div className="mb-4 flex items-center justify-between bg-purple-100 p-3 rounded-md">
          <span>{selectedUsers.length} selected</span>
          <div className="flex gap-2">
            <button className="btn btn-sm bg-purple-600 text-white">
              Block
            </button>
            <button
              onClick={() => setConfirmDelete(true)}
              className="btn btn-sm bg-red-500 text-white"
            >
              Delete
            </button>
          </div>
        </div>
      )}

      {/* ================= DESKTOP ================= */}
      <div className="hidden md:block overflow-x-auto">
        <table className="table w-full">
          <thead className="bg-purple-50">
            <tr>
              <th>
                <input
                  type="checkbox"
                  ref={selectAllRef}
                  className="checkbox"
                  checked={
                    filteredUsers.length > 0 &&
                    selectedUsers.length === filteredUsers.length
                  }
                  onChange={toggleSelectAll}
                />
              </th>
              <th>User</th>
              <th>Email</th>
              <th>Role</th>
              <th>Since</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredUsers.map((user) => {
              const data = user?.userData || {};
              const isSelected = selectedUsers.includes(user._id);

              return (
                <tr
                  key={user._id}
                  className={`cursor-pointer ${
                    isSelected ? "bg-purple-50" : ""
                  }`}
                  onClick={() => toggleSelect(user._id)}
                >
                  <td onClick={(e) => e.stopPropagation()}>
                    <input
                      type="checkbox"
                      className="checkbox"
                      checked={isSelected}
                      onChange={() => toggleSelect(user._id)}
                    />
                  </td>

                  <td className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-purple-500 text-white flex items-center justify-center font-semibold">
                      {getInitial(data.displayName)}
                    </div>
                    {data.displayName}
                  </td>

                  <td>{data.email}</td>

                  <td>
                    <span className="badge bg-purple-600 text-white uppercase">
                      {data.role}
                    </span>
                  </td>

                  <td>
                    {data.createdAt
                      ? new Date(data.createdAt).toLocaleDateString()
                      : "N/A"}
                  </td>

                  <td onClick={(e) => e.stopPropagation()}>
                    <select className="select select-sm outline-none">
                      <option disabled>Action</option>
                      <option>Block</option>
                      <option>Delete</option>
                    </select>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {/* Mobile Select All */}
      <div className="flex items-center justify-between mb-2 md:hidden">
        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            className="checkbox"
            ref={selectAllRef}
            checked={
              filteredUsers.length > 0 &&
              selectedUsers.length === filteredUsers.length
            }
            onChange={toggleSelectAll}
          />
          Select All
        </label>

        {selectedUsers.length > 0 && (
          <span className="text-xs text-gray-500">
            {selectedUsers.length} selected
          </span>
        )}
      </div>
      {/* ================= MOBILE ================= */}
      <div className="grid gap-4 md:hidden">
        {filteredUsers.map((user) => (
          <CustomerCard
            key={user._id}
            user={user}
            isSelected={selectedUsers.includes(user._id)}
            toggleSelect={toggleSelect}
          />
        ))}
      </div>

      {/*  Confirm Delete Modal */}
      {confirmDelete && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-5 rounded-lg w-80">
            <h2 className="font-bold text-lg mb-2">Confirm Delete</h2>
            <p className="text-sm mb-4">
              Are you sure you want to delete selected users?
            </p>

            <div className="flex justify-end gap-2">
              <button
                className="btn btn-sm"
                onClick={() => setConfirmDelete(false)}
              >
                Cancel
              </button>
              <button
                className="btn btn-sm bg-red-500 text-white"
                onClick={() => {
                  console.log("Deleting:", selectedUsers);
                  setConfirmDelete(false);
                  setSelectedUsers([]);
                }}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomersTable;
