import React from "react";

const HeroSection = () => {
  return (
    <section className="relative">
      {/* text part */}
      <div class="hero min-h-screen">
        <div class="hero-overlay bg-secondary bg-opacity-60"></div>
        <div class="hero-content text-center text-white mt-0 pt-0">
          <div class="max-w-lg">
            <h1 class="mb-5 text-5xl font-bold">Empty Life Without Shohoj Pay</h1>
            <p class="">
              We make your life easy by probiding you one of the most important services that is Finance. Use Shohoj Pay and kick out your problems.
            </p>
          </div>
        </div>
      </div>
      {/* img part */}
      <figure className="w-7/12 mx-auto absolute bottom-10 left-52">
        <img src="/images/banner-img.svg" alt="banner" />
      </figure>
      <div className="bg-primary h-72 w-full"></div>
    </section>
  );
};

export default HeroSection;
