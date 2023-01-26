import { Box } from "@mui/system";
import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import StarIcon from "@mui/icons-material/Star";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ApartmentIcon from "@mui/icons-material/Apartment";

const DestinationDetail = () => {
  const images = [
    {
      img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    },
    {
      img: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80",
    },
    {
      img: "https://images.unsplash.com/photo-1606402179428-a57976d71fa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2748&q=80",
    },
    {
      img: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80",
    },
    {
      img: "https://images.unsplash.com/photo-1578774204375-826dc5d996ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80",
    },
    {
      img: "https://images.unsplash.com/photo-1561501900-3701fa6a0864?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80",
    },
  ];
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        maxWidth: "1280px",
        height: "60vh",
        margin: "40px auto",
        backgroundColor: "white",
        borderRadius: "18px",
        boxShadow: "0px 0px 10px #00000040",
        padding: "20px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          // height: "50px",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            gap: "5px",
            width: "70%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "70%",
            }}
          >
            <Typography variant="h5" color="black">
              W Bangkok Hotel (SHA Plus+)
            </Typography>
            <Box>
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </Box>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <Box sx={{ display: "flex" }}>
              <LocationOnIcon />
              <Typography variant="p" color="grey">
                106 North Sathorn Road, Silom, Bangrak, Bang Rak, Bangkok,
                10500, Thailand
              </Typography>
            </Box>
            <Box sx={{ display: "flex" }}>
              <ApartmentIcon />
              <Typography variant="p" color="grey">
                In the city’s prestigious Embassy Row and pulsating commercial
                district is the
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={{ display: "flex", gap: "20px" }}>
          <Box>
            <Typography variant="h5" color="black">
              US $208
            </Typography>
          </Box>
          <Button sx={{ height: "60px" }} variant="contained">
            Select Room
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "5px",
          widht: "100%",
          height: "60%",
          // backgroundColor: "black",
          padding: "10px",
        }}
      >
        <Box sx={{ width: "30%", height: "100%" }}>
          <img
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "10px",
            }}
            src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
            alt=""
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "5px",
            width: "70%",
            height: "100%",
            // backgroundColor: "beige",
          }}
        >
          {images.map((i) => (
            <Box
              sx={{
                width: "32%",
                height: "49%",
              }}
            >
              <img
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "5px",
                }}
                src={i.img}
                alt=""
              />
            </Box>
          ))}
        </Box>
      </Box>
      <Box></Box>
    </Box>
  );
};

export default DestinationDetail;
