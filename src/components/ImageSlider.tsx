import React, { useState } from "react";
interface ImageSliderProps {
  originalImage: string;
  genImage: string;
}

const ImageSlider: React.FC<ImageSliderProps> = ({
  originalImage,
  genImage,
}) => {
  const [sliderValue, setSliderValue] = useState(50); // Initial position at 50%

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSliderValue(Number(event.target.value));
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="relative w-full h-full">
        {/* First Image */}
        <img
          src={originalImage}
          alt="Before"
          className="absolute top-0 left-0 w-full h-full object-cover"
          style={{ clipPath: `inset(0 ${100 - sliderValue}% 0 0)` }}
        />

        {/* Second Image */}
        <img
          src={genImage}
          alt="After"
          className="absolute top-0 left-0 w-full h-full object-cover"
          style={{ clipPath: `inset(0 0 0 ${sliderValue}%)` }}
        />
      </div>

      {/* Central Slider */}
      <div className="absolute inset-y-0 left-0 flex items-center justify-center w-full pointer-events-none">
        <input
          type="range"
          min="0"
          max="100"
          value={sliderValue}
          onChange={handleSliderChange}
          className="w-full h-full opacity-0 pointer-events-auto"
          style={{ appearance: "none" }}
        />
        <div
          className="absolute h-full w-0.5 bg-white pointer-events-none"
          style={{ left: `${sliderValue}%` }}
        >
          {/* Arrows */}
          {/* <div className="absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-white bg-opacity-75 text-gray-800 text-2xl p-1 rounded-full pointer-events-auto">
            <span className="inline-block transform rotate-180">›</span>
            <span className="inline-block">‹</span>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
