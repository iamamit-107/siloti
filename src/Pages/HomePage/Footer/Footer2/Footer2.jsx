import React from "react";
import "./Footer2.scss";

import cup from "../../../../images/teaCup.png";

const Footer2 = () => {
    return (
        <div className="footer2" style={{ backgroundColor: "#292D46" }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 text-left">
                        <p className="pb-4">
                            Copyright © Amtali Plantation Ltd.
                        </p>
                        <div className="pb-4">
                            <button className="btn btn-social rounded-pill">
                                <a href="/">
                                    <i
                                        className="fa fa-facebook"
                                        aria-hidden="true"
                                    ></i>
                                    Facebook
                                </a>
                            </button>
                            <button className="btn social border-rounded">
                                <a href="/">
                                    <i
                                        className="fa fa-youtube-play"
                                        aria-hidden="true"
                                    ></i>
                                </a>
                            </button>
                            <button className="btn social border-rounded">
                                <a href="/">
                                    <i
                                        className="fa fa-instagram"
                                        aria-hidden="true"
                                    ></i>
                                </a>
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-5 offset-lg-4 text-left">
                        <h3 className="pb-4">Got any Query</h3>
                        <form>
                            <input
                                className=" rounded-pill"
                                type="search"
                                placeholder="Write Your Query"
                                aria-label="Search"
                            />
                            <button className="btn send-btn  rounded-pill">
                                Send Us
                                <i
                                    className="fa fa-arrow-right"
                                    aria-hidden="true"
                                ></i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer2;
