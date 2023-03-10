import React from "react";
import Bg from "./bgImage";
import TopCategories from "./Categories";
import Search from "./search";
import VacationDestinations from "./vacationDestinations";

const Header = ({ destinations, isCategoryDetail, setIsCategoryDetail }) => {
  return (
    <div className="vh100">
      <Bg />
      <div className="space-between">
        <Search />
        <TopCategories
          destinations={destinations}
          setIsCategoryDetail={setIsCategoryDetail}
          isCategoryDetail={isCategoryDetail}
        />
        <VacationDestinations />
      </div>
    </div>
  );
};

export default Header;
