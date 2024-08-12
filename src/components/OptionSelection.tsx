import React, { useState } from "react";
import Ex1 from "../assets/Images/Exterior/Ex-1.jpeg";
import In1 from "../assets/Images/Interior/In-1.jpeg";
import In2 from "../assets/Images/Interior/In-2.jpeg";

interface OptionSelectionProps {
  selectedStyle: string;
  setSelectedStyle: (style: string) => void;
  setOriginalImage: (image: string) => void;
}

const OptionSelection: React.FC<OptionSelectionProps> = ({
  selectedStyle,
  setSelectedStyle,
  setOriginalImage,
}) => {
  const styles = ["Minimalist", "Modern", "Mid Century", "Custom"];

  return (
    <div className="flex flex-col space-y-4">
      <h2 className="text-xl font-bold">ให้ AI แต่งห้องให้กับคุณ</h2>
      <p>คุณสามารถ...</p>

      <div className="flex space-x-2">
        {styles.map((style) => (
          <button
            key={style}
            onClick={() => setSelectedStyle(style)}
            className={`py-2 px-4 rounded-full ${
              selectedStyle === style
                ? "bg-[#9580de] text-white"
                : "bg-gray-200"
            }`}
          >
            {style}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-4 gap-2">
        {/* Add your images here */}
        <img
          src={Ex1}
          alt="thumbnail"
          className="w-full h-1/2 object-cover"
          onClick={() => setOriginalImage(Ex1)}
        />
        <img
          src={In1}
          alt="thumbnail"
          className="w-full h-1/2 object-cover"
          onClick={() => setOriginalImage(In1)}
        />
        <img
          src={In2}
          alt="thumbnail"
          className="w-full h-1/2 object-cover"
          onClick={() => setOriginalImage(In2)}
        />
        {/* Repeat for other images */}
      </div>

      <div className="bg-gray-100 p-4 rounded-lg mt-4">
        <p className="flex items-center">
          ระยะเวลาการก่อสร้างในรูปแบบ {selectedStyle}
          <span className="ml-auto">
            {selectedStyle === "Minimalist" && "3 เดือน"}
            {selectedStyle === "Modern" && "4 เดือน"}
            {selectedStyle === "Mid Century" && "5 เดือน"}
          </span>
        </p>
        <p className="text-lg font-bold">
          ราคาประเมิน
          {selectedStyle === "Minimalist" && " 2,000,000"}
          {selectedStyle === "Modern" && " 2,100,000"}
          {selectedStyle === "Mid Century" && " 2,300,000"}
          บาท
        </p>
      </div>
    </div>
  );
};

export default OptionSelection;
