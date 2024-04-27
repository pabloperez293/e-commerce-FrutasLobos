import React from "react";
import footerLogo from "../../assets/Logo.png";
import Banner from "../../assets/website/footer-pattern.jpg";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: `bottom`,
  backgroundRepeat: `no-repeat`,
  backgroundSize: `cover`,
  height: "100%",
  width: "100%",
};

const FooterLinks = [
  {
    title: "home",
    link: "#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

const Footer = () => {
  return (
    <div style={BannerImg} className='text-white mb-20'>
      <div className='container'>
        <div className='grid md:grid-cols-3 pv-44 pt-5 '>
          {/* compañia */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3"><img src={footerLogo} alt="" className="max-w-[50px]" />shopsy</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
              placeat!
            </p>
          </div>
          {/* nav links */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
