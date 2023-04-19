import React from "react";

import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div className="app__aboutus  flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>

        <p className="p__opensans" id="about">
          Welcome to GGWELLPLAYED, where gaming meets refreshment. We offer a
          range of games and equipment, from classic console games to Pcs. Our
          team of passionate gamers and friendly staff are always on hand to
          offer support, advice, and a friendly smile. We're proud to be a part
          of the local gaming community and strive to provide a top-notch
          experience that keeps our customers coming back for more.
        </p>
      </div>

      <div className="app__aboutus-content_history">
        <br></br>
        <h1 className="headtext__cormorant">
          <br></br>Our History
        </h1>

        <p className="p__opensans">
          GGWELLPLAYED has been a fixture in the local gaming community since
          [Year], when it was opened by Ninad Jagade a gaming enthusiasts who
          saw a need for a space where gamers could gather and play. From humble
          beginnings, the cafe has grown to become one of the most popular
          gaming destinations in the area, offering a wide range of games,
          equipment, and refreshments to satisfy every customer. Along the way,
          GGWELLPLAYED has hosted countless events, from casual game nights to
          competitive tournaments, and has built a reputation for excellence in
          gaming and hospitality.
        </p>
      </div>
    </div>
  </div>
);

export default AboutUs;
