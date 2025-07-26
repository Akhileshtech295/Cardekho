import React from "react";
import Navbar from "./components/Navbar";
import LoginModal from "./components/LoginModal";
import CarSearchPage from "./components/CarSearchPage";
import MostSearchedCars from "./components/MostSearchedCars";
import ElectricCars from "./components/Electric Cars .jsx";
import UpcomingCars from "./components/UpcomingCars.jsx";
import LatestCars from "./components/LatestCars.jsx";
import UsedCarsByBudget from "./components/UsedCarsByBudget.jsx";
import PopularBrands from "./components/PopularBrands.jsx";
import UsedCarsByCity from "./components/Used Cars By City.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <LoginModal/>
      <CarSearchPage/>
      <MostSearchedCars/>
      <ElectricCars/>
      <UpcomingCars/>
      <LatestCars/>
      <UsedCarsByBudget/>
      <PopularBrands/>
      <UsedCarsByCity/>
      <Footer/>
    </div>
  );
}

export default App;
