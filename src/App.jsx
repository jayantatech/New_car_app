import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./Sections/Header";
import Hero from "./Sections/Hero";
import "./App.css";
import FeaturedCars from "./Sections/FeaturedCars";
import BrandsShow from "./Sections/BrandsShow";
import LuxuriousCars from "./Sections/LuxuriousCars";
import CarUpdates from "./Sections/CarUpdates";
import ShowCars from "./Sections/ShowCars";
import Footer from "./Sections/Footer";
function App() {
  const [count, setCount] = useState(0);

  const [featuredActiv, setFeaturedActiv] = useState("trending");

  return (
    <>
      <Header />
      <Hero />
      <FeaturedCars
        allinfo={{
          title: "Featured Cars",
          tab1: "trending",
          tab2: "popular",
          tab3: "electric",
        }}
      />

      <ShowCars />
      <BrandsShow />

      <LuxuriousCars allinfo={{ title: "Luxurious Cars" }} />
      <CarUpdates
        allinfo={{
          title: "Car Updates",
          tab1: "Car Blog",
          tab2: "Video",
        }}
      />
      <Footer />
      {/* <div className="h-[1200px] w-full"></div> */}
    </>
  );
}

export default App;
