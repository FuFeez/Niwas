// Home.tsx

import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home">
      <div className="container mx-auto mt-20 text-center mb-20">
        <div className="text-6xl font-bold gradient-text mb-4">NIWAS</div>
        <div className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
          ครบ จบ ทุกขั้นตอน ในการซื้อบ้าน และที่ดิน
        </div>
        <div className="space-x-4">
          <Link to="/house">
            <button className="bg-[#9580de] hover:bg-white hover:text-[#9580de] text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300">
              ซื้อบ้าน
            </button>
          </Link>
          <Link to="/land">
            <button className="bg-[#9580de] hover:bg-white hover:text-[#9580de] text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300">
              ซื้อที่ดิน
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
