const MyOrders = () => {

  const orders = [

    {
      id: 1,
      date: "March 18",
      total: 120,
      status: "Delivered"
    },

    {
      id: 2,
      date: "March 12",
      total: 89,
      status: "Processing"
    }

  ];


  return (

    <div>

      <h1 className="text-2xl font-bold mb-6">

        My Orders

      </h1>


      <div className="space-y-3">

        {orders.map(order => (

          <div
            key={order.id}
            className="p-4 bg-white rounded-xl shadow-sm flex justify-between"
          >

            <div>

              <p className="font-medium">

                Order #{order.id}

              </p>

              <p className="text-sm text-gray-500">

                {order.date}

              </p>

            </div>


            <div className="text-right">

              <p className="font-semibold">

                ${order.total}

              </p>

              <p className="text-xs text-gray-500">

                {order.status}

              </p>

            </div>

          </div>

        ))}

      </div>

    </div>

  );

};

export default MyOrders;