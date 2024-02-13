import React from "react";

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-success">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/yndigo">Yndigo</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-end"> */}
                        <ul className="navbar-nav justify-content-end">

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/book" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Book
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/flights">Flights</a></li>
                                    <li><a className="dropdown-item" href="/6ehighlights">6E Highlights</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="/somethingelse">Something else here</a></li>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/Checkin">Check-in</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/manage" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Manage
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/editbooking">Edit Booking</a></li>
                                    <li><a className="dropdown-item" href="/flightchange">Flight Change</a></li>
                                    <li><a className="dropdown-item" href="/baggagetag">Baggage Tag</a></li>
                                    <li><a className="dropdown-item" href="/planb">Plan B</a></li>

                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="/somethingelse">Something else here</a></li>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/6erewards">6E Rewards</a>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/manage" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Info
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/flightstatus">Flight Status</a></li>
                                    <li><a className="dropdown-item" href="/cargoservices">Cargo Services</a></li>
                                    <li><a className="dropdown-item" href="/conditionsofcarriage">Conditions of Carriage</a></li>
                                    <li><a className="dropdown-item" href="/fees&charges">Fees & Charges</a></li>
                                    <li><a className="dropdown-item" href="/addons&services">Addons & services</a></li>
                                    <li><a className="dropdown-item" href="/baggage">Baggage</a></li>
                                    <li><a className="dropdown-item" href="/covid-19queries">Covid-19 Queries</a></li>
                                    <li><a className="dropdown-item" href="/faqs">FAQs</a></li>
                                    <li><a className="dropdown-item" href="/additionalinfo">Additional info</a></li>
                                    <li><a className="dropdown-item" href="/contactus">Contact Us</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="/somethingelse1">Something else here1</a></li>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/login">Login</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar