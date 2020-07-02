import React from 'react'
import '../styles/NavBarStyle.css'
import '../styles/App.css'
import '../styles/Home.css'
// import homeBG from '../styles/homePics.jpg'


const Home = () => {
    return (
        <>
            <div className="home-container">
                {/* <img className="bg-img" src={homeBG} alt="HomeBG" /> */}
                <div className="home-description">
                    This is an App for those pet owners like me, who have experience so many lost, and sometimes you just want to go back from time to time and look for the memories you had with them
                </div>
            </div>
        </>
    )
}

export default Home;