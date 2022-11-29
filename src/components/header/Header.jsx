import "./header.scss";
import { useState } from "react";
import Logo from "../../assets/logo.png";
import Fav from "../../assets/favorite.svg";

const Header = () => {
  const [active, setActive] = useState(false);

  return (
    <div className={`Header ${active ? "Header-Active" : ""}`}>
      <div className="Header-Container">
        <div className="Header-Logo">
          <a href="/">
            <img src={Logo} alt="" />
          </a>
        </div>
        <div className="Header-Link_wrapper">
          <div className="Header-Link">
            <a href="/">FAQ</a>
          </div>
          <div className="Header-Link">
            <a href="/">Оплата и доставка</a>
          </div>
          <div className="Header-Link">
            <a href="/">Возврат</a>
          </div>
          <div className="Header-Link">
            <a href="/">Исследования</a>
          </div>
          <div className="Header-Link">
            {" "}
            <a href="/">Личный кабинет</a>
          </div>
          <div className="Header-Link">
            <a href="tel:8 8 (800) 600-09-90">8 8 (800) 600-09-90</a>
          </div>
        </div>
        <div className="Header-Favorite">
          <a href="/">
            <img src={Fav} alt="Favorite" />
          </a>
          <div className="Header-Favorite_count">
            <span>1</span>
          </div>
        </div>
        <div className="Header-Hamburger">
          <input
            onClick={() => setActive((val) => !val)}
            class="checkbox"
            type="checkbox"
            name=""
            id=""
          />
          <span class="line line1"></span>
          <span class="line line2"></span>
          <span class="line line3"></span>
        </div>
      </div>
    </div>
  );
};

export default Header;
