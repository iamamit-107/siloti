import React from "react";
import "./CloneTea.scss";

import IconHeading from "../../CommonComponent/IconHeading/IconHeading";

import element1 from "../../../images/element1.png";
import element2 from "../../../images/element2.png";
import cloneTea from "../../../images/cloneTea.png";

const CloneTea = () => {
    return (
        <div className="clone-tea">
            <div className="container clone-tea-background">
                <IconHeading
                    title="Premium Clone Tea"
                    subtitle="Our Products"
                    element1={element1}
                    element2={element2}
                />

                <div
                    className="row"
                    style={{ backgroundColor: "#503F45", padding: "65px 0" }}
                >
                    <div className="col-lg-6" style={{ padding: "10px 30px" }}>
                        <div className="row d-flex align-items-center">
                            <div className="col-md-7 text-left">
                                <p className="p-subtitle">Finest Tea</p>
                                <h1 className="p-title">Premium Clone Tea</h1>
                                <li className="p-list">-100% Natural & Pure</li>
                                <li className="p-list">-Black Tea</li>
                                <h5 className="p-gram">
                                    500gm <span className="p-price">250Tk</span>
                                </h5>
                                <button className="btn btn-common rounded-pill p-button">
                                    Add To Cart
                                    <svg
                                        width="1em"
                                        height="1em"
                                        viewBox="0 0 16 16"
                                        class="bi bi-cart4"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <div className="col-md-5">
                                <img
                                    src={cloneTea}
                                    alt=""
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                    </div>

                    <div
                        className="col-lg-6 border-rights"
                        style={{ padding: "10px 30px" }}
                    >
                        <div className="row d-flex align-items-center">
                            <div className="col-md-7 text-left">
                                <p className="p-subtitle">Finest Tea</p>
                                <h1 className="p-title">Premium Clone Tea</h1>
                                <li className="p-list">-100% Natural & Pure</li>
                                <li className="p-list">-Black Tea</li>
                                <h5 className="p-gram">
                                    250gm <span className="p-price">120Tk</span>
                                </h5>
                                <button className="btn btn-common rounded-pill p-button">
                                    Add To Cart
                                    <svg
                                        width="1em"
                                        height="1em"
                                        viewBox="0 0 16 16"
                                        class="bi bi-cart4"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <div className="col-md-5">
                                <img
                                    src={cloneTea}
                                    alt=""
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CloneTea;
