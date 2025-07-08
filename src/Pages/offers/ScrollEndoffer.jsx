import React from "react";
import { useNavigate } from "react-router-dom";

const ScrollEndoffer = () => {
  const navigate = useNavigate();

  const handleBannerClick = () => {navigate("/")
    console.log("clicked")
  }

  
  return (
    <div
      className="w-full max-w-6xl mx-auto flex flex-col sm:flex-row mt-10 mb-2 cursor-pointer items-center sm:items-stretch gap-4 sm:gap-0 px-2 sm:px-4 lg:px-0"
      onClick={handleBannerClick}
    >
      {/* left */}
      <div className="w-full sm:w-1/4 lg:w-1/5 flex justify-center items-center gap-2">
        <img
          src="https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_578,c_limit,fl_progressive/w_578,h_758,q_60,,dpr_2,fl_progressive/assets/images/2025/JUNE/24/Cy6aAkKx_5e847b45e3744807af4e8ae7eeda6ad1.png"
          alt=""
          className="w-1/2 sm:w-2/3 object-contain"
        />
        <img
          src="https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_578,c_limit,fl_progressive/w_578,h_758,q_60,,dpr_2,fl_progressive/assets/images/2025/6/24/b2ffd5c2-0842-4881-b62d-c61e33f295a31750782924533-download--26-.png"
          alt=""
          className="w-1/2 sm:w-2/3 object-contain"
        />
      </div>
      {/* center */}
      <div className="w-full sm:w-2/4 lg:3/5 flex flex-col justify-around text-center py-6 sm:py-8 mx-auto">
        <div className="marquee-container">
          <div className="marquee">Whoa, you have seen it all!</div>
        </div>
        <div className="marquee-container mt-4">
          <div className="marquee reverse">
            Hang tight — fresh drops are coming very soon! ᯓ ✈︎
          </div>
        </div>
        <img
          src="https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_600,c_limit,fl_progressive/w_1312,q_60,,dpr_2,fl_progressive/assets/images/2025/6/27/69544579-dd02-466a-b45c-394d2428d6b31751010899092-Bank-AU.gif"
          alt="bank offer"
          className="mx-auto w-3/4 sm:w-2/3 lg:w-1/2"
        />
      </div>
      {/* right */}
      <div className="w-full sm:w-1/4 lg:w-1/5 flex justify-center items-center gap-2">
        <img
          src="https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_578,c_limit,fl_progressive/w_578,h_758,q_60,,dpr_2,fl_progressive/assets/images/2025/JUNE/24/ZC71HZvt_79aed45da4994d1188bf7a2baef84d61.png"
          alt=""
          className="w-1/2 sm:w-2/3 object-contain"
        />
        <img
          src="https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_578,c_limit,fl_progressive/w_578,h_758,q_60,,dpr_2,fl_progressive/assets/images/2025/JUNE/24/SJq7fmDg_8f39e4267b6e410e974bc939b01c2bdb.png"
          alt=""
          className="w-1/2 sm:w-2/3 object-contain"
        />
      </div>
    </div>
  );
};

export default ScrollEndoffer;
