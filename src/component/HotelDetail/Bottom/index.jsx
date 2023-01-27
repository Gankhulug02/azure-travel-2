import React from "react";
import { Box } from "@mui/system";
import { Button, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FlightIcon from "@mui/icons-material/Flight";
import TrainIcon from "@mui/icons-material/Train";
import ProgressBar from "../ProgressBar";

const Bottom = () => {
  const progress = [
    { title: "Qiute Clean", rating: "4.5" },
    { title: "Good Amenities", rating: "4.2" },
    { title: " Great Location", rating: "4.3" },
    { title: "Great Service", rating: "4" },
  ];
  return (
    <>
      <Box
        sx={{
          display: "flex",
          gap: "5px",
          width: "100%",
          height: "100px",
          //   backgroundColor: "black",
          Button: {
            backgroundColor: "#ebeeff",
            textTransform: "capitalize",
            fontSize: "12px",
            padding: "10px",
          },
        }}
      >
        <Button
          sx={{
            display: "flex",
            gap: "5px",
            width: "50%",
            height: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: "5px",
              flexDirection: "column",
              width: "30%",
              height: "100%",
              padding: "10px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "40%",
                height: "40%",
                backgroundColor: "blue",
                borderRadius: "40px",
                borderTopRightRadius: "0px",
              }}
            >
              <Typography variant="h6"> 4.3</Typography>
              <Typography variant="p">/5</Typography>
            </Box>
            <Box sx={{ width: "100%" }}>
              <Typography variant="p">" Great Service "</Typography>
              <Typography variant="p"> 95% Recommended</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              width: "70%",
              height: "100%",
              backgroundColor: "",
            }}
          >
            {progress.map((i) => (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  width: "50%",
                  height: "50%",
                  padding: "5px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <Typography variant="p">{i.title}</Typography>
                  <Typography variant="p">{i.rating}</Typography>
                </Box>
                <ProgressBar progress={i.rating} />
              </Box>
            ))}
          </Box>
        </Button>
        <Box
          sx={{
            display: "flex",
            gap: "5px",
            width: "50%",
            height: "100%",
          }}
        >
          <Button
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              width: "50%",
              height: "100%",
              padding: "10px",
            }}
          >
            <a
              href="https://www.google.com/maps/place/Hotel+Paradise+Busan/@35.1601381,129.1602028,967m/data=!3m1!1e3!4m9!3m8!1s0x35688d42b126ec71:0x8fae28bce37ad7bd!5m2!4m1!1i2!8m2!3d35.1601338!4d129.1646875!16s%2Fg%2F1tdf8_05"
              target="_blank"
              style={{
                width: "100%",
                height: "100%",
              }}
            >
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "5px" }}
              >
                <Box sx={{ display: "flex" }}>
                  <LocationOnIcon />
                  <Typography
                    variant="p"
                    sx={{
                      borderBottom: "1px dotted grey",
                    }}
                  >
                    10 places of interest within 10
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Box>
                    <FlightIcon />
                    <Typography
                      variant="p"
                      sx={{ borderBottom: "1px dotted grey" }}
                    >
                      26.6km
                    </Typography>
                  </Box>
                  <Box>
                    <TrainIcon />
                    <Typography
                      variant="p"
                      sx={{ borderBottom: "1px dotted grey" }}
                    >
                      1.4km
                    </Typography>
                  </Box>
                  <Box>
                    <TrainIcon />
                    <Typography
                      variant="p"
                      sx={{ borderBottom: "1px dotted grey" }}
                    >
                      400m
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </a>
          </Button>
          <Button sx={{ display: "flex", width: "50%", height: "100%" }}>
            <Box
              sx={{ display: "flex", flexDirection: "column", width: "100%" }}
            >
              <Box sx={{ display: "flex", width: "100%" }}>
                <Typography variant="p">Air port Pick Up Service</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  //   justifyContent: "space-between",
                  gap: "20px",
                  width: "100%",
                }}
              >
                <Typography variant="p">Restaurant</Typography>
                <Typography variant="p">Cafe</Typography>
                <Typography variant="p">Bar</Typography>
              </Box>
            </Box>
            <Box></Box>
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Bottom;
