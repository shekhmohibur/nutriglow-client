import { FaMoon, FaLeaf, FaShieldAlt, FaCheckCircle } from "react-icons/fa";

const features = [
  {
    id: 1,
    icon: <FaMoon />,
    title: "Better Sleep",
    desc: "Wake up feeling refreshed",
    color: "text-purple-500",
    bg: "bg-purple-100"
  },
  {
    id: 2,
    icon: <FaLeaf />,
    title: "Natural Formula",
    desc: "Made with clean ingredients",
    color: "text-green-500",
    bg: "bg-green-100"
  },
  {
    id: 3,
    icon: <FaShieldAlt />,
    title: "Doctor Approved",
    desc: "Recommended by experts",
    color: "text-indigo-500",
    bg: "bg-indigo-100"
  },
  {
    id: 4,
    icon: <FaCheckCircle />,
    title: "30-day trial",
    desc: "Risk-free guarantee",
    color: "text-green-600",
    bg: "bg-green-100"
  }
];

export default function FeatureHighlights() {

  return (

    <div className="
      max-w-7xl
      mx-auto
      px-4
      py-10
    ">

      <div className="
        grid
        sm:grid-cols-2
        lg:grid-cols-4
        gap-4
      ">

        {features.map(feature => (

          <div
            key={feature.id}
            className="
              flex
              items-center
              gap-4
              bg-base-100
              border
              rounded-xl
              p-4
              shadow-sm
              hover:shadow-md
              transition
            "
          >

            <div className={`
              ${feature.bg}
              ${feature.color}
              w-12
              h-12
              flex
              items-center
              justify-center
              rounded-full
              text-xl
            `}>

              {feature.icon}

            </div>

            <div>

              <h3 className="
                font-semibold
              ">

                {feature.title}

              </h3>

              <p className="
                text-sm
                opacity-70
              ">

                {feature.desc}

              </p>

            </div>

          </div>

        ))}

      </div>

    </div>

  );

}