import { Button } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import style from "./style.module.scss";

const TopCategories = ({ setIsCategoryDetail, isCategoryDetail }) => {
  const [dataChange, setDataChange] = useState([]);

  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:8000/categories");
      const data = res.data.data;
      setDataChange(data);
    } catch (err) {
      console.log("err", err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Box
      sx={{
        display: { xs: "flex", md: "flex" },
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
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          width: "100%",
          overflowX: "scroll",
          // backgroundColor: "black",
        }}
      >
        {dataChange.map((i) => (
          <Box
            onClick={() => {
              setIsCategoryDetail(i.title);
            }}
          >
            {/* <NavLink to="/categoryDetail"> */}
            <Button
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                // backgroundColor: "black",
                width: "150px",
              }}
            >
              <img src={i.images} alt="" className={style.icon} />
              <p>{i.title}</p>
            </Button>
            {/* </NavLink> */}
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
