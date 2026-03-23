import { Link } from "react-router";
import Hero from "./Hero";
import BlogMarquee from "../../components/common/BlogMarquee";
import FeaturedProducts from "./FeaturedProducts";
import FeatureHighlights from "../../components/common/FeatureHighlights";

const Home = () => {
  return (
    <div className="space-y-8">
      {/* HERO SECTION */}
      <section className="min-h-[70vh] flex flex-col justify-center items-center text-center px-4">
        <Hero />
      </section>
      {/* Blog marquee what's on trending */}
      <section className="container mx-auto px-4">
        <BlogMarquee />
      </section>

      {/* FEATURES */}
      <section className="container mx-auto px-4">
        <FeaturedProducts/>
      </section>

      {/* TECH STACK */}
      <section className="bg-base-200 py-20">
        <FeatureHighlights/>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 text-center pb-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Build Something Real?
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto mb-8">
          Start with a solid foundation instead of reinventing the wheel every
          time.
        </p>

        <Link to="/register" className="btn btn-primary btn-wide">
          Create Account
        </Link>
      </section>
    </div>
  );
};

export default Home;
