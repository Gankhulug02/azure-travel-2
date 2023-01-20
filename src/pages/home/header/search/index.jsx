import React from "react";
import style from "./style.module.scss";

const Search = () => {
  return (
    <div className={style.container}>
      <div>
        <h1>The whole world awaits.</h1>
      </div>
      <div className={style.search}>
        <div className={style.left}>
          <input
            type="search"
            id="gsearch"
            name="gsearch"
            placeholder="Search destinations, hotels"
          />
        </div>
        <div className={style.right}>
          <div className={style.item}>
            <img src="./images/Groupcalendar.svg" alt="qwewx" />
            <button>Check In </button>
          </div>
          <div className={style.item}>
            <img src="./images/Groupcalendar.svg" alt="qwewx" />
            <button>Check Out </button>
          </div>
          <div className={style.item}>
            <img src="./images/Person.svg" alt="qwewx" />
            <button>1 Room , 2 Adults </button>
          </div>
          <button className={style.searchBtn}>Search</button>
        </div>
      </div>
    </div>
  );
};

export default Search;
