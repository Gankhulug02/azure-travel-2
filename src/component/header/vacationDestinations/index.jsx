import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import style from "./style.module.scss";

const VacationDestinations = () => {
  const [dataChange, setDataChange] = useState([]);

  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:8000/travels");
      const data = res.data.data;
      setDataChange(data);
    } catch (err) {
      console.log("err", err);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const Destinations = [
    {
      title: "Bali, Indonesia",
      img: "https://images.unsplash.com/photo-1604999333679-b86d54738315?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2050&q=80",
    },
    {
      title: "Bali, Indonesia",
      img: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    },
    {
      title: "Australia, Sydney",
      img: "https://images.unsplash.com/photo-1528072164453-f4e8ef0d475a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
    },
    {
      title: "Paris, France",
      img: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
    },
    {
      title: "Bali, Indonesia",
      img: "https://images.unsplash.com/photo-1604999333679-b86d54738315?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2050&q=80",
    },
    {
      title: "Bali, Indonesia",
      img: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    },
    {
      title: "Bali, Indonesia",
      img: "https://images.unsplash.com/photo-1604999333679-b86d54738315?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2050&q=80",
    },
    {
      title: "Bali, Indonesia",
      img: "https://images.unsplash.com/photo-1604999333679-b86d54738315?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2050&q=80",
    },
  ];

  return (
    <div className={style.container}>
      <h1>Top Vacation Destination</h1>
      <div className={style.destinations}>
        {dataChange.map((i) => (
          <div key={i.id} className={style.destination}>
            <img src={i.images} alt="" />
            <p>
              <b>{i.title}</b>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VacationDestinations;
