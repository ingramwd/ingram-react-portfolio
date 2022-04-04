import React from "react";
import budgetTracker from '../assets/img/budget-tracker.jpg';
import tv4u from '../assets/img/TV4U.jpg';
import weatherDashboard from '../assets/img/weather-dashboard.jpg'
import ohSnap from '../assets/img/oh-snap.jpg'
import taskinator from '../assets/img/taskinator.jpg';
import foodFestival from '../assets/img/food-festival.jpg'

function Portfolio() {
    return (
        <div className="flex-row justify-content-center">
            <ul className="list-unstyled">
                <li>
                    <div className="flex-row justify-content-center border border-danger rounded m-5 p-5">
                        <div>
                            <h2 className="card-title">Budget Tracker</h2>
                            <img src={budgetTracker} style={{ width: "35%" }} className="card-img-top" alt="Budget Tracker" />
                            <div className="card-body">
                                <p className="card-text">Budget Tracker is an easy to use PWA, Which allows a user to track their spending along with their income. </p>
                                <a href="https://agile-journey-12189.herokuapp.com/" className="btn btn-danger ">Budget Tracker</a>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="flex-row justify-content-center border border-danger rounded m-5 p-5">
                        <div>
                            <h2 className="card-title">Weather Dashboard</h2>
                            <img src={weatherDashboard} style={{ width: "35%" }} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">This is a quick and easy to use Weather Dashboard app for a simple and easy to understand weather report.</p>
                                <a href="https://ingramwd.github.io/weather-dashboard/" className="btn btn-danger ">Weather Dashboard</a>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="flex-row justify-content-center border border-danger rounded m-5 p-5">
                        <div>
                            <h2 className="card-title">TV4U</h2>
                            <img src={tv4u} style={{ width: "35%" }} className="card-img-top" alt="TV4U" />
                            <div className="card-body">
                                <p className="card-text">TV4U is a blog website where users can go to brag or let off steam about their TVs!</p>
                                <a href="https://obscure-tv.herokuapp.com/" className="btn btn-danger ">TV4U</a>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="flex-row justify-content-center border border-danger rounded m-5 p-5">
                        <div>
                            <h2 className="card-title">Oh Snap</h2>
                            <img src={ohSnap} style={{ width: "35%" }} className="card-img-top" alt="Oh Snap" />
                            <div className="card-body">
                                <p className="card-text">Oh Snap is another React based Website, which fits multiple different pages into one single page application!</p>
                                <a href="https://ingramwd.github.io/photo-port/" className="btn btn-danger ">Oh Snap!</a>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="flex-row justify-content-center border border-danger rounded m-5 p-5">
                        <div>
                            <h2 className="card-title">Taskinator</h2>
                            <img src={taskinator} style={{ width: "35%" }} className="card-img-top" alt="TV4U" />
                            <div className="card-body">
                                <p className="card-text">Taskinator is an online planner to for a busy individual to keep track of their day to day.</p>
                                <a href="https://ingramwd.github.io/Taskinator/" className="btn btn-danger ">Taskinator</a>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="flex-row justify-content-center border border-danger rounded m-5 p-5">
                        <div>
                            <h2 className="card-title">Food Festival</h2>
                            <img src={foodFestival} style={{ width: "35%" }} className="card-img-top" alt="Food festival" />
                            <div className="card-body">
                                <p className="card-text">Food Festival is a website that foodies can use to find upcoming food events!</p>
                                <a href="https://ingramwd.github.io/food-festival-/" className="btn btn-danger ">Food Festival</a>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default Portfolio;