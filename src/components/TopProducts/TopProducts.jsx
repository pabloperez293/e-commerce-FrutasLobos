import React from "react";
import Img1 from "../../assets/manzanas/manza1.png";
import Img2 from "../../assets/manzanas/manza2.png";
import Img3 from "../../assets/manzanas/manza3.png";
import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Manzana Argentina",
    description:
      "lorem3 ,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi, aperiam.",
  },
  {
    id: 2,
    img: Img2,
    title: "Manzana verde brasil",
    description:
      "lorem3 ,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi, aperiam.",
  },
  {
    id: 3,
    img: Img3,
    title: "Manzana mexico",
    description:
      "lorem3 ,Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi, aperiam.",
  },
];

const TopProducts = () => {
  return (
    <div>
      <div className='container '>
        {/* encabezado section */}
        <div className='text-left mb-24 '>
          <p data-aos='fade-up' className='text-sm text-primary'>
            Los mejores Productos
          </p>
          <h1 data-aos='fade-up' className='text-3xl font-bold'>
            Productos seleccionados
          </h1>
          <p data-aos='fade-up' className='text-xs text-gray-400'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
            temporibus, molestias distinctio explicabo tempora eaque et culpa
            magnam voluptate id reiciendis voluptatem sed aliquid. Reiciendis
            quisquam enim incidunt nostrum saepe.
          </p>
        </div>
        {/* cuerpo seccion */}
        <div
          className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center
'>
          {ProductsData.map((data) => (
            <div data-aos="zoom-in"
              className='rounded-2xl bg-white  dark:bg-white-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white 
            relative shadow-xl duration-high group max-w-[300px]'>
              {/* imagen */}
              <div className='h-[100px]'>
                <img
                  src={data.img}
                  alt=''
                  className='max-w-[100px] block mx-auto transform -translate-y-10 group-hover:scale-105 duration-300 drop-shadow-md'
                />
              </div>
              {/* Detalles  */}
              <div className='p-4 text-center'>
                {/* estrellas */}
                <div className="w-full flex items-center justify-center gap-1">
                  <FaStar className='text-yellow-500' />
                  <FaStar className='text-yellow-500' />
                  <FaStar className='text-yellow-500' />
                  <FaStar className='text-yellow-500' />
                </div>
                <h1 className="text-xl font-bold">{data.title}</h1>
                <p className="text-gray-800 group-hover:text-white duration-300 text-sm line-clamp-2">{data.description}</p>
                <button className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary" >Info</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
