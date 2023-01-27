import { Box } from "@mui/system";
import React from "react";
import Top from "./Top";
import Middle from "./Middle";
import Bottom from "./Bottom";

const HotelDetail = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        maxWidth: "1280px",
        height: "fit-content",
        margin: "40px auto",
        backgroundColor: "white",
        boxShadow: "0px 0px 10px #00000040",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <Top />
      <Middle />
      <Bottom />
    </Box>
  );
};

export default HotelDetail;
