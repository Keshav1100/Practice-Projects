import React, { useState } from "react";
import Button from "../components/Button";
import arrowRight from "../assets/icons/arrow-right.svg";
import { statistics } from "../constants";
import bigShoe1 from "../assets/images/big-shoe1.png";
import { shoes } from "../constants";
import ShoeCard from "../components/ShoeCard";
function Hero() {
  const [bigShoeImage, setBigShoeImage] = useState(bigShoe1);
  return (
    <section
      id="home"
      className="w-full flex flex-col justify-center min-h-screen xl:flex-row  gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="capitalize font-montserrat text-xl text-coral-red">
          Our summer collections
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px]">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3 ">Nike&nbsp;</span>
          Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-full">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Shop now" iconUrl={arrowRight} />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat) => {
            return (
              <div key={stat.label}>
                <p className="text-4xl font-palanquin font-semibold">
                  {stat.value}
                </p>
                <p className="font-montserrat leading-7 text-slate-gray font-medium">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className=" relative flex-1 justify-center items-baseline xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigShoeImage}
          alt="big-shoe-1"
          width={610}
          height={500}
          className="object-contain z-10 relative2"
        />
        <div className="flex sm:gap-6 gap-4 absolute  -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe) => {
            return (
              <div key={shoe.bigShoe} className="">
                <ShoeCard
                  imgUrl={shoe}
                  changeBigShoeImage={(shoe) => {
                    setBigShoeImage(shoe);
                  }}
                  bigShoeImage={bigShoeImage}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Hero;
