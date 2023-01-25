import React from "react";
// import Bg from "./header/bgImage";
// import Nav from "../../component/nav/nav";
import Header from "../../component/header";
import Offers from "../../component/offers";
import BrowseByPropertyType from "../../component/BrowseByPrpertType";
import Connect from "../../component/Connect";
import Footer from "../../component/footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Offers />
      <BrowseByPropertyType />
      <Connect />
      <Footer />
    </div>
  );
};

export default Home;
