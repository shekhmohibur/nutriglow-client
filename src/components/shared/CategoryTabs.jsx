import { useRef, useState } from "react";
import { mainCategories, moreCategories } from "./Categories";

import { FaEllipsisH } from "react-icons/fa";
import useClickOutside from "../../hooks/useClickOutside";

export default function CategoryTabs({ selected, setSelected }) {
  const [openMore, setOpenMore] = useState(false);
    const moreCatRef = useRef(null);
    useClickOutside(moreCatRef, () => setOpenMore(false));

  return (
    <div className="flex justify-center relative">
      <div
        className="
        flex
        items-center
        bg-base-300
        rounded-lg
        shadow-sm
        overflow-x-auto
        max-w-full
        flex-wrap
      "
      >
        {/* All */}
        <button
          onClick={() => setSelected("All")}
          className={`
          px-4 py-3
          flex items-center gap-2
          text-sm
          whitespace-nowrap
          transition
          cursor-pointer
          ${
            selected === "All"
              ? "bg-white shadow text-primary"
              : "text-gray-600 hover:bg-white"
          }
        `}
        >
          All
        </button>

        {/* main categories */}
{mainCategories.map((cat) => {
  const Icon = cat.icon;

  return (
    <button
      key={cat.name}
      onClick={() => setSelected(cat.name)}
      className={`
        px-4 py-3
        cursor-pointer
        flex items-center gap-2
        text-sm
        ${cat.name === 'Immunity' || cat.name === 'Bundles' || cat.name === 'Energy' ? 'hidden md:flex' : 'flex'}
        whitespace-nowrap
        transition
        ${selected === cat.name ? "bg-white shadow" : "text-gray-600 hover:bg-white"}
      `}
    >
      <Icon className={cat.color} />
      {cat.name}
    </button>
  );
})}

        {/* MORE DROPDOWN */}
        <div>
          <button
            onClick={() => setOpenMore(!openMore)}
            className="
              px-4 py-3
              rounded-t-r-sm
              rounded-t-l-sm
              flex items-center gap-2
              text-sm
              text-gray-600
              hover:bg-white
              cursor-pointer
              whitespace-nowrap
            "
          >
            <FaEllipsisH />
            More
          </button>

          {openMore && (
            <div
              className="
              absolute
              top-12
              right-0
              bg-white
              border
              border-gray-200
              rounded-xl
              shadow-lg
              p-2
              w-40
              z-20
            "
            >
              <div ref={moreCatRef}>
                {moreCategories.map((cat) => {
                  const Icon = cat.icon;

                  return (
                    <button
                      key={cat.name}
                      onClick={() => {
                        setSelected(cat.name);
                        setOpenMore(false);
                      }}
                      className={`
                      flex items-center gap-2
                      w-full
                      px-3 py-2
                      rounded-lg
                      hover:bg-gray-100
                      text-sm
                      whitespace-nowrap
                      transition
                      cursor-pointer
                      ${cat.name === 'Immunity' || cat.name === 'Bundles' || cat.name === 'Energy' ? 'flex md:hidden' : 'flex'}
                    `}
                    >
                      <Icon className={cat.color} />

                      {cat.name}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
