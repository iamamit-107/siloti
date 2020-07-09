import React from "react";
import "./Popular.scss";

import element1 from "../../../images/element1.png";
import element2 from "../../../images/element2.png";

import product1 from "../../../images/popular1.png";
import product2 from "../../../images/popular2.png";
import product3 from "../../../images/popular3.png";
import IconHeading from "../../CommonComponent/IconHeading/IconHeading";

const Popular = () => {
    return (
        <div id="popular" style={{ backgroundColor: "#1F2235" }}>
            <div className="container">
                <IconHeading
                    title="Popular Products"
                    subtitle="Online Store"
                    element1={element1}
                    element2={element2}
                />

                <div className="row">
                    <div className="col-lg-4 mb-5">
                        <div className="card card1">
                            <img
                                src={product1}
                                className="card-img-top"
                                alt=""
                            />
                            <div className="card-body text-left">
                                <p className="sub-title">Finest Tea</p>
                                <h1>Premium Clone Tea</h1>
                                <button
                                    className="btn btn-common rounded-pill"
                                    style={{ padding: "8px 25px" }}
                                >
                                    Buy Now
                                    <i
                                        className="fa fa-arrow-right"
                                        aria-hidden="true"
                                    ></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 mb-5">
                        <div className="card card2">
                            <img
                                src={product2}
                                className="card-img-top"
                                alt=""
                            />
                            <div className="card-body text-left">
                                <p className="sub-title">Flavor & Aroma</p>
                                <h1>Special Blend Tea</h1>
                                <button
                                    className="btn btn-common rounded-pill"
                                    style={{ padding: "8px 25px" }}
                                >
                                    Buy Now
                                    <i
                                        className="fa fa-arrow-right"
                                        aria-hidden="true"
                                    ></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 mb-5">
                        <div className="card card3">
                            <img
                                src={product3}
                                className="card-img-top"
                                alt=""
                            />
                            <div className="card-body text-left">
                                <p className="sub-title">Strong Liquor</p>
                                <h1>Special Bold Tea</h1>
                                <button
                                    className="btn btn-common rounded-pill"
                                    style={{ padding: "8px 25px" }}
                                >
                                    Buy Now
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
        </div>
    );
};

export default Popular;
