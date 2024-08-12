import React, { useState } from "react";

interface OptionSelectionProps {
  selectedStyle: string;
  setSelectedStyle: (style: string) => void;
  exOne: string;
}

const OptionSelection: React.FC<OptionSelectionProps> = ({
  selectedStyle,
  setSelectedStyle,
  exOne,
}) => {
  const styles = ["Minimalist", "Modern", "Mid Century"];

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
          src={exOne}
          alt="thumbnail"
          className="w-full h-1/2 object-cover"
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
