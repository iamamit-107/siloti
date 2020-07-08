import React from "react";
import MainHero from "../HomePage/MainHero/MainHero";
import Summary from "../HomePage/Summary/Summary";
import History from "../HomePage/History/History";
import Products from "../HomePage/Products/Products";
import Popular from "../HomePage/Popular/Popular";
import Blog from "../HomePage/Blogs/Blog";
import MainFooter from "../HomePage/Footer/MainFooter/MainFooter";

const HomePage = () => {
    return (
        <>
            <MainHero />
            <Summary />
            <History />
            <Products />
            <Popular />
            <Blog />
            <MainFooter />
        </>
    );
};

export default HomePage;
