import React from "react";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import Search from "@mui/icons-material/Search";
import PersonOutlineOutlined from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlined from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="./img/en.png" alt="" />
            <KeyboardArrowDown />
          </div>
          <div className="item">
            <span>USD</span>
            <KeyboardArrowDown />
          </div>
          <div className="item">
            <Link className="link" to="/products/1">
              Women
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/3">
              Men
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/2">
              Children
            </Link>
          </div>
        </div>
        <div className="center">
          <Link className="link" to="/">
            ETNA
          </Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className="link" to="/">
              Homepage
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              About
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              Stores
            </Link>
          </div>
          <div className="icons">
            <Search />
            <PersonOutlineOutlined />
            <FavoriteBorderOutlined />
            <div className="cartIcon">
              <ShoppingCartOutlined />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;