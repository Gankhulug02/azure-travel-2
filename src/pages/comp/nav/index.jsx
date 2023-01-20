import React from "react";
import style from "./style.module.scss";
import BasicModal from "../../home/Modal";
import { NavLink } from "react-router-dom";
export default function Nav() {
  return (
    <div className={style.container}>
      <div className={style.left}>
        <h1>Trxvl.</h1>
      </div>
      <div className={style.right}>
        <NavLink>Home</NavLink>
        <NavLink>Stays</NavLink>
        <NavLink>Flights</NavLink>
        <NavLink>Packages</NavLink>
        <b>
          <BasicModal />
        </b>
      </div>
    </div>
  );
}
