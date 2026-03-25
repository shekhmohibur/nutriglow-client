const Overview = () => {

  return (

    <div>

      <h1 className="text-2xl font-bold mb-6">

        Dashboard Overview

      </h1>


      <div className="grid md:grid-cols-3 gap-6">

        <div className="p-6 bg-white rounded-xl shadow">

          Total Sales

          <h3 className="text-xl font-bold">

            $12,450

          </h3>

        </div>


        <div className="p-6 bg-white rounded-xl shadow">

          Orders

          <h3 className="text-xl font-bold">

            320

          </h3>

        </div>


        <div className="p-6 bg-white rounded-xl shadow">

          Customers

          <h3 className="text-xl font-bold">

            150

          </h3>

        </div>

      </div>

    </div>

  );

};

export default Overview;