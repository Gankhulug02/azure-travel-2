import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { NavLink } from "react-router-dom";
import style from "./style.module.scss";

const TopCategories = () => {
  const categories = [
    { icon: "./images/Beach.svg", title: "Beach" },
    { icon: "./images/cactus.svg", title: "Desert" },
    { icon: "./images/mountain.svg", title: "Mountains" },
    { icon: "./images/building.svg", title: "Iconic Cities" },
    { icon: "./images/house.svg", title: "Houseboats" },
    { icon: "./images/countryside.svg", title: "Countryside" },
    { icon: "./images/camping.png", title: "Camping" },
    { icon: "./images/castle.svg", title: "Castles" },
    { icon: "./images/skiing.svg", title: "Skiing" },
    { icon: "./images/Tropical.svg", title: "Tropical" },
  ];
  return (
    <Box
      sx={{
        display: { xs: "", md: "flex" },
        flexDirection: "column",
        gap: "40px",
        ml: "10%",
        mr: "10%",
      }}
    >
      <Box>
        <h1>Top categories</h1>
      </Box>
      <Box
        sx={{
          display: { md: "flex" },
          justifyContent: "space-between",
          flexDirection: { sx: "column", md: "row" },
        }}
      >
        {categories.map((i) => (
          <Box>
            <NavLink to="/categoryDetail">
              <Button
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img src={i.icon} alt="" className={style.icon} />
                <p>{i.title}</p>
              </Button>
            </NavLink>
          </Box>
        ))}
      </Box>
    </Box>
    // <div className={style.container}>
    //   <h1>Top categories</h1>
    //   <div className={style.categories}>
    //     {categories.map((i) => (
    //       <div>
    //         <img src={i.icon} alt="" className={style.icon} />
    //         <p>{i.title}</p>
    //       </div>
    //     ))}
    //   </div>
    // </div>
  );
};

export default TopCategories;
