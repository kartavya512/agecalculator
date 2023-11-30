import React from "react";
import im from "../assets/icon-arrow.svg"

const In = () => {
  return (
    <div>
      <div className="flex justify-evenly p-12">
        <div className="">
          <label className="font-bold">DAY</label>
          <br />
          <input
            className="mt-2 block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            type="number"
            placeholder="DD"
            
          ></input>
        </div>
        <div className="">
          <label className="font-bold">MONTH</label>
          <br />
          <input
            className="mt-2 block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            type="number"
            placeholder="MM"
            
          ></input>
        </div>
        <div className="">
          <label className="font-bold ">YEAR</label>
          <br />
          <input
            className=" mt-2 block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            type="number"
            placeholder="YYYY"
            
          ></input>
        </div>
      </div>
      <div className="flex">
      <hr className="mt-5"></hr>
      <div className="colour"><img className="rounded-ful" src={im}></img></div>
    </div></div>
  );
};

export default In;
