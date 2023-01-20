import React from "react";
import style from "./style.module.scss";
import BasicModal from "../Modal";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
export default function Nav() {
  const menu = [
    { name: "Home" },
    { name: "Stays" },
    { name: "Flights" },
    { name: "Packages" },
  ];
  return (
    <div className={style.container}>
      <div className={style.left}>
        <h1>Trxvl.</h1>
      </div>
      <div className={style.right}>
        {menu.map((i) => (
          <NavLink to={"/" + i.name}>
            <Button
              sx={{
                color: "white",
                opacity: "90%",
                textTransform: "capitalize",
              }}
            >
              {i.name}
            </Button>
          </NavLink>
        ))}
        {/* <NavLink>Stays</NavLink>
        <NavLink>Flights</NavLink>
        <NavLink>Packages</NavLink> */}
        <b>
          <BasicModal />
        </b>
      </div>
    </div>
  );
}
