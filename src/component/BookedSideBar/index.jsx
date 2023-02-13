import React from "react";
import { useState } from "react";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import ClearIcon from "@mui/icons-material/Clear";
const BookedSideBar = () => {
  const [isSideBar, setIsSideBar] = useState(false);
  return (
    <>
      {isSideBar ? (
        <Box
          sx={{
            position: "absolute",
            width: "400px",
            height: "100vh",
            right: "0",
            top: "0",
            backgroundColor: "white",
            boxShadow: "0px 0px 20px #7F7F7F",
          }}
        >
          <Button onClick={() => setIsSideBar(false)}>
            <ClearIcon />
          </Button>
          <Box>
            <Box
              sx={{ width: "100%", height: "50px", backgroundColor: "grey" }}
            ></Box>
          </Box>
        </Box>
      ) : (
        <Box sx={{ position: "absolute", right: "0", top: "50%" }}>
          <Button
            sx={{ width: "50px", height: "50px", backgroundColor: "#4E55FF" }}
            onClick={() => setIsSideBar(true)}
          >
            <ShoppingBasketIcon sx={{ color: "white" }} />
          </Button>
        </Box>
      )}
    </>
  );
};

export default BookedSideBar;
