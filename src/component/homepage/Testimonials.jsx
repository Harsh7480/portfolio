import React from "react";

function Testimonials() {
  return (
    <section className="pb-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Section Header */}
        <div className="mb-6">
          <span className="text-sm font-medium text-gray-500 tracking-wider bg-gray-100 dark:text-gray-200 dark:bg-gray-600 py-1 px-3 rounded-full">
            Testimonials
          </span>
        </div>
        <h2 className="text-lg text-gray-600 mb-12 dark:text-gray-300">
          Nice things people have said about me:
        </h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-gray-50 dark:bg-gray-800 shadow-md rounded-xl p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
            <img
              src="/images/cl.png"
              alt="John Doe"
              className="w-16 h-16 rounded-full object-cover mb-4 border-2 border-gray-300"
            />
            <p className="text-gray-600 dark:text-gray-300  mb-4 italic">
              “Job well done! I am really impressed. He is very good at what he
              does; I would recommend <span className="font-semibold text-gray-800 dark:text-gray-100">Harsh</span> and will rehire in the future for
              Frontend development.”
            </p>
            <div>
              <p className="font-semibold text-gray-800 dark:text-gray-100">Michael Anderson</p>
              <p className="text-sm text-gray-500 dark:text-gray-300">Founder - Technova</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-50 dark:bg-gray-800 shadow-md rounded-xl p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
            <img
              src="/images/cl3.png"
              alt="John Doe"
              className="w-16 h-16 rounded-full object-cover mb-4 border-2 border-gray-300"
            />
            <p className="text-gray-600 dark:text-gray-300 mb-4 italic">
              “Great guy, highly recommended for any COMPLEX front-end
              development job! His skills are top-notch and he will be an
              amazing addition to any team.”
            </p>
            <div>
              <p className="font-semibold text-gray-800 dark:text-gray-100">John Smith</p>
              <p className="text-sm text-gray-500 dark:text-gray-300">Founder - Luxe Beauty</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-50 dark:bg-gray-800 shadow-md rounded-xl p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
            <img
              src="/images/cl2.png"
              alt="John Doe"
              className="w-16 h-16 rounded-full object-cover mb-4 border-2 border-gray-300"
            />
            <p className="text-gray-600 mb-4 italic dark:text-gray-300">
              “<span className="font-semibold text-gray-800 dark:text-gray-300">Harsh</span> was extremely easy and pleasant to work with and he truly
              cares about the project being a success. Harsh has a high level of
              knowledge and was able to work on my MERN stack application
              without any issues.”
            </p>
            <div>
              <p className="font-semibold text-gray-800 dark:text-gray-100">Mark Thompson</p>
              <p className="text-sm text-gray-500 dark:text-gray-300">Freelancer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
