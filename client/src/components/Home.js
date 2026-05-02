import React, { useState, useEffect } from "react";
import AboutSection from "./AboutSection";
import SliderHome from "./SliderHome";
import FooterHome from "./FooterHome";
<<<<<<< HEAD
import CHATBOT from "./CHATBOT";
=======
import CHATBOT from "./chatbot";
>>>>>>> 35106c63c0056617c39bbf283250d035ff5907c3
// import ProductsHome from "./ProductsHome";

function Home() {
  const slides = [
<<<<<<< HEAD
    "https://github.com/Phoenix23111/Pain-and-Gain/blob/master/client/public/images/wp5462287-gym-hd-desktop-wallpapers.jpg",
    "https://github.com/Phoenix23111/Pain-and-Gain/blob/master/client/public/images/wp9160506-4k-gym-logo-wallpapers.jpg",
    "https://wallpaperaccess.com/full/809523.jpg",
    "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
=======
    "/images/wp5462287-gym-hd-desktop-wallpapers.jpg",
    "/images/wp9160506-4k-gym-logo-wallpapers.jpg",
    "/images/pxfuel.jpg",
    "/images/wp9738740-gymer-wallpapers.jpg",
>>>>>>> 35106c63c0056617c39bbf283250d035ff5907c3
  ];
  const [showAboutSection, setShowAboutSection] = useState(false);
  const [showProductSection, setShowProductSection] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      // Adjust this value as needed
      const triggerPoint1 = 0.3 * windowHeight; // Trigger when user scrolls past half of the window height
      const triggerPoint2 = 1.8 * windowHeight; // Trigger when user scrolls past half of the window height

      if (scrollPosition > triggerPoint1) {
        setShowAboutSection(true);
      } else {
        setShowAboutSection(false);
      }
      if (scrollPosition > triggerPoint2) {
        setShowProductSection(true);
      } else {
        setShowProductSection(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="grid grid-flow-row">
        {/* SLIDER */}
        <div>
          <SliderHome slides={slides} />
        </div>
        <div>
          <CHATBOT />
        </div>

        {/* About US */}
        <div className=" flex contain-content mx-auto w-auto h-auto px-4">
          <div className="transition-transform duration-[3000] delay-700 ease-in-out transform">
            <div
              className={`${
                showAboutSection ? "slide-in" : ""
              } bg-white text-black h-auto pt-16  mt-28`}
            >
              <div className="bg-white  text-black">
                <AboutSection></AboutSection>
              </div>
            </div>
            <style>{`
              .slide-in {
                animation: slideIn 1s forwards;
                margin-top: 0px;
              }

              @keyframes slideIn {
                from {
                  transform: translateY(100%);
                }
                to {
                  transform: translateY(0);
                }
              }
            `}</style>
          </div>
        </div>

        {/* Shop */}

        <div className="my-16  flex contain-content mx-auto w-auto h-auto px-4">
          <div className="transition-transform duration-[3000] delay-100 ease-in-out transform">
            <div
              className={`${
                showProductSection ? "slide-in1" : ""
              } bg-white text-black h-auto pt-16  mt-28`}
            >
              <div className="bg-white  text-black">
                {/* <ProductsHome /> */}
              </div>
            </div>
            <style>{`
              .slide-in1 {
                animation: slideIn1 1s forwards;
                margin-top: 0px;
              }

              @keyframes slideIn1 {
                from {
                  transform: translateX(-100%);
                }
                to {
                  transform: translateX(0);
                }
              }
            `}</style>
          </div>
        </div>

        {/* Contact */}

        {/* Footer */}
        <div className=" mt-16 flex-row">
          <FooterHome />
        </div>
      </div>
    </>
  );
}

export default Home;
