import React from "react";
import Navbar from "./components/Navbar";
import AllRoutes from "./pages/AllRoutes";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <AllRoutes />
      <Footer />
    </>
  );
};

export default App;
