import React from "react";
import heroImage from "../../assets/hero.svg";
import hero2 from "../../assets/hero2.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Hero = () => {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      loop={true}
    >
      <SwiperSlide>
        <div
          className="h-[910px] w-full bg-cover bg-top sm:bg-center relative"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="container flex flex-col gap-6 text-white items-start absolute top-[45%] left-[50%] translate-x-[-50%] translate-y-[-45%] max-md:items-center">
            <div className="flex justify-start w-full max-md:justify-center">
              <span className="text-2xl font-bold leading-6 text-white max-xl:text-xl max-lg:text-lg max-md:text-base">
                SUMMER 2020
              </span>
            </div>

            <h2 className="text-7xl font-bold leading-[1.2] text-white text-left max-xl:text-6xl max-lg:text-5xl max-md:text-4xl max-sm:text-4xl max-sm:leading-[1.3] max-md:text-center">
              NEW COLLECTION
            </h2>

            <p className="text-3xl font-normal leading-9 text-white max-w-[500px] text-left max-xl:text-2xl max-lg:text-xl max-md:text-lg max-sm:text-[20px] max-sm:leading-7 max-md:text-center">
              We know how large objects will act, but things on a small scale.
            </p>

            <div className="flex justify-start w-full max-md:justify-center">
              <button className="px-10 py-4 bg-[#2DC071] text-2xl font-bold text-white cursor-pointer transition duration-300 hover:bg-[#249b5a] hover:shadow-lg">
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="h-[910px] w-full bg-[#2D8C6B] flex items-center justify-center px-6 sm:px-12 lg:px-24">
      <div className="container flex flex-col lg:flex-row items-center justify-between w-full max-w-[1200px]">
        {/* Text Content */}
        <div className="text-white text-left max-w-[500px] space-y-4">
          <span className="text-2xl font-bold">SUMMER 2020</span>
          <h2 className="text-5xl font-bold leading-[1.2] sm:text-6xl">Vita Classic Product</h2>
          <p className="text-lg sm:text-xl leading-7">
            We know how large objects will act, We know how are objects will act, We know
          </p>
          <div className="flex items-center gap-4">
            <span className="text-2xl font-bold">$16.48</span>
            <button className="px-6 py-3 bg-[#2DC071] text-lg font-bold text-white rounded-md transition duration-300 hover:bg-[#249b5a] hover:shadow-lg">
              ADD TO CART
            </button>
          </div>
        </div>
        
        {/* Image */}
        <div className="mt-8 lg:mt-0">
          <img src={hero2} alt="Product Model" className="max-w-[400px] w-full object-contain" />
        </div>
      </div>
    </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Hero;
