import React from "react";
import Bg from "./bgImage";
import TopCategories from "./Categories";
import Search from "./search";
import VacationDestinations from "./vacationDestinations";

const Header = () => {
  return (
    <div className="vh100">
      <Bg />
      <div className="space-between">
        <Search />
        <TopCategories />
        <VacationDestinations />
      </div>
    </div>
  );
};

export default Header;
