import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <section
      className="flex justify-center items-center"
    >
      <div className="flex items-center justify-center">
        <img
          className="w-1/2 mt-[-100px] rounded-lg shadow-2xl"
          src="/images/banner-img.svg"
          alt=""
        />
      </div>
    </section>
  );
};
export default Banner;
