import React from "react";
import { ProjectCard, NoDemoProjectCard } from "./ProjectCard";
import Weather from "../../../images/challengesLogo/Weather.png";
import Booking from "../../../images/challengesLogo/booking.jpeg";
import Tetris from "../../../images/challengesLogo/Tetris.png";
import Calculator from "../../../images/challengesLogo/Calculator.png";
import Dice from "../../../images/challengesLogo/Dice.jpg";
import More from "../../../images/challengesLogo/more.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper.scss";

SwiperCore.use([Navigation]);

export const Projects = () => (
  <div>
    <h1
      style={{
        color: "black",
        fontFamily: "lato",
        fontSize: "45px",
        fontWeight: "30",
      }}
    >
      Projects
    </h1>
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <ProjectCard
          img={Dice}
          cardTitle="Dice Game"
          cardText="First ever project built in Vanilla javascript, building a one and two player dice game."
          gitHubButtonText="https://github.com/HamadAli248/dicegame"
          liveButtonText="https://hamadali248.github.io/dicegame/"
          liveButtonDisplay="Live Demo"
        />
      </SwiperSlide>
      <SwiperSlide>
        <ProjectCard
          img={Calculator}
          cardTitle="Calculator"
          cardText="Building a Calculator using react and hosting it using GitHub pages."
          gitHubButtonText="https://github.com/HamadAli248/calculator"
          liveButtonText="https://hamadali248.github.io/calculator/"
          liveButtonDisplay="Live Demo"
        />
      </SwiperSlide>
      <SwiperSlide>
        <ProjectCard
          img={Tetris}
          cardTitle="Tetris Game"
          cardText="This project is a Tetris game using a tutorial to learn react. Only available on desktop"
          githubButtonText="https://github.com/HamadAli248/Tetris-Game"
          liveButtonText="https://hamadali248.github.io/Tetris-Game/"
          liveButtonDisplay="Live Demo"
        />
      </SwiperSlide>
      <SwiperSlide>
        <NoDemoProjectCard
          img={Booking}
          cardTitle="Room Booking System"
          cardText="Group project of building Room Booking System application with Spring Boot and PostgreSQL database"
          gitHubButtonText="https://github.com/HamadAli248/RoomBookingSystem"
        />
      </SwiperSlide>
      <SwiperSlide>
        <NoDemoProjectCard
          img={Weather}
          cardTitle="Weather App"
          cardText="Building a weather app using open weather map API"
          gitHubButtonText="https://github.com/HamadAli248/Weather-App"
        />
      </SwiperSlide>
      <SwiperSlide>
        <NoDemoProjectCard
          img={More}
          cardText="View more projects"
          gitHubButtonText="https://github.com/HamadAli248/"
        />
      </SwiperSlide>
    </Swiper>
  </div>
);
