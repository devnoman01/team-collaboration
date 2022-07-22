import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <section
      style={
        {
          // background: url(${banner1})
        }
      }
      className="flex justify-center items-center"
    >
      <div className="flex items-center justify-center">
        <img
          className="w-1/2 mt-[-100px] rounded-lg shadow-2xl"
          //   src={banner}
          alt=""
        />
      </div>
    </section>
  );
};
export default Banner;
