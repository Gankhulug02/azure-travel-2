import React from "react";
import { Box } from "@mui/system";
import { Button, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ApartmentIcon from "@mui/icons-material/Apartment";
const Top = () => {
  return (
    <div>
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
    </div>
  );
};

export default Top;
