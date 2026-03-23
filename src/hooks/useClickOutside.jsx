import { useEffect } from "react";

/**
 * useClickOutside
 * @param {React.RefObject} ref - The ref to the element you want to detect outside clicks for
 * @param {Function} callback - Function to call when an outside click is detected
 */
const useClickOutside = (ref, callback) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
};

export default useClickOutside;