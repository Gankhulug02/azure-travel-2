import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import RowingIcon from "@mui/icons-material/Rowing";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import ApartmentIcon from "@mui/icons-material/Apartment";

const Honeymoon = () => {
  const destinations = [
    {
      title: "Bali, Indonesia",
      img: "https://images.unsplash.com/photo-1604999333679-b86d54738315?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2050&q=80",
    },
    {
      title: "Bali, Indonesia",
      img: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    },
    {
      title: "Australia, Sydney",
      img: "https://images.unsplash.com/photo-1528072164453-f4e8ef0d475a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
    },
    {
      title: "Paris, France",
      img: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
    },
    {
      title: "Bali, Indonesia",
      img: "https://images.unsplash.com/photo-1604999333679-b86d54738315?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2050&q=80",
    },
    {
      title: "Bali, Indonesia",
      img: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    },
    {
      title: "Bali, Indonesia",
      img: "https://images.unsplash.com/photo-1604999333679-b86d54738315?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2050&q=80",
    },
    {
      title: "Bali, Indonesia",
      img: "https://images.unsplash.com/photo-1604999333679-b86d54738315?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2050&q=80",
    },
  ];
  const program = [
    { icon: <AirplanemodeActiveIcon />, text: "4 Flights" },
    { icon: <ApartmentIcon />, text: "1 Hotel" },
    { icon: <DirectionsCarIcon />, text: "2 Transfers" },
    { icon: <RowingIcon />, text: "4 Activities" },
  ];
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        margin: "40px 0px 0px 10%",
      }}
    >
      <Box>
        <Typography variant="h2" color="black">
          Honeymoon Freebies Special
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: "24px",
          height: "fit-content",
          // backgroundColor: "black",
          overflowX: "scroll",
          padding: "20px",
        }}
      >
        {destinations.map((i) => (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "14px",
              boxShadow: "0px 0px 10px #dbdbdb",
              //   justifyContent: "space-between",
              padding: "12px",
              borderRadius: "18px",
              height: "fit-content",
              backgroundColor: "white",
            }}
          >
            <Box
              sx={{
                width: "340px",
                height: "200px",
              }}
            >
              <img
                src={i.img}
                alt=""
                style={{
                  borderRadius: "18px",
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                }}
              />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <Box>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography variant="p" sx={{ fontSize: "30px" }}>
                    {i.title}
                  </Typography>
                  <Typography variant="p" sx={{ fontSize: "25px" }}>
                    4.9
                  </Typography>
                </Box>
                <Typography variant="p" sx={{ color: "grey" }}>
                  3 Days 4 Nights
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  height: "50px",
                }}
              >
                {program.map((i) => (
                  // <{icon.icon}/>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    {i.icon}
                    <Typography sx={{ color: "#a1a1a1" }}>{i.text}</Typography>
                  </Box>
                ))}
              </Box>
              <Box>
                <Typography variant="">
                  <ul style={{ color: "grey", paddingLeft: "5%" }}>
                    <li>Tour combo with return airport transfer</li>
                    <li>City Tour</li>
                    <li>Curious Corner</li>
                  </ul>
                </Typography>
              </Box>
              <Box sx={{ display: "flex", gap: "24px" }}>
                <Typography
                  variant="p"
                  color="black"
                  sx={{ textDecoration: "line-through" }}
                >
                  ₹88,952
                </Typography>
                <Box sx={{ display: "flex", gap: "4px", alignItems: "end" }}>
                  <Typography variant="h5" color="black">
                    ₹88,952
                  </Typography>
                  <Typography variant="p" color="grey">
                    Per person
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Honeymoon;
