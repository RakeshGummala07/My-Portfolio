import React from "react";
import RolesCard from "./RolesCard";
export default function NameCard() {
  return (
    <>
      <div className="screen-line-after  border-x border-edge sm:h-32 md:h-40 flex items-center bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 rounded-xl shadow-sm   text-gray-800 dark:text-gray-100 leading-relaxed">
        <div className="">
          <img
            className="size-32 sm:size-40 p-1 rounded-full border border-neutral-500"
            src="/icons/logo.jpg"
            alt="Profile"
            width="200"
            height="200"
          />
        </div>
        <div className="m-1 ml-2">
          <div className="">
            <p className="text-xl md:text-2xl font-bold">Rakesh Gummala</p>
          </div>
          <div className="p-0.5 border border-gray-500 rounded-xl  bg-white/20 dark:bg-black/20 shadow-gray-500">
            <RolesCard />
          </div>
        </div>
      </div>
    </>
  );
}
