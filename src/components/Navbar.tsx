import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const nevigate = useNavigate();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="container mx-auto w-full">
    <nav className="bg-white ">
      <div className="container mx-auto flex space-x-4 items-center py-4">
        <div className="text-black">
          <a href="/" className="text-2xl font-bold gradient-text">
            NIWAS
          </a>
        </div>
        <div className="hidden md:flex space-x-4 items-center">
          <button
            onClick={() => nevigate("/house")}
            className=" text-gray-800  hover:text-[#9580de]"
          >
            ซื้อบ้าน
          </button>
          <button
            onClick={() => scrollToSection("how-it-works")}
            className=" text-gray-800  hover:text-[#9580de]"
          >
            ซื้อที่ดิน
          </button>
          {/* <span className="text-gray-800">|</span> */}
        </div>
        <div className="md:hidden"></div>
      </div>
    </nav>
    </div>
  );
};

export default Navbar;
