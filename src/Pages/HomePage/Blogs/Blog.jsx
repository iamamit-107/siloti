import React from "react";
import "./Blog.scss";

import blog from "../../../images/blog.png";
import leaf from "../../../images/leaf.png";

const Blog = () => {
    return (
        <div className="blog" style={{ backgroundColor: "#292D46" }}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-4">
                        <img src={leaf} className="img-fluid" alt="" />
                    </div>
                </div>
            </div>
            <div className="container">
                <div
                    className="row px-4"
                    style={{ backgroundColor: "#303451" }}
                >
                    <div className="col-md-12">
                        <div
                            id="carouselExampleCaptions"
                            className="carousel slide"
                            data-ride="carousel"
                        >
                            <ol className="carousel-indicators">
                                <li
                                    data-target="#carouselExampleCaptions"
                                    data-slide-to="0"
                                    className="active"
                                ></li>
                                <li
                                    data-target="#carouselExampleCaptions"
                                    data-slide-to="1"
                                ></li>
                                <li
                                    data-target="#carouselExampleCaptions"
                                    data-slide-to="2"
                                ></li>
                                <li
                                    data-target="#carouselExampleCaptions"
                                    data-slide-to="3"
                                ></li>
                            </ol>

                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="row d-flex align-items-center">
                                        <div className="col-lg-6 text-left">
                                            <p className="sub-title">Blogs</p>
                                            <h1 className="title">
                                                Benefits of Lemon <br /> Tea
                                                with Honey
                                            </h1>
                                            <p>
                                                The cleansing and healthy
                                                properties present in lemon have
                                                long been known to contain a
                                                good dose of vitamin C and is a
                                                natural diuretic. Hot water with
                                                lemon will aid in digestion,
                                                cleanse the liver and flush out
                                                toxins and impurities from your
                                                body.
                                            </p>
                                            <button
                                                className="btn btn-common rounded-pill"
                                                style={{ padding: "8px 25px" }}
                                            >
                                                Read More
                                                <i
                                                    className="fa fa-arrow-right"
                                                    aria-hidden="true"
                                                ></i>
                                            </button>
                                        </div>
                                        <div className="col-lg-6">
                                            <img
                                                src={blog}
                                                alt=""
                                                className="img-fluid"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item ">
                                    <div className="row d-flex align-items-center">
                                        <div className="col-lg-6 text-left">
                                            <p className="sub-title">Blogs</p>
                                            <h1 className="title">
                                                Benefits of Lemon <br /> Tea
                                                with Honey
                                            </h1>
                                            <p>
                                                The cleansing and healthy
                                                properties present in lemon have
                                                long been known to contain a
                                                good dose of vitamin C and is a
                                                natural diuretic. Hot water with
                                                lemon will aid in digestion,
                                                cleanse the liver and flush out
                                                toxins and impurities from your
                                                body.
                                            </p>
                                            <button
                                                className="btn btn-common rounded-pill"
                                                style={{ padding: "8px 25px" }}
                                            >
                                                Read More
                                                <i
                                                    className="fa fa-arrow-right"
                                                    aria-hidden="true"
                                                ></i>
                                            </button>
                                        </div>
                                        <div className="col-lg-6">
                                            <img
                                                src={blog}
                                                alt=""
                                                className="img-fluid"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="row d-flex align-items-center">
                                        <div className="col-lg-6 text-left">
                                            <p className="sub-title">Blogs</p>
                                            <h1 className="title">
                                                Benefits of Lemon <br /> Tea
                                                with Honey
                                            </h1>
                                            <p>
                                                The cleansing and healthy
                                                properties present in lemon have
                                                long been known to contain a
                                                good dose of vitamin C and is a
                                                natural diuretic. Hot water with
                                                lemon will aid in digestion,
                                                cleanse the liver and flush out
                                                toxins and impurities from your
                                                body.
                                            </p>
                                            <button
                                                className="btn btn-common rounded-pill"
                                                style={{ padding: "8px 25px" }}
                                            >
                                                Read More
                                                <i
                                                    className="fa fa-arrow-right"
                                                    aria-hidden="true"
                                                ></i>
                                            </button>
                                        </div>
                                        <div className="col-lg-6">
                                            <img
                                                src={blog}
                                                alt=""
                                                className="img-fluid"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="row d-flex align-items-center">
                                        <div className="col-lg-6 text-left">
                                            <p className="sub-title">Blogs</p>
                                            <h1 className="title">
                                                Benefits of Lemon <br /> Tea
                                                with Honey
                                            </h1>
                                            <p>
                                                The cleansing and healthy
                                                properties present in lemon have
                                                long been known to contain a
                                                good dose of vitamin C and is a
                                                natural diuretic. Hot water with
                                                lemon will aid in digestion,
                                                cleanse the liver and flush out
                                                toxins and impurities from your
                                                body.
                                            </p>
                                            <button
                                                className="btn btn-common rounded-pill"
                                                style={{ padding: "8px 25px" }}
                                            >
                                                Read More
                                                <i
                                                    className="fa fa-arrow-right"
                                                    aria-hidden="true"
                                                ></i>
                                            </button>
                                        </div>
                                        <div className="col-lg-6">
                                            <img
                                                src={blog}
                                                alt=""
                                                className="img-fluid"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a
                                className="carousel-control-prev"
                                href="#carouselExampleCaptions"
                                role="button"
                                data-slide="prev"
                            >
                                <span
                                    className="carousel-control-prev-icon"
                                    aria-hidden="true"
                                ></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a
                                className="carousel-control-next"
                                href="#carouselExampleCaptions"
                                role="button"
                                data-slide="next"
                            >
                                <span
                                    className="carousel-control-next-icon"
                                    aria-hidden="true"
                                ></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
