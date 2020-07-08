import React from "react";
import "./Summary.scss";

const Summary = () => {
    return (
        <div
            className="summary text-left"
            style={{ backgroundColor: "#4E515A" }}
        >
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 border inner">
                        <p>About Us</p>
                        <h1>Our History</h1>
                    </div>
                    <div className="col-lg-3 border inner">
                        <p>our Products</p>
                        <h1>Tea Assortment</h1>
                    </div>
                    <div className="col-lg-3 border inner">
                        <p>Online Store</p>
                        <h1>Popular Products</h1>
                    </div>
                    <div className="col-lg-3 border inner">
                        <p>BLOGS</p>
                        <h1>Tea Recipes</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Summary;
