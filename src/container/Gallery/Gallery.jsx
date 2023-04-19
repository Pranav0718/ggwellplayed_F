import React from "react";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Gallery.css";

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <a href="https://www.instagram.com/ggwellplayedcafe/">
          <SubHeading title="Instagram" />
        </a>
        <h1
          className="headtext__cormorant"
          style={{ color: "#ff0000", marginTop: "2rem" }}
        >
          Photo Gallery
        </h1>
        <p className="p__opensans" style={{ color: "", marginTop: "2rem" }}>
          Welcome to our gaming cafe photo gallery! Get ready to explore a world
          of immersive gaming and exciting entertainment. Our cafe features
          state-of-the-art gaming equipment, including high-performance PCs,
          consoles, and retro games. Whether you're a casual gamer or a serious
          player, we have something for everyone.
        </p>
        <a href="https://www.instagram.com/ggwellplayedcafe/">
          <button type="button" className="custom__button">
            View More
          </button>
        </a>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {[
            images.gallery01,
            images.gallery02,
            images.gallery03,
            images.gallery04,
          ].map((image, index) => (
            <div
              className="app__gallery-images_card flex__center"
              key={`gallery_image-${index + 1}`}
            >
              <img src={image} alt="gallery_image" />
              <BsInstagram className="gallery__image-icon" />
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort
            className="gallery__arrow-icon"
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className="gallery__arrow-icon"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
