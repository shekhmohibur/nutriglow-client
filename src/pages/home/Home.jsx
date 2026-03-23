import { Link } from "react-router";
import Hero from "./Hero";
import BlogMarquee from "../../components/common/BlogMarquee";

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
        <h2 className="text-3xl font-bold text-center mb-12">
          Why This Starter?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card bg-base-100 shadow p-6 text-center">
            <h3 className="text-xl font-semibold mb-2">Clean Architecture</h3>
            <p className="text-gray-500">
              Well-structured folders, reusable components, and best practices
              used in real companies.
            </p>
          </div>

          <div className="card bg-base-100 shadow p-6 text-center">
            <h3 className="text-xl font-semibold mb-2">Authentication Ready</h3>
            <p className="text-gray-500">
              Firebase authentication with protected routes, context, and hooks
              already wired.
            </p>
          </div>

          <div className="card bg-base-100 shadow p-6 text-center">
            <h3 className="text-xl font-semibold mb-2">Fully Responsive</h3>
            <p className="text-gray-500">
              Mobile-first design using Tailwind and DaisyUI components that
              look great on all devices.
            </p>
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="bg-base-200 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-10">Tech Stack</h2>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Vite",
              "React",
              "Tailwind CSS",
              "DaisyUI",
              "Firebase",
              "React Router",
              "Framer Motion",
              "AOS",
            ].map((tech) => (
              <span
                key={tech}
                className="badge badge-outline badge-lg px-6 py-4"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
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
