import React from "react";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";

import "./MainHero.scss";

import bg from "../../../images/hero-bg.png";

const MainHero = () => {
    return (
        <div className="main-hero" style={{ backgroundImage: `url(${bg})` }}>
            <Header />
            <Hero />
        </div>
    );
};

export default MainHero;
