import React from "react";
import Header from "../Header/Header";

import "./MainHero.scss";

import bg from "../../../images/hero-bg.png";
import Hero from "../../CommonComponent/Hero/Hero";

const MainHero = () => {
    const title = "From The Home Of Tea Comes A Tea For Your Home";
    const subTitle =
        "Grown and made with love at our own estate, every leaf of our tea is flavor rich and of premium quality!";
    const btnTitle = "Learn More";
    return (
        <div className="main-hero" style={{ backgroundImage: `url(${bg})` }}>
            <Header />
            <Hero title={title} subTitle={subTitle} btnTitle={btnTitle} />
        </div>
    );
};

export default MainHero;
