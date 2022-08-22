import { useState, useEffect } from "react"
import Static from './data/Static'
import ShowBar from './ShowBar';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const SearchBar = () =>{

    const [ allData, setAllData ]= useState(null);
    const [ team, setTeam ] = useState(null);
    const [ toggleTeam , setToggleTeam ] = useState(false);
    const [ showTheBar, setShowTheBar ] = useState(true);

    // setAllData(Static)
    // show each time not dupicate
    const showTeam = async () =>{

        let theTeam = [];
        let eachTeam = [];

        // get all teams from all players
        if(allData !== null){
            theTeam = allData.map((data)=>{
                return data.Club
            })
        }

        // show all team from all players
        console.log(theTeam);

        // get each team not duplicate
        theTeam.forEach((c) => {
            if (!eachTeam.includes(c)) {
                eachTeam.push(c);
            }
        });

        console.log(eachTeam);    
        setTeam(eachTeam)    
    }

    const showAllTeam  = () =>{
        setToggleTeam(true);
    }

    const toShowBar = () =>{
        setShowTheBar(false)
    }

    useEffect(()=>{

        // fetch api to use data
        const fetchData = async () =>{
            // will use when api is ready
            const res = await fetch("https://player-api2020.jfkongphop.repl.co/data");
            const data = await res.json();
            // const data = Static
            setAllData(data)
        }

        // fetch data to use
        fetchData();

        showTeam();

    },[])

    return (
        <div>
            <div>
                {showTheBar && <nav className="navbar">
                    <div className="navbar__container">
                        <a href="#home" id="navbar__logo">Football Static</a>
                    <div className="navbar__toggle" id="mobile-menu">
                        <span className="bar"></span> <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                    <ul className="navbar__menu">
                        <li className="navbar__item">
                            <a href="#home" className="navbar__links" id="home-page">Home</a>
                        </li>
                        <li className="navbar__item">
                            <a href="#about" className="navbar__links" id="about-page">About</a>
                        </li>
                        <li className="navbar__item">
                            <a href="#services" className="navbar__links" id="services-page">Services</a>
                        </li>
                        <li onClick={showAllTeam} className="navbar__links" id="services-page">
                            {toggleTeam ? <select className="dropdown">
                                <option className="team" value="All Team">All Team</option>
                                    {team.map((data, index)=>{
                                        return <option key={index} value={data}>{data}</option>
                                    })}
                            </select> : "Team"}
                        </li> 
                        <li className="navbar__btn">
                        <a href="#sign-up" className="button" id="signup">Sign Up</a>
                        </li>
                    </ul>
                    </div>
                </nav>}
                {showTheBar && <Router>
                    <div className="hero" id="home">
                        <div className="hero__container">
                            <h1 className="hero__heading">Choose your <span>Player</span> </h1>
                            <p className="hero__description">Unlimited Possibilities</p>
                            <Link to="./showBar">
                                <button className="main__btn" onClick={toShowBar}>Explore</button>
                           </Link>
                        </div>
                        <Routes>
                            <Route path="showBar" element={<ShowBar/>} />
                        </Routes>
                    </div>
                </Router>}
                    {/* <ShowBar allData={allData} team={team}/> */}
                <a href="ShowBar.js">wfoiehoif</a>
            </div>
        </div>
    )
}

export default SearchBar


