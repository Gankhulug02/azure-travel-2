import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { FaBeer } from "react-icons/fa";
import { grey } from "@mui/material/colors";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import RowingIcon from "@mui/icons-material/Rowing";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import ApartmentIcon from "@mui/icons-material/Apartment";

const RecentlyViewed = () => {
  const viewed = [
    {
      img: "https://images.unsplash.com/photo-1542053266393-27f4dd865ec4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2369&q=80",
      destination: "Hallstatt",
      date: "3 Days 4 Nights",
      rating: "4.9",
    },
    {
      img: "https://images.unsplash.com/photo-1565039320828-e97535b882e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2146&q=80",
      destination: "Hallstatt",
      date: "3 Days 4 Nights",
      rating: "4.9",
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
        mx: "10%",
        mt: "300px",
        display: "flex",
        flexDirection: "column",
        gap: "24px",
      }}
    >
      <Typography sx={{ color: "black" }} variant="h2">
        Recently Viewed
      </Typography>
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
        {viewed.map((i) => (
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
                    {i.destination}
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
        <Box>
          <Box sx={{ position: "relative" }}>
            <img
              src="https://images.unsplash.com/photo-1502989642968-94fbdc9eace4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJsdWUlMjBtb3VudGFpbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
              alt=""
              style={{
                boxShadow: "0px 0px 10px #dbdbdb",
                objectFit: "cover",
                width: "350px",
                height: "500px",
                borderRadius: "18px",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                top: "40px",
                left: "20px",
              }}
            >
              <Typography variant="h5">Summer Bonanza!</Typography>
              <Typography variant="p" color="white">
                Enjoy confortable transfers in shared coaches!
              </Typography>
              <Typography variant="p" color="white">
                Choose from 5 flights per week{" "}
              </Typography>
              <Typography variant="p" color="white">
                Get a free Rapid Antigen Test at selected hotels{" "}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default RecentlyViewed;
//
