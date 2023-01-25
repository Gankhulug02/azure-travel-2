import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
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
    { icon: "AirplanemodeActiveIcon", text: "4 Flights" },
    { icon: "ApartmentIcon", text: "1 Hotel" },
    { icon: "DirectionsCarIcon", text: "2 Transfers" },
    { icon: "RowingIcon", text: "4 Activities" },
  ];

  return (
    <Box sx={{ mx: "10%" }}>
      <Typography sx={{ color: "black" }} variant="h2">
        Recently Viewed
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: "24px",
          width: "100%",
          height: "900px",
          //   backgroundColor: "black",
        }}
      >
        {viewed.map((i) => (
          <Box
            sx={{
              width: "fit-content",
              height: "550px",
              padding: "10px",
              backgroundColor: "white",
              alignItems: "center",
              borderRadius: "18px",
              boxShadow: "0px 0px 10px #dbdbdb",
            }}
          >
            <Box
            //   sx={{ width: "313px", height: "200px", backgroundColor: "white" }}
            >
              <img
                src={i.img}
                alt=""
                style={{
                  objectFit: "cover",
                  width: "313px",
                  height: "200px",
                  borderRadius: "18px",
                }}
              />
            </Box>
            <Box>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    color: "black",
                  }}
                >
                  <Typography sx={{ color: "black" }} variant="h4">
                    {i.destination}
                  </Typography>
                  <Typography sx={{ color: "black" }} variant="h5">
                    {i.rating}
                  </Typography>
                </Box>
                <Box>
                  <Typography sx={{ color: "#a1a1a1" }} variant="p">
                    {i.date}
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  //   width: "1280px",
                  //   backgroundColor: "black",
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
                    <ApartmentIcon />
                    <Typography sx={{ color: "#a1a1a1" }}>{i.text}</Typography>
                  </Box>
                ))}
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
                objectFit: "cover",
                width: "350px",
                height: "550px",
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
              <Typography variant="p">
                Enjoy confortable transfers in shared coaches!
              </Typography>
              <Typography variant="p">
                Choose from 5 flights per week{" "}
              </Typography>
              <Typography variant="p">
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
