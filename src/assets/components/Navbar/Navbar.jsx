import React from "react";
import Logo from "../../../assets/Logo.png";

const Navbar = () => {
  return (
    <div>
      {/* upper Navbar */}
      <div className="bg-primary/50 py-2">
        <div className='container flex justify-between items-center'>
        
        <div>
          <a href='#' className='font-bold text-2xl sm:text-3xl flex gap-2'>
            <img src={Logo} alt='Logo' className='w-10' />
            Tienda de frutas wolf
          </a>
        </div>
        {/* Buscador */}
        <div>
          <div className='group'>
            <input
              type='text'
              placeholder='Buscar'
              className='w-[200px] sm:w-[200]group-hover:w-[300px] transition-all duration-300 rounded-full border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary '
            />
          </div>
          
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default Navbar;
