import Marquee from "react-fast-marquee";

export default function BlogMarquee() {
  return (
    <div className="bg-cyan-800 text-white py-4 text-sm font-medium">
      <Marquee
        speed={60}
        pauseOnHover={true}
        gradient={false}
      >
        <span className="mx-8 flex items-center gap-2">
          🔥 Check out our latest blog posts! Stay inspired, stay informed.
        </span>

        <span className="mx-8 flex items-center gap-2">
          📰 Don’t miss our latest articles — read now!
        </span>

        <span className="mx-8 flex items-center gap-2">
          💡 Wellness tips updated weekly — explore today!
        </span>

        <span className="mx-8 flex items-center gap-2">
          ⭐ Learn how to improve sleep, skin & health naturally.
        </span>
      </Marquee>
    </div>
  );
}