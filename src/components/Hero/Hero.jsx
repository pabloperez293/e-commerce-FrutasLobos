import React from "react";
import Image1 from "../../assets/frutas/fruta1.png";
import Image2 from "../../assets/frutas/fruta2.png";
import Image3 from "../../assets/frutas/fruta3.png";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Frutas de la mejor calidad posible",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sapiente, magni, quos, facere voluptas voluptates",
  },
  {
    id: 2,
    img: Image2,
    title: "Frutas de la mejor calidad posible",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sapiente, magni, quos, facere voluptas voluptates",
  },
  {
    id: 3,
    img: Image3,
    title: "Frutas de la mejor calidad posible",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sapiente, magni, quos, facere voluptas voluptates",
  },
];

const Hero = () => {
  return (
    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200'>
      {/* fondo imagen */}
      <div className='h-[700px] w-[700px] bg-primary/50 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9  '></div>
      {/* secciones  */}
      <div className='container pb-8 sm:pb-0'>
        <div>
          <div className='grid grid-cols-1 sm:grid-cols-2'>
            {/* Contenido de texto */}
            <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
              <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold'>
                {" "}
                Lorem ipsum dolor sit amet.
              </h1>
              <p className='text-sm'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
                temporibus.
              </p>
              <div>
                <button
                  className='bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200
              text-white py-2 px-4 rounded-full'>
                  Hace tu pedido
                </button>
              </div>
            </div>
            {/* Contenido  */}
            <div className="order-1 sm:order-2 ">
                <div className="relative z-10">
                    <img src={Image1} alt="" className="2-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 object-contain mx-auto " />
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
