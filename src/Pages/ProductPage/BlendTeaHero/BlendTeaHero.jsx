import React from "react";
import HeroWithoutHead from "../../CommonComponent/HeroWithoutHead/HerWithoutHead";

const BlendTeaHero = () => {
    const title = "Special Blend Tea 100% Natural & Pure";
    const subTitle =
        "Grown and made with love at our own estate, every leaf of our tea is flavor rich and of premium quality!";
    const btnTitle = "Buy Now";
    return (
        <>
            <HeroWithoutHead
                title={title}
                subTitle={subTitle}
                btnTitle={btnTitle}
            />
        </>
    );
};

export default BlendTeaHero;
