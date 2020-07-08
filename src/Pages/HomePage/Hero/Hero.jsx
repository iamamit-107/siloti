import React from "react";
import "./Hero.scss";

const Hero = () => {
    return (
        <div className="hero-home text-left" style={{ height: "80%" }}>
            <div className="container d-flex" style={{ height: "100%" }}>
                <div className="row align-items-center">
                    <div className="col-xl-4 col-md-12">
                        <div className="hero-text">
                            <h1>
                                From The Home Of Tea Comes A Tea For Your Home
                            </h1>
                            <p>
                                Grown and made with love at our own estate,
                                every leaf of our tea is flavor rich and of
                                premium quality!
                            </p>
                            <button className="btn btn-common rounded-pill">
                                Learn More
                                <i
                                    className="fa fa-arrow-right"
                                    aria-hidden="true"
                                ></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
