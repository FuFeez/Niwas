import React, { useEffect, useState } from "react";
import ImageSlider from "./ImageSlider";
import OptionSelection from "./OptionSelection";

import Ex1 from "../assets/Images/Exterior/Ex-1.jpeg";
import Ex1Minimalist from "../assets/Images/Exterior/Ex-1-Minimalist.jpg";
import Ex1Modern from "../assets/Images/Exterior/Ex-1-Modern.jpg";
import Ex1MidCentury from "../assets/Images/Exterior/Ex-1-Mid-Century.jpg";

import In1 from "../assets/Images/Interior/In-1.jpeg";
import In1Minimalist from "../assets/Images/Interior/In-1-Minimalist.png";
import In2 from "../assets/Images/Interior/In-2.jpeg";
import In2Minimalist from "../assets/Images/Interior/In-2-Minimalist.jpg";

export const GenerateSession: React.FC = () => {
  const [originalImage, setOriginalImage] = useState(Ex1);
  const [genImage, setGenImage] = useState(Ex1Minimalist);
  const [selectedStyle, setSelectedStyle] = useState("Modern");

  // useEffect(() => {
  //   if (selectedStyle === "Minimalist" && originalImage === In1) {
  //     setGenImage(In1Minimalist);
  //   } else if (selectedStyle === "Minimalist" && originalImage === In2) {
  //     setGenImage(In2Minimalist);
  //   } else if (selectedStyle === "Minimalist") {
  //     setGenImage(Ex1Minimalist);
  //   } else if (selectedStyle === "Modern") {
  //     setGenImage(Ex1Modern);
  //   } else if (selectedStyle === "Mid Century") {
  //     setGenImage(Ex1MidCentury);
  //   }
  // }, [selectedStyle]);

  useEffect(() => {
    let imageToSet = originalImage;

    if (originalImage === In1) {
      imageToSet = selectedStyle === "Minimalist" ? In1Minimalist : In1;
    } else if (originalImage === In2) {
      imageToSet = selectedStyle === "Minimalist" ? In2Minimalist : In2;
    } else if (originalImage === Ex1) {
      switch (selectedStyle) {
        case "Minimalist":
          imageToSet = Ex1Minimalist;
          break;
        case "Modern":
          imageToSet = Ex1Modern;
          break;
        case "Mid Century":
          imageToSet = Ex1MidCentury;
          break;
        default:
          imageToSet = Ex1; // default image for Ex1
          break;
      }
    }

    setGenImage(imageToSet);
  }, [selectedStyle, originalImage]);

  return (
    <div className="flex flex-col md:flex-row items-center md:items-start justify-center p-8 space-y-8 md:space-y-0 md:space-x-8">
      <div className="w-full md:w-1/2 h-96">
        <ImageSlider originalImage={originalImage} genImage={genImage} />
      </div>
      <div className="w-full md:w-1/2">
        <OptionSelection
          selectedStyle={selectedStyle}
          setSelectedStyle={setSelectedStyle}
          setOriginalImage={setOriginalImage}
        />
      </div>
    </div>
  );
};
