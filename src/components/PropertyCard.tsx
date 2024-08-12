import { Property } from "../data/PropertyData";
import React from "react";
import { Link } from "react-router-dom";

interface PropertyCardProps {
  property: Property;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <Link to={`/property/${property.id}`} className="w-full">
      <div className="flex mb-4 w-[45%] mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Image Section */}
        <div className="w-[40%] h-[200px] overflow-hidden">
          <img
            src={property.imageUrl}
            alt={property.name}
            className="object-cover w-full h-full"
          />
        </div>
        {/* Details Section */}
        <div className="w-[60%] p-4 flex flex-col justify-between">
          <h1 className="text-xl font-semibold mb-2">{property.name}</h1>
          <p className="text-gray-700 mb-1">{property.address}</p>
          <p className="text-gray-700 mb-1">฿{property.price}</p>
          <p className="text-gray-700 mb-1">
            ฿{property.estimatedPrice} (EstimateAI)
          </p>
          <p className="text-gray-700 mb-1">
            {property.bedRoom} Bed {property.bathRoom} Bath
          </p>
          <p className="text-gray-700 mb-1">
            {property.area} {property.areaUnit}
          </p>
        </div>
      </div>
    </Link>
  );
};
