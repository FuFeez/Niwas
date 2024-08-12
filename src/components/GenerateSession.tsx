import React, { useEffect, useState } from "react";
import ImageSlider from "./ImageSlider";
import OptionSelection from "./OptionSelection";
import Ex1 from "../assets/Images/Exterior/Ex-1.jpeg";
import Ex1Minimalist from "../assets/Images/Exterior/Ex-1-Minimalist.jpg";
import Ex1Modern from "../assets/Images/Exterior/Ex-1-Modern.jpg";
import Ex1MidCentury from "../assets/Images/Exterior/Ex-1-Mid-Century.jpg";

export const GenerateSession: React.FC = () => {
  const [originalImage, setOriginalImage] = useState(Ex1);
  const [genImage, setGenImage] = useState(Ex1Minimalist);
  const [selectedStyle, setSelectedStyle] = useState("Modern");

  useEffect(() => {
    if (selectedStyle === "Minimalist") {
      setGenImage(Ex1Minimalist);
    } else if (selectedStyle === "Modern") {
      setGenImage(Ex1Modern);
    } else if (selectedStyle === "Mid Century") {
      setGenImage(Ex1MidCentury);
    }
  }, [selectedStyle]);

  return (
    <div className="flex flex-col md:flex-row items-center md:items-start justify-center p-8 space-y-8 md:space-y-0 md:space-x-8">
      <div className="w-full md:w-1/2 h-96">
        <ImageSlider originalImage={originalImage} genImage={genImage} />
      </div>
      <div className="w-full md:w-1/2">
        <OptionSelection
          selectedStyle={selectedStyle}
          setSelectedStyle={setSelectedStyle}
          exOne={Ex1}
        />
      </div>
    </div>
  );
};
