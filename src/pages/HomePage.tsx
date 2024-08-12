// App.tsx

import Navbar from "../components/Navbar";
import Home from "../components/Home";
// import Howwork from "../components/Howwork";
// import Market from "../components/Market";
// import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div>
      <Navbar />
        <Home />
      {/* <hr className="my-12 border-t-2 border-gray-300" />{" "} */}
      {/* Add a line between Home and Howwork */}
      {/* <Howwork /> */}
      {/* <hr className="my-12 border-t-2 border-gray-300" />{" "} */}

    </div>
  );
}
