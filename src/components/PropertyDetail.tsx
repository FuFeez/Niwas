import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { houseDetailFirst } from "../data/PropertyData";

export const PropertyDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const propertyDetail = houseDetailFirst; // Replace with actual data fetching logic based on ID

  const images = [
    propertyDetail.imgFirst,
    propertyDetail.imgSecond,
    propertyDetail.imgThird,
    propertyDetail.imgFourth,
  ].filter(Boolean);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex flex-col mb-4 w-[90%] mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Image Section with Slide Buttons */}
      <div className="relative flex justify-center items-center w-full h-96 bg-gray-200 mx-auto">
        <div className="relative flex justify-center w-1/2 h-full items-center">
          <button
            onClick={handlePrevImage}
            className="absolute left-0 p-2 bg-gray-800 text-white rounded-full focus:outline-none"
          >
            &#9664;
          </button>
          <img
            src={images[currentImageIndex]}
            alt={`${propertyDetail.name}-${currentImageIndex + 1}`}
            className="object-cover w-full h-full"
          />
          <button
            onClick={handleNextImage}
            className="absolute right-0 p-2 bg-gray-800 text-white rounded-full focus:outline-none"
          >
            &#9654;
          </button>
        </div>
      </div>

      {/* Details Section */}
      <div className="w-full p-4 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 p-4">
          {/* Second Section: Name and Address */}
          <div className="mb-4">
            <h2 className="text-2xl font-bold">{propertyDetail.name}</h2>
            <p className="text-gray-600">{propertyDetail.address}</p>
          </div>
          {/* Third Section: Price and Specifications */}
          <div className="mb-4">
            <p className="text-xl font-semibold">
              Price: ${propertyDetail.price}
            </p>
            <p className="text-gray-600">
              Estimated Price: ${propertyDetail.estimatedPrice}
            </p>
            <p className="text-gray-600">Bedrooms: {propertyDetail.bedRoom}</p>
            <p className="text-gray-600">
              Bathrooms: {propertyDetail.bathRoom}
            </p>
            <p className="text-gray-600">
              Area: {propertyDetail.area} {propertyDetail.areaUnit}
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-4">
          {/* Fourth Section: Google Map */}
          <div className="mb-4">
            <iframe
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                propertyDetail.address
              )}&output=embed`}
              width="100%"
              height="300"
              allowFullScreen={true}
              loading="lazy"
              className="border-0"
            ></iframe>
          </div>
          {/* Fifth Section: Detailed Description */}
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Details</h3>
            <p className="text-gray-600">{propertyDetail.detail}</p>
          </div>
          {/* Sixth Section: Additional Information */}
          <div className="mb-4 flex flex-col md:flex-row">
            <div className="w-full md:w-1/2">
              <p className="text-gray-600">Type: {propertyDetail.type}</p>
              <p className="text-gray-600">
                Furniture: {propertyDetail.furniture}
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <p className="text-gray-600">
                Permission: {propertyDetail.permission}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
