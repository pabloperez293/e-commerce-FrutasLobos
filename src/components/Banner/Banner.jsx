import React from "react";
import BannerImg from "../../assets/frutas/fruta1.png";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";

import { GiFoodTruck } from "react-icons/gi";

const Banner = () => {
  return (
    <div className='min-h-[550px] flex justify-center items-center py-12 sm:py-0'>
      <div className='container'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 items-center'>
          {/* imagen    */}
          <div data-aos='zoom-in' className="">
            <img
              src={BannerImg}
              alt=''
              className='max-w-[400px] h-[350px] w-full mx-auto  drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover'
            />
          </div>
          {/* Detalles del texto */}
          <div className="felx flex-col justify-center gap-6 sm:pt-0">
            <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold">Lo mejor que salio este mes %25</h1>
            <p data-aos="fade-up" className="text-sm text-gray-500 tracking-wide leading-5">Lorem ipsum dolor, sit amet consectetur adipisicing.</p>

            <div className="flex flex-col gap-4">

            <div data-aos="fade-up" className="flex items-center gap-4">
                    <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-500"/>
                    <p> Es el mejor producto</p>
                </div>

                <div data-aos="fade-up" className="flex items-center gap-4">
                    <IoFastFood className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-500"/>
                    <p> Envios</p>
                </div>
                
                <div data-aos="fade-up" className="flex items-center gap-4">
                    <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-500"/>
                    <p> Metodo de pago </p>
                </div>

                <div data-aos="fade-up" className="flex items-center gap-4">
                    <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-500"/>
                    <p> Oferta</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
