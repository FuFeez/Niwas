import Navbar from "../components/Navbar";
import { PropertyDetail } from "../components/PropertyDetail";
import { GenerateSession } from "../components/GenerateSession";

export default function DetailPage() {
  return (
    <div>
      <Navbar />
      <PropertyDetail />
      <GenerateSession />
    </div>
  );
}