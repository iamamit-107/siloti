import React from "react";

const IconHeading = ({ subtitle, title, element1, element2 }) => {
    return (
        <>
            <div className="row pb-5">
                <div className="col-12">
                    <p className="sub-title"> {subtitle} </p>
                    <h1 className="title">
                        <span>
                            <img
                                src={element1}
                                alt=""
                                className="img-fluid img1"
                            />
                        </span>
                        {title}
                        <span>
                            <img
                                src={element2}
                                alt=""
                                className="img-fluid img2"
                            />
                        </span>
                    </h1>
                </div>
            </div>
        </>
    );
};

export default IconHeading;
