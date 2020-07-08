import React from "react";
import Footer1 from "../Footer1/Footer1";
import Footer2 from "../Footer2/Footer2";

import "./MainFooter.scss";

import cup from "../../../../images/teaCup.png";
const MainFooter = () => {
    return (
        <div className="main-footer">
            <div className="m-footer1">
                <Footer1 />
            </div>
            <div className="container">
                <div className="row cup-image">
                    <div className="col-lg-5 offset-lg-3 img-col">
                        <img src={cup} alt="" className="img-fluid" />
                    </div>
                </div>
            </div>
            <div className="m-footer2">
                <Footer2 />
            </div>
        </div>
    );
};

export default MainFooter;
