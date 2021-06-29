import React from 'react'
import Banner from "../Components/Banner"
import classes from "./Home.module.css"
import TopDeals from "../Components/TopDeals"
import ChosenForU from "../Components/ChosenForU"
import SideBar from "../Components/Sidebar/SideBar"
import Anniversary from '../Components/Anniversary'

const Home = () => {
    return (
        <main>
            
            <div className={classes["home-link"]}>
                <a className={classes["home-link-one"]} href="/">Home</a>
                <a className={classes["home-link-two"]} href="#">Anniversary Deals</a>
            </div>
            
            <Banner />
            <TopDeals />
            <ChosenForU />
            <div className={classes["sidebar-anniversary"]}>
                <SideBar />
                <Anniversary />
            </div>
            
            
        </main>
    )
}

export default Home
