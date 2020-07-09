import React from "react";
import "./HeroWithoutHead.scss";

const HeroWithoutHead = ({ title, subTitle, btnTitle }) => {
    return (
        <div className="hero-without-home text-left">
            <div className="container d-flex" style={{ height: "100%" }}>
                <div className="row align-items-center">
                    <div className="col-xl-4 col-md-12">
                        <div className="hero-text">
                            <h1>{title}</h1>
                            <p>{subTitle}</p>
                            <button className="btn btn-common rounded-pill">
                                {btnTitle}
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

export default HeroWithoutHead;
