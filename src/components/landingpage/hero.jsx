import React from "react";
import { Icon } from "@iconify/react";

const Hero = () => {
  // Map for Logos using your exact paths
  const partners = [
    { name: "Polygon", src: "/assets/images/landingpage/Polygon.png" },
    { name: "Binance", src: "/assets/images/landingpage/labs-h.png" },
    { name: "Sandbox", src: "/assets/images/landingpage/the-sandbox.png" },
    { name: "NASA", src: "/assets/images/landingpage/nasa.png" },
    { name: "Animoca", src: "/assets/images/landingpage/Animoco.png" },
  ];

  return (
    <section
      className="font-manrope w-full min-h-screen flex flex-col justify-between items-center text-center px-4 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/assets/images/landingpage/herobg.png')",
      }}
    >
      <div className=""></div>

      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <div className="bg-[#5B2D65] backdrop-blur-md border border-purple-500/30 px-6 py-2 rounded-full mb-6">
          <p className="text-white text-sm md:text-base font-medium">
            Where play to earn meets gamification
          </p>
        </div>

        <h1 className="text-white font-oswald! text-4xl md:text-6xl font-black uppercase tracking-tight leading-[1.1] mb-8">
          Enjoy Ultimate Gaming <br />
          <span className="text-white">Experience</span>
        </h1>

        <button className="group relative flex items-center gap-2 bg-white text-black px-8 py-3 rounded-full font-bold uppercase tracking-wider hover:bg-red-600 hover:text-white transition-all duration-300">
          Get Started
          <Icon
            icon="mdi:arrow-right"
            className="text-xl transition-transform duration-300 group-hover:translate-x-2"
          />
        </button>
      </div>

      {/* --- Logos Section --- */}
      <div className="w-full max-w-6xl mx-auto pb-8 md:pb-12">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14 opacity-80 px-6">
          {partners.map((partner, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={partner.src}
                alt={partner.name}
                className="h-6 md:h-7 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
