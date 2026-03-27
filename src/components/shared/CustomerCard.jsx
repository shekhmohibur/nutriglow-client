const CustomerCard = ({ user, isSelected, toggleSelect }) => {
  const data = user?.userData || {};

  const getInitial = (name) => {
    return name?.charAt(0)?.toUpperCase() || "?";
  };

  return (
    <div
      className={`p-4 rounded-lg border ${
        isSelected ? "border-purple-500 bg-purple-50" : "bg-white"
      }`}
    >
      {/* Top Row */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            className="checkbox"
            checked={isSelected}
            onChange={() => toggleSelect(user._id)}
          />

          {/* Avatar */}
          <div className="w-10 h-10 rounded-full bg-purple-500 text-white flex items-center justify-center font-semibold">
            {getInitial(data.displayName)}
          </div>

          <div>
            <p className="font-medium">{data.displayName || "N/A"}</p>
            <p className="text-xs text-gray-500 truncate max-w-37">
              {data.email || "N/A"}
            </p>
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="grid grid-cols-2 gap-2 text-sm mb-3">
        <div>
          <span className="text-gray-500">Role</span>
          <p className="uppercase">{data.role || "N/A"}</p>
        </div>
        <div>
          <span className="text-gray-500">Since</span>
          <p>
            {data.createdAt
              ? new Date(data.createdAt).toLocaleDateString()
              : "N/A"}
          </p>
        </div>
      </div>

      {/* Actions */}
      <select className="select select-sm w-full">
        <option disabled>Action</option>
        <option>Block</option>
        <option>Delete</option>
      </select>
    </div>
  );
};

export default CustomerCard;