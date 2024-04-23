import React from "react";
import Img1 from "../../assets/bananas/bana1.png";
import Img2 from "../../assets/bananas/bana2.png";
import Img3 from "../../assets/bananas/bana3.png";
import Img4 from "../../assets/bananas/bana4.png";
import Img5 from "../../assets/bananas/bana5.png";
import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "banana Ecuador",
    rating: 5.0,
    author: "white",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "banana brasil",
    rating: 4.5,
    author: "red",
    aosDelay: "210",
  },
  {
    id: 3,
    img: Img3,
    title: "banana mexico",
    rating: 2.0,
    author: "white",
    aosDelay: "150",
  },
  {
    id: 4,
    img: Img4,
    title: "banana colombia",
    rating: 5.0,
    author: "brown",
    aosDelay: "350",
  },
  {
    id: 5,
    img: Img5,
    title: "banana brasil",
    rating: 5.0,
    author: "Pink",
    aosDelay: "110",
  },
];

const Products = () => {
  return (
    <div className='mt-14 mb-12'>
      <div className='container'>
        {/* encabezado  */}
        <div className='text-center mb-10 max-w-[600px] mx-auto'>
          <p data-aos="fade-up" className='text-sm text-primary'>
            {" "}
            Productos que te pueden interesar
          </p>
          <h1 data-aos="fade-up" className='text-3xl font-bold'>Productos</h1>
          <p data-aos="fade-up" className='text-xs text-gray-400'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
            temporibus, molestias distinctio explicabo tempora eaque et culpa
            magnam voluptate id reiciendis voluptatem sed aliquid. Reiciendis
            quisquam enim incidunt nostrum saepe.
          </p>
        </div>
        {/* cuerpo  */}
        <div>
          <div className='grid grid-cols-1 sm-grid-cols-3 md:grid-cols-4 lg-grid-cols-5 place-items-center gap-5'>
            {/* Tarjetas */}
            {ProductsData.map((data) => (
              <div data-aos="fade-up" data-aos-delay={data.aosDelay} key={data.id} className='space-y-3'>
                <img
                  src={data.img}
                  alt=''
                  className='h-[220px] w-[150px} object-cover rounded-md'
                />
                <div>
                  <h3 className='font-semibold'>{data.title}</h3>
                  <p className='text-sm text-gray-500'>{data.color}</p>
                  <div className='flex items-center gap-1'>
                    <FaStar className='text-yellow-400' />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
