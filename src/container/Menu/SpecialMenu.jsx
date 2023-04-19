import React from "react";

import { SubHeading } from "../../components";
import {} from "../../constants";
import "./SpecialMenu.css";

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="the ultimate power-up for gamers!" />
      <h1 className="headtext__cormorant">OUR SERVICES</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">Pricing</p>
        <div className="app__specialMenu_menu_items">
          <ul>60rs per hour - Regular PCs</ul>
          <ul>70rs per hour - Mid End PCs</ul>
          <ul>80rs per hour - High END PCs</ul>
          <ul>120rs per hour - PS4 Console</ul>
          <ul>180rs per hour - PS5 Console</ul>
        </div>
      </div>

      <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading">
          Vip Membership (1000rs/year)
        </p>
        <div className="app__specialMenu_menu_items">
          <ul>50rs per hour - Regular PCs</ul>
          <ul>60rs per hour - Mid End PCs</ul>
          <ul>70rs per hour - High END PCs</ul>
          <ul>100rs per hour - PS4 Console</ul>
          <ul>150rs per hour - PS5 Console</ul>
        </div>
      </div>
    </div>
  </div>
);

export default SpecialMenu;
