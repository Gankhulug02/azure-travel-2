import * as React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import ClearIcon from "@mui/icons-material/Clear";
import { Typography } from "@mui/material";

export default function TemporaryDrawer() {
  const [dataChange, setDataChange] = useState([]);

  //delete wishlist start
  const deleteWish = async (e) => {
    try {
      const res = await axios.delete(`http://localhost:8000/wishlist/${e}`, {});
      getData();
      console.log("Success", res);
    } catch (err) {
      console.log("err", err);
    }
  };
  //delete wishlist end

  //wishlist data avah hesegiin ehlel
  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:8000/wishlist");
      const data = res.data.data.wishlist;
      setDataChange(data);
    } catch (error) {
      console.log(error);
    }
  };
  //wishlist data avah hesegiin tugsgul

  useEffect(() => {
    getData();
  }, []);
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        width: "400px",
        height: "calc(100vh - 60px)",
      }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      // onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "end",
          width: "100%",
          height: "50px",
        }}
      >
        <Button onClick={toggleDrawer(anchor, false)}>
          <ClearIcon />
        </Button>
      </Box>
      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ hegith: "100%", overflow: "auto" }}>
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
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            padding: "10px",
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
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>WishList</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
