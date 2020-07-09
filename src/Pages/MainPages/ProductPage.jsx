import React from "react";
import ProductHero from "../ProductPage/ProductHero/ProductHero";
import CloneTea from "../ProductPage/CloneTea/CloneTea";
import BlendTeaHero from "../ProductPage/BlendTeaHero/BlendTeaHero";

import blendBg from "../../images/blendTea.png";

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
        </>
    );
};

export default ProductPage;
