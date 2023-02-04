import React from "react";
import { useState } from "react";
// import Bg from "./header/bgImage";
// import Nav from "../../component/nav/nav";
import Header from "../../component/header";
import Offers from "../../component/offers";
import BrowseByPropertyType from "../../component/BrowseByPrpertType";
import Connect from "../../component/Connect";
//////////////////////////////////////////////
import { destinations } from "../../data/destination";
import CategoryDetail from "../categoryDetail";

const Home = () => {
  const [isCategoryDetail, setIsCategoryDetail] = useState("All");
  console.log(isCategoryDetail);
  if (isCategoryDetail == "All") {
    return (
      <div>
        <Header
          isCategoryDetail={isCategoryDetail}
          setIsCategoryDetail={setIsCategoryDetail}
        />
        <Offers />
        <BrowseByPropertyType />
        <Connect />
      </div>
    );
  } else {
    return (
      <CategoryDetail
        destinations={destinations}
        isCategoryDetail={isCategoryDetail}
        setIsCategoryDetail={setIsCategoryDetail}
      />
    );
  }
};

export default Home;
