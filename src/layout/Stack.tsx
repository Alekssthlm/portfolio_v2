import { useState } from "react";
import { images } from "../stackData.ts";
import StackTile from "../components/StackTile.tsx";

export default function Stack() {

  return (
    <section id="stack-section"
      className={`text-center py-[2rem] lg:py-[6rem] px-[1rem] flex flex-col gap-8`}
    >
      <div className="max-w-[80rem] 2xl:max-w-[120rem] flex flex-col items-center md:gap-8 gap-8 mx-auto w-full ">
        <div className="flex justify-start w-full">
          <h2 className="text-[3rem] md:text-[5rem] font-bold ">STACK<span className="text-[#C77D01]">{"."}</span></h2>
        </div>
        <div className="max-w-[80rem] m-auto flex flex-col items-center md:gap-4 w-full">
          <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-4 lg:gap-4">
            {images.map((image) => {
              return (
                <StackTile name={image.name} image={image.src} key={image.id}/>
              );
            })}
          </div>
        
        </div>
      </div>
    </section>
  );
}
