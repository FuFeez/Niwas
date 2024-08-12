import React from "react";
import { Property } from "../../data/PropertyData";
import { PropertyCard } from "../PropertyCard";

interface PropertyListProps {
  properties: Property[];
}

export const PropertyList: React.FC<PropertyListProps> = ({ properties }) => {
  return (
    <div className="flex flex-col items-center">
      {properties.map((property, index) => (
        <PropertyCard key={index} property={property} />
      ))}
    </div>
  );
};
