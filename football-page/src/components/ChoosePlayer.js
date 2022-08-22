import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react"
import ShowBar from "./ShowBar";

const ChoosePlayer = () =>{
    return (
        <Router>
            <div className="hero" id="home">
                <div className="hero__container">
                    <h1 className="hero__heading">Choose your <span>Player</span> </h1>
                    <p className="hero__description">Unlimited Possibilities</p>
                    <Link to="./showBar">
                        <button className="main__btn" >Explore</button>
                </Link>
                </div>
                <Routes>
                    <Route path="showBar" element={<ShowBar/>} />
                </Routes>
            </div>
        </Router>
    )
}

export default ChoosePlayer