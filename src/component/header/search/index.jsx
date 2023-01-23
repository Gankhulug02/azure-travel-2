import { Button } from "@mui/material";
import React from "react";
import DateRangePicker from "./calendar";
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
            {/* <img src="./images/Groupcalendar.svg" alt="qwewx" /> */}
            <DateRangePicker />
          </div>

          <div className={style.item}>
            <img src="./images/Person.svg" alt="qwewx" />
            <button>1 Room , 2 Adults </button>
          </div>

          <Button
            sx={{
              color: "white",
              backgroundColor: "white",
              padding: "12px 45px 12px 45px",
              borderRadius: "20px",
              color: "blue",
              textTransform: "capitalize",
              ":hover": {
                bgcolor: "#808080", // theme.palette.primary.main
                color: "white",
              },
            }}
          >
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Search;
