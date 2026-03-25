import Hero from "./Hero";
import BlogMarquee from "../../components/common/BlogMarquee";
import FeaturedProducts from "./FeaturedProducts";
import FeatureHighlights from "../../components/common/FeatureHighlights";
import BlogPost from "./BlogPost";
import TrustFeatures from "../../components/shared/Fearures";

const Home = () => {
  return (
    <div className="space-y-8">
      {/* HERO SECTION */}
      <section className="min-h-[70vh] flex flex-col justify-center items-center text-center px-4 container mx-auto">
        <Hero />
      </section>
      {/* Blog marquee what's on trending */}
      <section className="container mx-auto px-4">
        <BlogMarquee />
      </section>

      {/* FEATURED Products */}
      <section className=" bg-purple-100/30 min-w-full">
        <FeaturedProducts />
      </section>

      {/* Feature */}
      <section className="py-3 rounded-2xl">
        <FeatureHighlights />
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 text-center">
        <BlogPost/>
      </section>
      {/* shopp Look slider */}
      <section className="bg-base-200 pt-4"> 
        <TrustFeatures/>
      </section>
    </div>
  );
};

export default Home;
