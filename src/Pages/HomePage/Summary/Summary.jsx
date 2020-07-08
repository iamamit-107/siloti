import React from "react";
import "./Summary.scss";
import { Link } from "react-scroll";

const Summary = () => {
    return (
        <div
            className="summary text-left"
            style={{ backgroundColor: "rgb(82, 86, 94)" }}
        >
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 border inner">
                        <p>About Us</p>
                        <Link to="history" smooth={true} duration={1000}>
                            Our History
                        </Link>
                    </div>
                    <div className="col-lg-3 border inner" href="#products">
                        <p>our Products</p>
                        <Link to="products" smooth={true} duration={1000}>
                            Tea Assortment
                        </Link>
                    </div>
                    <div className="col-lg-3 border inner">
                        <p>Online Store</p>
                        <Link to="popular" smooth={true} duration={1000}>
                            Popular Products
                        </Link>
                    </div>
                    <div className="col-lg-3 border inner">
                        <p>BLOGS</p>
                        <Link to="blog" smooth={true} duration={1000}>
                            Tea Recipes
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Summary;
