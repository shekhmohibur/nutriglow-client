import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {

  return (

    <section className="py-20 bg-base-200">

      <div className="container mx-auto px-4">

        {/* heading */}
        <div className="text-center mb-14">

          <h1 className="text-3xl md:text-4xl font-bold">

            Contact Us

          </h1>

          <p className="text-gray-500 mt-3">

            We'd love to hear from you. Send us a message and we’ll respond as soon as possible.

          </p>

        </div>



        <div className="grid md:grid-cols-2 gap-10">

          {/* contact form */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm">

            <h2 className="text-xl font-semibold mb-6">

              Send a Message

            </h2>


            <form className="space-y-5">

              {/* name */}
              <div>

                <label className="text-sm">

                  Full Name

                </label>

                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full mt-1 px-4 py-2 border rounded-lg outline-none focus:border-primary"
                />

              </div>


              {/* email */}
              <div>

                <label className="text-sm">

                  Email

                </label>

                <input
                  type="email"
                  placeholder="example@email.com"
                  className="w-full mt-1 px-4 py-2 border rounded-lg outline-none focus:border-primary"
                />

              </div>


              {/* subject */}
              <div>

                <label className="text-sm">

                  Subject

                </label>

                <input
                  type="text"
                  placeholder="Write subject"
                  className="w-full mt-1 px-4 py-2 border rounded-lg outline-none focus:border-primary"
                />

              </div>


              {/* message */}
              <div>

                <label className="text-sm">

                  Message

                </label>

                <textarea
                  rows="4"
                  placeholder="Write your message..."
                  className="w-full mt-1 px-4 py-2 border rounded-lg outline-none focus:border-primary"
                />

              </div>


              {/* button */}
              <button className="btn bg-purple-500 text-white w-full">

                Send Message

              </button>

            </form>

          </div>



          {/* contact info */}
          <div className="space-y-6">

            <div className="bg-white p-6 rounded-2xl shadow-sm">

              <h3 className="font-semibold mb-4">

                Contact Information

              </h3>


              <div className="space-y-4 text-sm">

                <div className="flex items-center gap-3">

                  <FaPhoneAlt className="text-primary" />

                  +1 234 567 890

                </div>


                <div className="flex items-center gap-3">

                  <FaEnvelope className="text-primary" />

                  support@vitalora.com

                </div>


                <div className="flex items-center gap-3">

                  <FaMapMarkerAlt className="text-primary" />

                  123 Wellness Street, NY, USA

                </div>

              </div>

            </div>



            {/* map placeholder */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">

              <iframe
                title="map"
                src="https://maps.google.com/maps?q=New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-62 border-0"
              />

            </div>

          </div>

        </div>

      </div>

    </section>

  );

};

export default Contact;