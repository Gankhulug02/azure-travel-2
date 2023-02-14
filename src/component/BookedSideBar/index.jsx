import React from "react";
import { useState } from "react";
import { Box } from "@mui/system";
import { Button, Typography, Link } from "@mui/material";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import ClearIcon from "@mui/icons-material/Clear";
import axios from "axios";
import { ConstructionOutlined } from "@mui/icons-material";
const BookedSideBar = () => {
  // const data = [
  //   {
  //     img: "https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2321&q=80",
  //     name: "Swissotel Bangkok Ratchada (SHA Extra Plus)",
  //     price: "222",
  //   },
  //   {
  //     img: "https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2321&q=80",
  //     name: "Bangkok Marriott Marquis Queen’s Park (SHA Plus+)",
  //     price: "222",
  //   },
  //   {
  //     img: "https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2321&q=80",
  //     name: "The Grand Palace",
  //     price: "222",
  //   },
  // ];

  const [dataChange, setDataChange] = useState(null);

  //delete wishlist start
  const deleteWish = async (e) => {
    console.log(e);
    try {
      const res = await axios.delete(`http://localhost:8000/wishlist/${e}`, {});
      console.log("Success", res);
    } catch (err) {
      console.log("err", err);
    }
  };
  //delete wishlist end

  //wishlist data avah hesegiin start
  axios
    .get("http://localhost:8000/wishlist")
    .then(function (response) {
      const data = response.data.data.wishlist;
      setDataChange(data);
    })
    .catch(function (error) {
      console.log("err", error);
    });
  //wishlist data avah hesegiin end

  const [sideBar, setSideBar] = useState(true);
  const handleCLose = () => setSideBar(true);
  // const handleOpen = () => setSideBar(false);
  let [teenCount, setTeenCount] = useState(0);
  const teenInc = () => setTeenCount((teenCount += 1));
  const teenDec = () => {
    if (teenCount > 0) {
      setTeenCount((teenCount -= 1));
    }
  };
  let [adultCount, setAdultCount] = useState(0);
  const adultInc = () => setAdultCount((adultCount += 1));
  const adultDec = () => {
    if (adultCount > 0) {
      setAdultCount((adultCount -= 1));
    }
  };
  return (
    <>
      <Button
        onClick={() => setSideBar(!sideBar)}
        sx={{
          width: "fit-content",
          height: "fit-content",
          backgroundColor: "blue",
        }}
      >
        <ShoppingBasketIcon sx={{ color: "white" }} />
      </Button>

      {sideBar ? (
        <Box sx={{ display: "none" }}></Box>
      ) : (
        <Box
          sx={{
            position: "absolute",
            zIndex: "2",
            width: "450px",
            height: "100vh",
            right: "0",
            top: "0",
            backgroundColor: "white",
            boxShadow: "0px 0px 20px black",
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: "100%",
              height: "5%",
              alignItems: "center",
            }}
          >
            <Button onClick={handleCLose}>
              <ClearIcon />
            </Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "95%",
            }}
          >
            {/* sagsalsan buteegdhuun ehlel */}
            <Box>
              {dataChange.map((data) => (
                <Box
                  key={data.id}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "20px 10px",
                    alignItems: "center",
                    width: "100%",
                    height: "150px",
                    // backgroundColor: "#e6e6e6",
                    borderBottom: "1px solid grey",
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      width: "40%",
                      height: "100%",
                    }}
                  >
                    <Button
                      onClick={() => deleteWish(data.id)}
                      sx={{
                        position: "absolute",
                        left: "-10px",
                        top: "-10px",
                        minWidth: "0px",
                        width: "20px",
                        height: "20px",
                        borderRadius: "200px",
                        backgroundColor: "grey",
                        color: "white",
                        fontSize: "5px",
                      }}
                    >
                      <ClearIcon sx={{ fontSize: "10px" }} />
                    </Button>
                    <img
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      src={data.img}
                      alt=""
                    />
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      width: "55%",
                      height: "100%",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        maxWidth: "100%",
                        // height: "50px",
                        // backgroundColor: "grey",
                      }}
                    >
                      <Typography
                        noWrap={true}
                        variant="h5"
                        sx={{
                          width: "100%",
                          color: "black",
                        }}
                      >
                        {data.name}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        // backgroundColor: "black",
                      }}
                    >
                      <Box>
                        <Typography variant="h5" sx={{ color: "black" }}>
                          {data.price}$
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              ))}
            </Box>
            {/* sagsalsan buteegdhuun tugsgul */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                height: "80px",
              }}
            >
              <Button
                href="/checkout"
                target="blank"
                sx={{
                  width: "50%",
                  height: "50px",
                  backgroundColor: "blue",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "blue",
                  },
                }}
              >
                Checkout
              </Button>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default BookedSideBar;

// <Box
// sx={{
//   display: "flex",
//   justifyContent: "space-between",
//   gap: "10px",
//   width: "120px",
// }}
// >
// <Typography variant="p" sx={{ color: "black" }}>
//   Adult
// </Typography>
// <Box
//   sx={{
//     display: "flex",
//     gap: "5px",
//     alignItems: "center",
//   }}
// >
//   <Button
//     onClick={adultDec}
//     sx={{
//       minWidth: "0px",
//       minHeight: "0px",
//       width: "20px",
//       height: "20px",
//       border: "1px solid grey",
//     }}
//   >
//     -
//   </Button>
//   <Typography variant="p">{adultCount}</Typography>
//   <Button
//     onClick={adultInc}
//     sx={{
//       minWidth: "0px",
//       minHeight: "0px",
//       width: "20px",
//       height: "20px",
//       border: "1px solid grey",
//     }}
//   >
//     +
//   </Button>
// </Box>
// </Box>
// <Box
// sx={{
//   display: "flex",
//   justifyContent: "space-between",
//   gap: "10px",
//   width: "120px",
// }}
// >
// <Typography variant="p" sx={{ color: "black" }}>
//   Teen
// </Typography>
// <Box
//   sx={{
//     display: "flex",
//     gap: "5px",
//     alignItems: "center",
//   }}
// >
//   <Button
//     onClick={teenDec}
//     sx={{
//       minWidth: "0px",
//       minHeight: "0px",
//       width: "20px",
//       height: "20px",
//       border: "1px solid grey",
//     }}
//   >
//     -
//   </Button>
//   <Typography variant="p">{teenCount}</Typography>
//   <Button
//     onClick={teenInc}
//     sx={{
//       minWidth: "0px",
//       minHeight: "0px",
//       width: "20px",
//       height: "20px",
//       border: "1px solid grey",
//     }}
//   >
//     +
//   </Button>
// </Box>
// </Box>
