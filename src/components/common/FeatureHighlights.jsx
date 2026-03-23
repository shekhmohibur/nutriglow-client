import {
  FaMoon,
  FaLeaf,
  FaShieldAlt,
  FaCheckCircle
} from "react-icons/fa";

const features = [
  {
    id: 1,
    icon: <FaMoon />,
    title: "Better Sleep",
    desc: "Wake up feeling refreshed",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-500"
  },
  {
    id: 2,
    icon: <FaLeaf />,
    title: "Natural Formula",
    desc: "Made with clean ingredients",
    iconBg: "bg-green-100",
    iconColor: "text-green-500"
  },
  {
    id: 3,
    icon: <FaShieldAlt />,
    title: "Doctor Approved",
    desc: "Recommended by experts",
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-500"
  },
  {
    id: 4,
    icon: <FaCheckCircle />,
    title: "30-day trial",
    desc: "Risk-free guarantee",
    iconBg: "bg-green-100",
    iconColor: "text-green-600"
  }
];

export default function FeatureBar() {

  return (

    <div className="max-w-7xl mx-auto px-4">

      <div
        className="
        bg-white
        border
        rounded-2xl
        shadow-sm
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-4
        divide-y
        sm:divide-y-0
        lg:divide-x
      "
      >

        {features.map(item => (

          <div
            key={item.id}
            className="
              flex
              items-center
              gap-4
              p-5
              hover:bg-gray-50
              transition
            "
          >

            {/* icon */}
            <div
              className={`
                ${item.iconBg}
                ${item.iconColor}
                w-12
                h-12
                flex
                items-center
                justify-center
                rounded-full
                text-lg
                shrink-0
              `}
            >
              {item.icon}
            </div>

            {/* text */}
            <div>

              <h4
                className="
                font-semibold
                text-gray-800
              "
              >
                {item.title}
              </h4>

              <p
                className="
                text-sm
                text-gray-500
              "
              >
                {item.desc}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>

  );

}