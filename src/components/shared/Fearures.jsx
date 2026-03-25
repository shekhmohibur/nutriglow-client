import { FaTruck, FaMoneyBillWave, FaLock } from "react-icons/fa";

const features = [
  {
    id: 1,
    icon: <FaTruck />,
    title: "EXPRESS DELIVERY",
    desc: "Buy today, receive today.",
  },
  {
    id: 2,
    icon: <FaMoneyBillWave />,
    title: "CASH ON DELIVERY",
    desc: "Ease and comfort guaranteed.",
  },
  {
    id: 3,
    icon: <FaLock />,
    title: "100% SECURE PAYMENT",
    desc: "Make your payment with complete security.",
  },
];

const TrustFeatures = () => {
  return (
    <section className="py-16 bg-base-100">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-10 text-center">
          {features.map((item) => (
            <div key={item.id} className="flex flex-col items-center gap-3">
              {/* icon */}
              <div className="text-3xl text-primary">{item.icon}</div>

              {/* title */}
              <h3 className="font-semibold tracking-wide">{item.title}</h3>

              {/* description */}
              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustFeatures;
