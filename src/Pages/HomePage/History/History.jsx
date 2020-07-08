import React from "react";
import "./History.scss";

import bg from "../../../images/history-bg.png";

const History = () => {
    return (
        <div id="history">
            <div className="container">
                <div className="row" style={{ backgroundImage: `url(${bg})` }}>
                    <div className="offset-lg-7 col-lg-4">
                        <div className="text-box text-left pl-5">
                            <p className="sub-title">About Us</p>
                            <h1 className="title">Our History</h1>
                            <p className="description">
                                Bangladesh is the 10th largest tea producer in
                                the world, a large percentage of which comes
                                from Sylhet. Steeped in history and tea lore,
                                Sreemongol in Sylhet, is the heart of
                                Bangladesh’s tea industry and accounts for 163
                                estates. ‘Siloti’ meaning Sylhet’s tea comes
                                from one of those tea estates.{" "}
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

export default History;
