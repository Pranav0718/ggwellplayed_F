import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Where every gamer feels at home!"></SubHeading>
      <h1 className="app__header-h1">The Key To Premium Gaming Experience</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        Gaming Cafe where gamers can gather, socialize, and play together
        comfortably, regardless of their skill level or experience.{" "}
      </p>
      <button type="button" className="custom__button">
        Explore Services
      </button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" id="head" />
    </div>
  </div>
);

export default Header;
