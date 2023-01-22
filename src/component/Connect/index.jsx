import React from "react";
import style from "./style.module.scss";

const Connect = () => {
  const items = [
    {
      img: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
      title: "India",
      travelers: "155,073 travelers",
    },
    {
      img: "https://images.unsplash.com/photo-1533414417583-f0ab99151186?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      title: "Travel Talk",
      travelers: "155,073 travelers",
    },
    {
      img: "https://images.unsplash.com/photo-1571497569639-7bd0fcd36c64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      title: "Beach",
      travelers: "155,073 travelers",
    },
    {
      img: "https://images.unsplash.com/photo-1570641963303-92ce4845ed4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      title: "Mountains",
      travelers: "155,073 travelers",
    },
    {
      img: "https://images.unsplash.com/photo-1674350369100-bc50d4da3580?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      title: "India",
      travelers: "155,073 travelers",
    },
    {
      img: "https://images.unsplash.com/photo-1674350369100-bc50d4da3580?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      title: "India",
      travelers: "155,073 travelers",
    },
  ];
  return (
    <div className={style.container}>
      <h1>Connect with other travelers in our community</h1>
      <div className={style.items}>
        {items.map((item) => (
          <div className={style.item}>
            <img src={item.img} alt="" />
            <div className={style.text}>
              <h3>{item.title}</h3>
              <p>Travel community</p>
              <p>{item.travelers}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Connect;
