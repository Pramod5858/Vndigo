import React from "react";
import './Keep.css';
import Navbar from "./Navbar";
import CarouselComponent from "./CarouselComponent";
import Footer from "./Footer";
import CorouselCard from "./CorouselCard";
import AllDetails from "./AllDetails";

function Home() {
    return (
        <div className="container-fluid">
            <Navbar />
            <h1>WelCome To Yndigo Project</h1>
            <CarouselComponent />
            <CorouselCard />
            <AllDetails />
            <Footer />
        </div>
    )
}

export default Home