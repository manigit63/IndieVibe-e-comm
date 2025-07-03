import React from "react";

const Banner = () => {
  return (
    <section className="w-full bg-white">
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold uppercase tracking-wider">
          The Biggest Labels
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
        <img
          src="https://content.asos-media.com/-/media/homepages/unisex/generic-hp/oct-2024/28-brands-update/mw/promo_bau_hp_mw_01.jpg"
          alt="Menswear Brand"
          className="w-full h-[500px] shadow-xl object-cover hover:shadow-2xl hover:scale-90 transition-all"
        />
        <img
          src="https://content.asos-media.com/-/media/homepages/unisex/generic-hp/oct-2024/28-brands-update/ww/promo_bau_hp_ww_02---v2.jpg"
          alt="Womenswear 1"
          className="w-full h-[500px] shadow-xl object-cover hover:shadow-2xl hover:scale-90 transition-all"
        />
        <img
          src="https://content.asos-media.com/-/media/homepages/unisex/generic-hp/oct-2024/28-brands-update/ww/promo_bau_hp_ww_04.jpg"
          alt="Womenswear 2"
          className="w-full h-[500px] shadow-xl object-cover hover:shadow-2xl hover:scale-90 transition-all"
        />
        <img
          src="https://content.asos-media.com/-/media/homepages/unisex/generic-hp/oct-2024/28-brands-update/ww/promo_bau_hp_ww_03.jpg"
          alt="Womenswear 3"
          className="w-full h-[500px] shadow-xl object-cover hover:shadow-2xl hover:scale-90 transition-all"
        />
      </div>
    </section>
  );
};

export default Banner;
