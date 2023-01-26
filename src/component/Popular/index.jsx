import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import RowingIcon from "@mui/icons-material/Rowing";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import ApartmentIcon from "@mui/icons-material/Apartment";

const Popular = ({ destinations }) => {
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
        margin: "0px 0px 0px 10%",
      }}
    >
      <Box>
        <Typography variant="h2">Popular Beach Destinations</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: "24px",
          height: "fit-content",
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
              boxShadow: "0px 0px 10px #00000040",
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

export default Popular;
