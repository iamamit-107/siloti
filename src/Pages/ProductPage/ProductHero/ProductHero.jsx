import React from "react";
import Header from "../../HomePage/Header/Header";
import Hero from "../../CommonComponent/Hero/Hero";

import bg from "../../../images/product-bg.png";

const ProductHero = () => {
    const title = "Premium Clone Tea 100% Natural & Pure";
    const subTitle =
        "Grown and made with love at our own estate, every leaf of our tea is flavor rich and of premium quality!";
    const btnTitle = "Buy Now";
    return (
        <div className="main-hero" style={{ backgroundImage: `url(${bg})` }}>
            <Header />
            <Hero title={title} subTitle={subTitle} btnTitle={btnTitle} />
        </div>
    );
};

export default ProductHero;
