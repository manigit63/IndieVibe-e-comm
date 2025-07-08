import React from "react";

const Banner = () => {
  const images = [
    "https://content.asos-media.com/-/media/homepages/unisex/generic-hp/oct-2024/28-brands-update/mw/promo_bau_hp_mw_01.jpg",
    "https://content.asos-media.com/-/media/homepages/unisex/generic-hp/oct-2024/28-brands-update/ww/promo_bau_hp_ww_02---v2.jpg",
    "https://content.asos-media.com/-/media/homepages/unisex/generic-hp/oct-2024/28-brands-update/ww/promo_bau_hp_ww_04.jpg",
    "https://content.asos-media.com/-/media/homepages/unisex/generic-hp/oct-2024/28-brands-update/ww/promo_bau_hp_ww_03.jpg",
  ];

  return (
    <section className="w-full px-4">
      <div className="text-center py-8">
        <h1 className="text-3xl sm:text-4xl font-bold uppercase tracking-wider">
          The Biggest Labels
        </h1>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((src, index) => (
          <div
            key={index}
            className="aspect-[3/4] overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={src}
              alt={`Banner ${index + 1}`}
              className="w-full h-full object-cover object-center hover:scale-105 active:scale-105 focus:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Banner;