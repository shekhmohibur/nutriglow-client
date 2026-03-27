import { useQuery } from "@tanstack/react-query";
import useAxiosSec from "../../../hooks/useAxiosSec";
import Loader from "../../../components/shared/Loader";
import CustomersTable from "../../../components/shared/CustomersTable";

const Customers = () => {
  const axiosSecure = useAxiosSec();

  const { data: users = [], isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users`);
      return res.data;
    },
  });

  if (isLoading) {
    return <Loader fullScreen={false} />;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Customers</h1>

      {/* Use new responsive component */}
      <CustomersTable users={users} />
    </div>
  );
};

export default Customers;
