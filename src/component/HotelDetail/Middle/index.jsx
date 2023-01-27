import React from "react";
import { Box } from "@mui/system";

const Middle = () => {
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
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "5px",
          widht: "100%",
          height: "400px",
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
              borderRadius: "5px",
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
    </>
  );
};

export default Middle;
