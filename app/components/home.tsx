import { Metadata } from "next";
import Image from "next/image";
import '../assets/styles/home.css';

export const metadata: Metadata = {
  title: "Sinc",
  description: "Sample",
};

export default function Hero() {
  return (
      <div  data-hs-carousel='{ "loadingClasses": "opacity-0", "isAutoPlay": false, "speed": 15000 }' className="relative" >
        <div className="hs-carousel relative overflow-hidden w-full full-screen-minus-96 bg-white">
          <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
            <div className="hs-carousel-slide bg-white drop-shadow-md">
                    <div className="full-screen-minus-96 flex">
                      <div className=" w-col-1 flex flex-col md:text-left px-30 pt-24">
                        <h1 className="tx-main ">SINC Partners is a service incubation company</h1>
                        <p className="text-2xl mb-6 grey-1">
                          Connecting experts in product development and growth
                          marketing willing to offer their services to amazing
                          startups in exchange for minute equity (usually 0.5%
                          to 2%).
                        </p>
                        <div className="">
                          <button className="ml-2 px-7 py-3 rounded-full  text-white btn-secondary hover:bg-gray-900 float-left "> SINC With Us </button>
                        </div>
                      </div>
                      <div className="flex w-col-2 items-center justify-center text-left">
                      <img src="/image (3).png" alt="SINC Partners" className="w-full h-full object-cover shadow-lg"/>
                      </div>
                    </div>
            </div>
            <div className="hs-carousel-slide">
              <div className="flex justify-center h-full bg-white p-6 ">
                <span className="self-center text-4xl text-gray-800 transition duration-700 dark:text-white">
                  Second slide
                </span>
              </div>
            </div>
            <div className="hs-carousel-slide">
              <div className="flex justify-center h-full bg-gray-300 p-6 dark:bg-neutral-700">
                <span className="self-center text-4xl text-gray-800 transition duration-700 dark:text-white">
                  Third slide
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 space-x-2 lg:ml-24 lg:pb-2">
          <span className="hs-carousel-active:bg-custom-active hs-carousel-active:border-custom-active size-3 border rounded-full cursor-pointer nex-btn"></span>
          <span className="hs-carousel-active:bg-custom-active hs-carousel-active:border-custom-active size-3 border rounded-full cursor-pointer nex-btn"></span>
          <span className="hs-carousel-active:bg-custom-active hs-carousel-active:border-custom-active size-3 border rounded-full cursor-pointer nex-btn"></span>
        </div>
    </div>
  );
}
