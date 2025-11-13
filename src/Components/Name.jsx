import React from "react";

export default function Name() {
  return (
    <>
      <div className="h-40 flex items-center relative  border border-amber-600 ">
        <div className="">
          <img
            className=" h-40 w-40 p-1 rounded-full border border-neutral-500"
            src="https://i.pinimg.com/564x/a0/81/55/a08155427a44e000276681a166c65337.jpg"
            alt="Profile"
            width="200"
            height="200"
          />
        </div>
        <div className="absolute top-18 left-42">
          <div className="">
            <p className="text-2xl font-bold">Rakesh Gummala</p>
          </div>
          <div className="">
            <p className="py-2">Full Stack Developer</p>
          </div>
        </div>
      </div>
    </>
  );
}
