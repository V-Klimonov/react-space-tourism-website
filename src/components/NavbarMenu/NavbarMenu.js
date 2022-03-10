import React from "react";
import { Link } from "react-router-dom";
import "./NavBarMenu.css";
import { useState, useEffect } from "react";

const NavBarMenu = () => {
  const [navBurgerOpen, setnavBurgerOpen] = useState(false);
  const [burgerIcon, setBurgerIcon] = useState(
    "/assets/shared/icon-hamburger.svg"
  );
  const toggleBurger = () => {
    setnavBurgerOpen(!navBurgerOpen);
  };
  useEffect(() => {
    setBurgerIcon(
      navBurgerOpen
        ? "/assets/shared/icon-close.svg"
        : "/assets/shared/icon-hamburger.svg"
    );
  }, [navBurgerOpen]);
  return (
    <div className="navbarWrapper">
      <Link to="/">
        <img
          className="logo"
          src={process.env.PUBLIC_URL + "/assets/shared/logo.svg"}
          alt="Logo star"
        />
      </Link>
      <div className={navBurgerOpen ? "burger-menu" : "linkBox"}>
        <Link className="link" to="/">
          <b>00</b> Home
        </Link>
        <Link className="link" to="destination">
          <b>01</b> Destination
        </Link>
        <Link className="link" to="crew">
          <b>02</b> Crew
        </Link>
        <Link className="link" to="technology">
          <b>03</b> Technology
        </Link>
        <span className="line"></span>
      </div>
      <div className="burger" onClick={toggleBurger}>
        <img src={process.env.PUBLIC_URL + burgerIcon} alt="Burger icon" />
      </div>
    </div>
  );
};

export default NavBarMenu;
