import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { IMAGES } from "../assets/images";

const HeroSection = ({ home }) => {
  const carouselItem = [
    {
      title:
        "TREATY HEALTH IS THE GO-TO SYSTEM TO IMPROVE YOUR TEAMS COMMUNICATION, WHILE CONNECTING YOU WITH THE PATIENTS AND FAMILIES YOU SERVE.",
      image: IMAGES.HOSPIC_MAIN,
    },
    {
      title:
        "TREATY HEALTH ALLOWS FAMILIES TO HAVE MOBILE ACCESS TO IMPORTANT DOCUMENTS SUCH AS CONSENTS, PLAN OF CARE, ETC.",
      image: IMAGES.MAIN,
    },
    {
      title:
        " TREATY HEALTH ENHANCES THE INTERNAL COMMUNICATION OF YOUR TEAM TO ENSURE QUALITY SERVICE.",
      image: IMAGES.GROUP_CHAT,
    },
  ];
  return (
    <div ref={home} className="d-flex justify-content-center">
      <img className="carousel-bg" alt="carousel" src={IMAGES.BG} />
      <Carousel className="carousel-fg" controls={false}>
        {carouselItem.map((item) => (
          <Carousel.Item>
            <div className="v-center d-flex align-items-center justify-content-center">
              <div className="w-75">
                <h5 className="text-white text-center px-md-5 px-0 fw-medium carousel-title">
                  {item.title}
                </h5>
                <img
                  className="d-block mx-auto carousel-img"
                  src={item.image}
                  alt="carousel front"
                />
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default HeroSection;
