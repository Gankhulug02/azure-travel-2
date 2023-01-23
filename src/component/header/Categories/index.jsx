import React from "react";
import style from "./style.module.scss";

const TopCategories = () => {
  const categories = [
    { icon: "./images/Beach.svg", title: "Beach" },
    { icon: "./images/Beach.svg", title: "Beach" },
    { icon: "./images/Beach.svg", title: "Beach" },
    { icon: "./images/Beach.svg", title: "Beach" },
    { icon: "./images/Beach.svg", title: "Beach" },
    { icon: "./images/Beach.svg", title: "Beach" },
    { icon: "./images/Beach.svg", title: "Beach" },
    { icon: "./images/Beach.svg", title: "Beach" },
    { icon: "./images/Beach.svg", title: "Beach" },
    { icon: "./images/Beach.svg", title: "Beach" },
  ];
  return (
    <div className={style.container}>
      <h1>Top categories</h1>
      <div className={style.categories}>
        {categories.map((i) => (
          <div>
            <img src={i.icon} alt="" className={style.icon} />
            <p>{i.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCategories;
