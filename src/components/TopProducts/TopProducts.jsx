import React from "react";
import Img1 from "../../assets/ensalada/fruta3.png";
import Img2 from "../../assets/ensalada/bana4.png";
import Img3 from "../../assets/ensalada/fruta4.png";
import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "banana Ecuador",
    rating: 5.0,
    author: "amarilla",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "banana brasil",
    rating: 4.5,
    author: "amarilla",
    aosDelay: "210",
  },
  {
    id: 3,
    img: Img3,
    title: "banana mexico",
    rating: 2.0,
    author: "amarilla",
    aosDelay: "150",
  },
];

const TopProducts = () => {
  return (
    <div>
      <div className='container '>
        {/* encabezado section */}
        <div className='text-center mb-10 max-w-[600px] mx-auto'>
          <p data-aos='fade-up' className='text-sm text-primary'>
            {" "}
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
          {ProductsData.map((data) => {
            <div className="rounded-2xl bg-white dark:bg-gray-800 hover:vg-black/80 dar:hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]">
            {/* imagen */}
              <img src={data.img} alt=''  />
            </div>;
            {/* detalle */} 
          })}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
