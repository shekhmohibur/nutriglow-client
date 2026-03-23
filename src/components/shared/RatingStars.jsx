import { FaStar } from "react-icons/fa";

export default function RatingStars({ rating }) {

  return (
    <div className="flex gap-1 text-yellow-400">

      {[...Array(5)].map((_, i) => (

        <FaStar
          key={i}
          className={
            i < rating
              ? "opacity-100"
              : "opacity-20"
          }
        />

      ))}

    </div>
  );

}