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
    name: "ขายบ้านเดี่ยว (หมู่บ้านชื่นสุขนิเวศน์)",
    address:
      "206/12 ซอย ม.ชื่นสุขนิเวศน์ ถนนศรีอินทราทิตย์ ตำบลท่าแค อำเภอเมืองลพบุรี ลพบุรี",
    price: 1580000,
    estimatedPrice: 1500000,
    bedRoom: 2,
    bathRoom: 1,
    area: 51,
    areaUnit: "sqm",
    location: "https://www.google.com/maps?saddr=&daddr=14.8266,100.642",
    imageUrl:
      "https://www.ghbhomecenter.com/v3/property/api/Media/240802180239075327",
    type: "house",
  },
  {
    id: 3,
    name: "ขายบ้านเดี่ยว ทรายมูล อ.สันกำแพง จ.เชียงใหม่",
    address:
      "129 ซอยบ้านดอนมูล ถนนสันกำแพง-ออนหลวย ต.ทรายมูล อ.สันกำแพง จ.เชียงใหม่",
    price: 1900000,
    estimatedPrice: 1700000,
    bedRoom: 1,
    bathRoom: 1,
    area: 57,
    areaUnit: "sqm",
    location: "https://www.google.com/maps?saddr=&daddr=18.7437,99.145",
    imageUrl:
      "https://www.ghbhomecenter.com/v3/property/api/Media/240802180098977468",
    type: "house",
  },
  {
    id: 4,
    name: "ขายบ้านเดี่ยว (หนองพอก)",
    address: "184 ต.รอบเมือง อ.หนองพอก จ.ร้อยเอ็ด",
    price: 980000,
    estimatedPrice: 1000000,
    bedRoom: 1,
    bathRoom: 1,
    area: 49.5,
    areaUnit: "sqm",
    location: "https://www.google.com/maps?saddr=&daddr=18.7437,99.145",
    imageUrl:
      "https://www.ghbhomecenter.com/v3/property/api/Media/240719204554599678",
    type: "house",
  },
  {
    id: 5,
    name: "ขายบ้านเดี่ยว (บ้านโนนสบาย)",
    address:
      "บ้านโนนสบาย 155 ถนนโชคชัย-เดชอุดม ตำบลกระเทียม อำเภอสังขะ จังหวัดสุรินทร์",
    price: 400000,
    estimatedPrice: 500000,
    bedRoom: 1,
    bathRoom: 1,
    area: 329,
    areaUnit: "sqm",
    location: "https://www.google.com/maps?saddr=&daddr=14.5878,103.695",
    imageUrl:
      "https://www.ghbhomecenter.com/v3/property/api/Media/240718486815931832",
    type: "house",
  },
  {
    id: 6,
    name: "ขายทาวน์เฮ้าส์ (ชุมชนวัฒนาร่มไทร)",
    address:
      "ชุมชนวัฒนาร่มไทร 6/208 ซอยสังฆสันติสุข26 ถนนสังฆสันติสุข เขตกระทุ่มราย แขวงหนองจอก จังหวัดกรุงเทพมหานคร",
    price: 1500000,
    estimatedPrice: 1300000,
    bedRoom: 2,
    bathRoom: 1,
    area: 20.7,
    areaUnit: "sqm",
    location:
      "https://www.ghbhomecenter.com/v3/property/api/Media/240808174731247972",
    imageUrl:
      "https://www.ghbhomecenter.com/v3/property/api/Media/240808174446796968",
    type: "house",
  },
  {
    id: 7,
    name: "ขายทาวน์เฮ้าส์ (อั่งปาโฮม)",
    address:
      "อั่งปาโฮม ทางเข้ากองร้อย อส.ที่2 พะเยา ถนนพหลโยธิน ตำบลบ้านต๋อม อำเภอเมืองพะเยา พะเยา",
    price: 1300000,
    estimatedPrice: 1400000,
    bedRoom: 2,
    bathRoom: 1,
    area: 22.6,
    areaUnit: "sqm",
    location: "https://www.google.com/maps?saddr=&daddr=19.048,99.9361",
    imageUrl:
      "https://www.ghbhomecenter.com/v3/property/api/Media/240808610561490401",
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
