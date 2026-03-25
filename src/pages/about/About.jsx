import { FaLeaf, FaHeart, FaShieldAlt, FaUsers } from "react-icons/fa";

const About = () => {

  return (

    <div className="bg-base-200">

      {/* hero */}
      <section className="py-20 text-center max-w-4xl mx-auto px-4">

        <h1 className="text-3xl md:text-4xl font-bold">

          About Vitalora

        </h1>

        <p className="text-gray-500 mt-4">

          We believe wellness should be simple, natural, and effective.
          Our mission is to help people live healthier and happier lives through
          high-quality supplements and science-backed solutions.

        </p>

      </section>



      {/* story */}
      <section className="py-16 bg-white">

        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">

          <img
            src="https://images.unsplash.com/photo-1506126613408-eca07ce68773"
            className="rounded-2xl"
          />


          <div>

            <h2 className="text-2xl font-semibold mb-4">

              Our Story

            </h2>

            <p className="text-gray-600 mb-4">

              Vitalora started with a simple idea: create wellness products that
              truly work. Many people struggle with sleep, stress, skin health,
              and energy levels.

            </p>

            <p className="text-gray-600">

              Our team works with experts to ensure every product meets the highest
              quality standards. We combine natural ingredients with modern research
              to deliver results you can trust.

            </p>

          </div>

        </div>

      </section>



      {/* values */}
      <section className="py-16">

        <div className="max-w-6xl mx-auto px-4">

          <h2 className="text-2xl font-semibold text-center mb-12">

            Our Values

          </h2>


          <div className="grid md:grid-cols-4 gap-6">

            <div className="bg-white p-6 rounded-xl text-center shadow-sm">

              <FaLeaf className="text-primary text-2xl mx-auto mb-3" />

              <h3 className="font-semibold">

                Natural Ingredients

              </h3>

              <p className="text-sm text-gray-500 mt-2">

                Carefully selected natural components for better health.

              </p>

            </div>


            <div className="bg-white p-6 rounded-xl text-center shadow-sm">

              <FaShieldAlt className="text-primary text-2xl mx-auto mb-3" />

              <h3 className="font-semibold">

                Quality Assurance

              </h3>

              <p className="text-sm text-gray-500 mt-2">

                Tested products with strict safety standards.

              </p>

            </div>


            <div className="bg-white p-6 rounded-xl text-center shadow-sm">

              <FaHeart className="text-primary text-2xl mx-auto mb-3" />

              <h3 className="font-semibold">

                Customer Care

              </h3>

              <p className="text-sm text-gray-500 mt-2">

                Your wellness journey is our top priority.

              </p>

            </div>


            <div className="bg-white p-6 rounded-xl text-center shadow-sm">

              <FaUsers className="text-primary text-2xl mx-auto mb-3" />

              <h3 className="font-semibold">

                Community Focus

              </h3>

              <p className="text-sm text-gray-500 mt-2">

                Building healthier communities together.

              </p>

            </div>

          </div>

        </div>

      </section>



      {/* team */}
      <section className="py-16 bg-white">

        <div className="max-w-6xl mx-auto px-4">

          <h2 className="text-2xl font-semibold text-center mb-12">

            Meet Our Team

          </h2>


          <div className="grid md:grid-cols-3 gap-8">

            <div className="text-center">

              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                className="w-28 h-28 object-cover rounded-full mx-auto mb-3"
              />

              <h3 className="font-semibold">

                Sarah Lee

              </h3>

              <p className="text-sm text-gray-500">

                Nutrition Expert

              </p>

            </div>


            <div className="text-center">

              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
                className="w-28 h-28 object-cover rounded-full mx-auto mb-3"
              />

              <h3 className="font-semibold">

                Michael Chen

              </h3>

              <p className="text-sm text-gray-500">

                Product Specialist

              </p>

            </div>


            <div className="text-center">

              <img
                src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce"
                className="w-28 h-28 object-cover rounded-full mx-auto mb-3"
              />

              <h3 className="font-semibold">

                Emma Watson

              </h3>

              <p className="text-sm text-gray-500">

                Wellness Advisor

              </p>

            </div>

          </div>

        </div>

      </section>



      {/* CTA */}
      <section className="py-20 text-center">

        <h2 className="text-2xl md:text-3xl font-semibold mb-4">

          Start Your Wellness Journey Today

        </h2>


        <p className="text-gray-500 mb-6">

          Discover products designed to support your health goals.

        </p>


        <a
          href="/shop"
          className="btn bg-purple-500 text-white"
        >

          Shop Now

        </a>

      </section>

    </div>

  );

};

export default About;