import React from "react";
import style from "./style.module.scss";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <div className={style.container}>
      <div className={style.top}>
        <div className={style.item}>
          <h1>Trxvl.</h1>
        </div>
        <div className={style.item}>
          <p>Seslendirme ve Alt Jazz</p>
          <p>Media Market</p>
          <p>Gillie</p>
          <p>Size Last</p>
        </div>
        <div className={style.item}>
          <p>Self Betimes</p>
          <p>Yatırımcı İlişkileri</p>
          <p>Basal Himmler</p>
        </div>
        <div className={style.item}>
          <p>Yard Market</p>
          <p>Is İmkanları</p>
          <p>Car Tercihleri</p>
        </div>
        <div className={style.item}>
          <p>Hedge Karla</p>
          <p>Mullein Koşulları</p>
          <p>Autumnal Bulgier</p>
        </div>
      </div>
      <div className={style.bottom}>
        <div className={style.left}>
          <button>Helmet KOD</button>
          <p>© 1997-2021 Netflix, Inc. i-062d573a0ee099242</p>
        </div>
        <div className={style.right}>
          <FacebookIcon />
          <InstagramIcon />
          <GitHubIcon />
        </div>
      </div>
    </div>
  );
};

export default Footer;
