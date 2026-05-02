import React from "react";

const AboutSection = () => {
  return (
    <>
      <div className="flex-row mx-40 mt-16">
        <div className="w-auto h-auto text-red-700 justify-center text-center text-4xl font-bold font-serif">
          ABOUT US
        </div>
        <div className="border border-red-700 border-double mt-1 w-auto"></div>
        <div className=" grid grid-cols-2 mt-16 gap-y-8 gap-x-6 ">
          <div className="grid grid-cols-1 col-span-1 text-center content-center font-serif italic p-14 text-lg">
            "Welcome to our fitness platform, where your journey to a healthier
            <b className="text-red-700 text-xl">you</b> begins with personalized
            guidance and seamless integration."
          </div>
          <div className="grid grid-cols-1  items-center ">
            <div className="rounded-full h-60 w-60 object-cover mx-auto">
              <img
                className="rounded-full h-full w-auto object-cover mx-auto"
                src="/images/image.png"
                alt="1"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 ">
            <div className=" h-60 w-60 object-cover mx-auto">
              <img
                className="rounded-full h-full w-auto object-cover mx-auto"
                src="/images/Screenshot 2024-05-01 145002.png"
                alt="2"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 text-center content-center align-baseline font-serif italic p-14 text-lg">
            Our comprehensive solution combines the power of machine learning
            with curated workout plans, nutrition recommendations, and an
            extensive exercise library and intuitive order management system, we
            empower you to take control of your health and well-being.
          </div>

          <div className="grid grid-cols-1 text-center content-center align-baseline font-serif italic p-14 text-lg">
            Designed for optimal user experience, our platform seamlessly
            integrates e-commerce functionality, ensuring you have access to the
            tools and diverse range of fitness products, all tailored to your
            individual needs.
          </div>
          <div className="grid grid-cols-1 col-span-1 ">
            <div className="rounded-full h-60 w-60 object-cover mx-auto">
              <img
                className="rounded-full h-full w-auto object-cover mx-auto"
<<<<<<< HEAD
                src="/images/Screenshot 2024-05-01 145002.png"
=======
                src="/images/RD_GymEquipmentPres-3DView-Pack01-R.jpg"
>>>>>>> 35106c63c0056617c39bbf283250d035ff5907c3
                alt="3"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
