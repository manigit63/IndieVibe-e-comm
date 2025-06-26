// src/components/AmazonStyleCarousel.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules"; // Arrows
import "swiper/css";
import "swiper/css/navigation";

const images = [
  "https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2025/6/24/dff9e0c5-2617-47bb-8153-f0331bd095301750776844057-Clearance-Sale-Desktop-KV_01.gif",
  "https://assets.myntassets.com/f_webp,w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2025/6/24/c4894bd7-e62d-461c-8d64-ec7910e0e4dc1750776844032-Clearance-Sale-Desktop-KV_02.gif",
  "https://images-static.nykaa.com/uploads/fe9bef82-2c22-4915-89ac-c7474ed8c51b.jpg?tr=cm-pad_resize,w-1800",
  "https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/16727128e6a5b4ce.jpeg?q=60",
  "https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/38cac1df60914146.jpeg?q=60 ",
];

const Carousel = () => (
  <div className="w-full relative h-[350px] overflow-hidden">
    <Swiper
      modules={[Autoplay, Navigation]}
      loop={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      navigation
      slidesPerView={1}
      className="w-full h-full">
      {images.map((src, idx) => (
        <SwiperSlide key={idx}>
          <img
            src={src}
            alt={`banner ${idx}`}
            className="w-full h-full object-bottom"
          />
        </SwiperSlide>
      ))}
    </Swiper>

    {/* ✅ Bottom White Gradient */}
    <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#FFFFFF] via-zinc-100/70 to-transparent z-10 pointer-events-none" />
  </div>
);

export default Carousel;
