import React from "react";
import "./Products.scss";

import product1 from "../../../images/product1.png";
import product2 from "../../../images/product2.png";
import product3 from "../../../images/product3.png";

const Products = () => {
    return (
        <div className="products">
            <div className="container">
                <div className="row pb-5">
                    <div className="col-12 text-left">
                        <p className="sub-title">Our Products</p>
                        <h1 className="title">Siloti Tea Assortment</h1>
                    </div>
                </div>
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
                                <h1>Premium Quality</h1>
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
                                <h1>Special Blend</h1>
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
                                <h1>Special Bold</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;
