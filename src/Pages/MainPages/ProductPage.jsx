import React from "react";
import ProductHero from "../ProductPage/ProductHero/ProductHero";
import CloneTea from "../ProductPage/CloneTea/CloneTea";
import BlendTeaHero from "../ProductPage/BlendTeaHero/BlendTeaHero";

import blendBg from "../../images/blendTea.png";
import boldBg from "../../images/boldTeaBg.png";

import BlendTea from "../ProductPage/BlendTeaHero/BlendTea";
import BoldTeaHero from "../ProductPage/BoldTea/BoldTeaHero";
import MainFooter from "../HomePage/Footer/MainFooter/MainFooter";
import BoldTea from "../ProductPage/BoldTea/BoldTea";

const ProductPage = () => {
    return (
        <>
            <ProductHero />
            <CloneTea />
            <div
                style={{
                    backgroundImage: `url(${blendBg})`,
                    height: "100vh",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <BlendTeaHero />
            </div>
            <BlendTea />
            <div
                style={{
                    backgroundImage: `url(${boldBg})`,
                    height: "100vh",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <BoldTeaHero />
            </div>
            <BoldTea />
            <MainFooter />
        </>
    );
};

export default ProductPage;
