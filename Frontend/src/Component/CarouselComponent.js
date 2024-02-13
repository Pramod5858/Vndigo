import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"
import "./Keep.css";

export default function CarouselComponent() {
    return (
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="./images/pizza1.jpg" className="d-block w-80" alt="notfound1" />
                </div>
                <div className="carousel-item">
                    <img src="./images/pizza3.jpeg" className="d-block w-80" alt="notfound2" />
                </div>
                <div className="carousel-item">
                    <img src="./images/pizza4.jpg" className="d-block w-80" alt="notfound3" />
                </div>
                <div className="carousel-item">
                    <img src="./images/pizza5.jpg" className="d-block w-80" alt="notfound4" />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}