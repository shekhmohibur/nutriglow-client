import { useQuery } from "@tanstack/react-query";
import useAxiosSec from "../../../hooks/useAxiosSec";
import Loader from "../../../components/shared/Loader";
import useAuth from "../../../hooks/useAuth";
const Profile = () => {
  const axiosSecure = useAxiosSec();
  const {user} = useAuth();
  const { data: userData, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users?email=${user?.email}`);
      return res.data;
    },
  });

  if (isLoading) return <Loader fullScreen={false} />;

  const data = userData[0]?.userData || {};
console.log(data);

  const getInitial = (name) => name?.charAt(0)?.toUpperCase() || "?";

  return (
    <div className="p-4 sm:p-6 max-w-4xl mx-auto">
      {/* Header */}
      <h1 className="text-2xl font-bold mb-6">{data.role === 'admin' ? 'Admin Profile' : 'Customers Profile'}</h1>

      <div className="bg-white rounded-xl shadow p-6">
        {/* Top Section */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
          {/* Avatar */}
          <div className="w-24 h-24 rounded-full bg-purple-600 text-white flex items-center justify-center text-3xl font-bold">
            {getInitial(data.displayName)}
          </div>

          {/* Basic Info */}
          <div className="text-center sm:text-left">
            <h2 className="text-xl font-semibold">
              {data.displayName || "N/A"}
            </h2>
            <p className="text-gray-500">{data.email || "N/A"}</p>

            <span className="inline-block mt-2 px-3 py-1 text-xs uppercase bg-purple-600 text-white rounded-md">
              {data.role || "N/A"}
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 border-t"></div>

        {/* Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-gray-500">Full Name</p>
            <p className="font-medium">{data.displayName || "N/A"}</p>
          </div>

          <div>
            <p className="text-gray-500">Email Address</p>
            <p className="font-medium">{data.email || "N/A"}</p>
          </div>

          <div>
            <p className="text-gray-500">Role</p>
            <p className="font-medium uppercase">{data.role || "N/A"}</p>
          </div>

          <div>
            <p className="text-gray-500">Joined Date</p>
            <p className="font-medium">
              {data.createdAt
                ? new Date(data.createdAt).toLocaleDateString()
                : "N/A"}
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          {
            data.role === 'admin' ? <button className="btn btn-warning text-white rounded-md">Roll Back To User</button> : <button className="btn btn-error text-white rounded-md">Delete Account</button>
          }
          
        </div>
      </div>
    </div>
  );
};

export default Profile;
