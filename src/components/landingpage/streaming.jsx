import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Icon } from "@iconify/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Streaming = () => {
  const slides = [
    {
      id: 1,
      title: "INVATION\nALIENS",
      img: "../../../assets/images/landingpage/aliens.png",
      align: "left",
    },
    {
      id: 2,
      title: "LEGEND\nOF DRAGON",
      img: "../../../assets/images/landingpage/carouel2.png",
      showButton: true,
      align: "left",
    },
    {
      id: 3,
      title: "MONSTER\nCYBER XX6",
      img: "../../../assets/images/landingpage/carouel3.png",
      align: "right",
    },
    {
      id: 4,
      title: "FUTURE\nWARFARE",
      img: "../../../assets/images/landingpage/aliens.png",
      align: "left",
    },
  ];

  return (
    <section className=" py-25 font-manrope min-h-[600px] flex items-center overflow-hidden">
      <div className="max-w-[1300px] mx-auto w-full px-4 md:px-14 relative">
        <button className="swiper-prev absolute left-0 top-1/2 -translate-y-1/2 z-50 text-red-600 hover:text-red-400 transition-all">
          <Icon icon="ph:arrow-left-thin" className="text-4xl md:text-5xl" />
        </button>
        <button className="swiper-next absolute right-0 top-1/2 -translate-y-1/2 z-50 text-red-600 hover:text-red-400 transition-all">
          <Icon icon="ph:arrow-right-thin" className="text-4xl md:text-5xl" />
        </button>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          navigation={{
            prevEl: ".swiper-prev",
            nextEl: ".swiper-next",
          }}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="streaming-swiper !overflow-visible"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="relative w-full h-[400px] overflow-hidden rounded-sm transition-all duration-500 card-body">
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

                {/* Text content aligned per slide data */}
                <div
                  className={`absolute bottom-8 px-6 w-full z-10 flex flex-col
                  ${
                    slide.align === "center"
                      ? "items-center text-center"
                      : slide.align === "right"
                        ? "items-end text-right"
                        : "items-start text-left"
                  }
                `}
                >
                  <h3 className="text-white font-oswald! text-3xl md:text-4xl font-black uppercase leading-[0.85] tracking-tighter mb-4 whitespace-pre-line">
                    {slide.title}
                  </h3>

                  {slide.showButton && (
                    <button className="flex items-center gap-2 bg-red-600 text-white px-4 py-1.5 rounded-sm text-[10px] font-bold uppercase tracking-tighter hover:bg-red-700 transition-colors">
                      PLAY NOW
                      <Icon icon="ph:arrow-right-bold" className="text-xs" />
                    </button>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="custom-pagination flex justify-center gap-3 mt-12 h-6"></div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        /* Scale effect for 3-card layout */
        .streaming-swiper .swiper-slide {
          transition: all 0.5s ease;
          transform: scale(0.8); /* Side cards are smaller */
          opacity: 0.4;
        }

        .streaming-swiper .swiper-slide-active {
          transform: scale(1.1); 
          opacity: 1;
          z-index: 10;
        }

        .streaming-swiper .swiper-slide-active img {
          grayscale: 0;
        }

        /* Pagination dots */
        .custom-pagination .swiper-pagination-bullet {
          background: #332142 !important;
          opacity: 1 !important;
          width: 8px;
          height: 8px;
        }
        .custom-pagination .swiper-pagination-bullet-active {
          background: #ff0000 !important;
          box-shadow: 0 0 10px #ff0000;
          transform: scale(1.3);
        }
      `,
        }}
      />
    </section>
  );
};

export default Streaming;
