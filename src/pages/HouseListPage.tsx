import React, { useState } from "react";
import { PropertyList } from "../components/Layouts/PropertyList";
import { houseList } from "../data/PropertyData";
import Navbar from "../components/Navbar";

export const HouseListPage: React.FC = () => {
  const [searchText, setSearchText] = useState("");
  const [bedrooms, setBedrooms] = useState<number | "more">(0);
  const [bathrooms, setBathrooms] = useState<number | "more">(0);
  const [selectedImageId, setSelectedImageId] = useState(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const handleBedroomsChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value =
      e.target.value === "more" ? "more" : parseInt(e.target.value, 10);
    setBedrooms(value);
  };

  const handleBathroomsChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value =
      e.target.value === "more" ? "more" : parseInt(e.target.value, 10);
    setBathrooms(value);
  };

  const filteredProperties = houseList.filter((property) => {
    if (selectedImageId) {
      return property.id === 5;
    }
    if (searchText === "บ้านหลังคาจั่ว") {
      return (
        property.id === 1 ||
        property.id === 2 ||
        property.id === 4 ||
        property.id === 6
      );
    }
    if (searchText === "บ้านไม้") {
      return property.id === 5;
    }
    const matchesSearchText = property.name
      .toLowerCase()
      .includes(searchText.toLowerCase());
    const matchesBedrooms =
      bedrooms === 0 ||
      (bedrooms === "more"
        ? (property.bedRoom || 0) > 4
        : (property.bedRoom || 0) === bedrooms);
    const matchesBathrooms =
      bathrooms === 0 ||
      (bathrooms === "more"
        ? property.bathRoom || 0 > 4
        : property.bathRoom || 0 === bathrooms);
    return matchesSearchText && matchesBedrooms && matchesBathrooms;
  });

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      // Assuming you set the ID to true when an image is uploaded
      setSelectedImageId(true);
      // You can also handle the image file here if needed
      const file = event.target.files[0];
      console.log("Image uploaded:", file);
    }
  };
  return (
    <div>
      <Navbar />
      <div>
        <div className="flex justify-center mb-4 mt-4">
          {/* <button
            className="rounded-full  text-white px-4 py-2 mx-2"
            style={{
              background: "linear-gradient(to top right, #51ADF7, #CD4CC3)",
            }}
          >
            Search with Image
          </button> */}
          <button
            className="rounded-full text-white px-4 py-2 mx-2"
            style={{
              background: "linear-gradient(to top right, #51ADF7, #CD4CC3)",
            }}
          >
            <label htmlFor="upload-image" className="cursor-pointer">
              Search with Image
              <input
                type="file"
                id="upload-image"
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
              />
            </label>
          </button>
          <input
            type="text"
            placeholder="Search..."
            className="border-2 border-gray-300 p-2 mx-2 rounded-lg"
            value={searchText}
            onChange={handleSearchChange}
          />
          <select
            className="border-2 border-gray-300 p-2 mx-2 rounded-lg"
            value={bedrooms}
            onChange={handleBedroomsChange}
          >
            <option value="0">Bedrooms</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="more">More than 4</option>
          </select>
          <select
            className="border-2 border-gray-300 p-2 mx-2 rounded-lg"
            value={bathrooms}
            onChange={handleBathroomsChange}
          >
            <option value="0">Bathrooms</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="more">More than 4</option>
          </select>
        </div>
        <div>
          <PropertyList properties={filteredProperties} />
        </div>
      </div>
    </div>
  );
};
