// make mock house data
type PropertyType = "house" | "land";

export interface Property {
  id: number;
  name: string;
  address: string;
  price: number;
  estimatedPrice?: number;
  bedRoom?: number;
  bathRoom?: number;
  area: number;
  areaUnit: string;
  location: string;
  imageUrl: string;
  type: PropertyType;
}

export interface House {
  id: number;
  imgFirst: string;
  imgSecond?: string;
  imgThird?: string;
  imgFourth?: string;
  imgFifth?: string;
  name: string;
  address: string;
  price: number;
  estimatedPrice: number;
  bedRoom: number;
  bathRoom: number;
  area: number;
  areaUnit: string;
  detail: string;
  type: PropertyType;
  furniture: string;
  permission: string;
}

export const houseList: Property[] = [
  {
    id: 1,
    name: "ขายทาวน์เฮาส์ (อีสเทิร์นแลนด์เฮาส์ 1)",
    address:
      "อีสเทิร์นแลนด์เฮ้าส์ 1, 126/114 ซอยศรีราชา-หนองค้อ10 ถนนทางหลวงหมายเลข 3241 ตำบลสุรศักดิ์ อำเภอศรีราชา ชลบุรี",
    price: 1600000,
    estimatedPrice: 1500000,
    bedRoom: 3,
    bathRoom: 2,
    area: 100,
    areaUnit: "sqm",
    location: "Location 1",
    imageUrl:
      "https://www.ghbhomecenter.com/v3/property/api/Media/240808609165228605",
    type: "house",
  },
  {
    id: 2,
    name: "House 2",
    address: "Address 2",
    price: 200000,
    estimatedPrice: 300000,
    bedRoom: 4,
    bathRoom: 3,
    area: 150,
    areaUnit: "sqm",
    location: "Location 2",
    imageUrl:
      "https://sg-rpfs.pgimgs.com/projectnet-project/121652/ZPPHO.149588793.R550X550/The-Origin-Sukhumvit-105-%E0%B8%9A%E0%B8%B2%E0%B8%87%E0%B8%99%E0%B8%B2-Thailand.png",
    type: "house",
  },
  {
    id: 3,
    name: "House 3",
    address: "Address 3",
    price: 300000,
    estimatedPrice: 400000,
    bedRoom: 5,
    bathRoom: 4,
    area: 200,
    areaUnit: "sqm",
    location: "Location 3",
    imageUrl:
      "https://sg-rpfs.pgimgs.com/projectnet-project/121652/ZPPHO.149588793.R550X550/The-Origin-Sukhumvit-105-%E0%B8%9A%E0%B8%B2%E0%B8%87%E0%B8%99%E0%B8%B2-Thailand.png",
    type: "house",
  },
];

// make mock land data
export const landList: Property[] = [
  {
    id: 1,
    name: "Land 1",
    address: "Address 1",
    price: 100000,
    estimatedPrice: 200000,
    area: 100,
    areaUnit: "sqm",
    location: "Location 1",
    imageUrl:
      "https://th1-cdn.pgimgs.com/listing/11385713/UPHO.122311613.V800/%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%94%E0%B8%B4%E0%B8%99-%E0%B9%80%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%8A%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B8%A3%E0%B8%B2%E0%B8%A2-Thailand.jpg",
    type: "land",
  },
  {
    id: 2,
    name: "Land 2",
    address: "Address 2",
    price: 200000,
    area: 150,
    areaUnit: "sqm",
    location: "Location 2",
    imageUrl:
      "https://th1-cdn.pgimgs.com/listing/11385713/UPHO.122311613.V800/%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%94%E0%B8%B4%E0%B8%99-%E0%B9%80%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%8A%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B8%A3%E0%B8%B2%E0%B8%A2-Thailand.jpg",
    type: "land",
  },
  {
    id: 3,
    name: "Land 3",
    address: "Address 3",
    price: 300000,
    estimatedPrice: 400000,
    area: 200,
    areaUnit: "sqm",
    location: "Location 3",
    imageUrl:
      "https://th1-cdn.pgimgs.com/listing/11226325/UPHO.120356590.V800/Zelle-%E0%B8%A8%E0%B8%B2%E0%B8%A5%E0%B8%B2%E0%B8%A2%E0%B8%B2-%E0%B8%9E%E0%B8%B8%E0%B8%97%E0%B8%98%E0%B8%A1%E0%B8%93%E0%B8%91%E0%B8%A5-Thailand.jpg",
    type: "land",
  },
];

export const houseDetailFirst: House = {
  id: 1,
  imgFirst:
    "https://www.ghbhomecenter.com/v3/property/api/Media/240808609165228605",
  imgSecond:
    "https://www.ghbhomecenter.com/v3/property/api/Media/240808609464364302",
  imgThird:
    "https://www.ghbhomecenter.com/v3/property/api/Media/240808609364413745",
  imgFourth:
    "https://www.ghbhomecenter.com/v3/property/api/Media/240808609259391935",
  name: "ขายทาวน์เฮาส์ (อีสเทิร์นแลนด์เฮาส์ 1)",
  address:
    "อีสเทิร์นแลนด์เฮ้าส์ 1, 126/114 ซอยศรีราชา-หนองค้อ10 ถนนทางหลวงหมายเลข 3241 ตำบลสุรศักดิ์ อำเภอศรีราชา ชลบุรี",
  price: 1600000,
  estimatedPrice: 1500000,
  bedRoom: 3,
  bathRoom: 2,
  area: 100,
  areaUnit: "sqm",
  detail:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.",
  type: "house",
  furniture: "Furnished",
  permission: "Yes",
};
