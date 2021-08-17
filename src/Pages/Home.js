import React from 'react'
import Banner from "../Components/Banners/Banner"
import DoubleBanner from "../Components/Banners/DoubleBanner"
import classes from "./Home.module.css"
import TopDeals from "../Components/TopDeals"
import ChosenForU from "../Components/ChosenForU"
import SideBar from "../Components/Sidebar/SideBar"
import Anniversary from '../Components/Anniversary'
import DynamicBanner from "../Components/DynamicBanner/DynamicBanner"
const Home = () => {
    return (
        <main>
            <div className={classes.dynamic}>
                <DynamicBanner />
            </div>
            
            
            <div className={classes["home-link"]}>
                <a className={classes["home-link-one"]} href="/">Home</a>
                <a className={classes["home-link-two"]} href="/">Anniversary Deals</a>
            </div>
            <ChosenForU />
            <DoubleBanner />
            <TopDeals />
            <Banner />
            
            
            
            <div className={classes["sidebar-anniversary"]}>
               {/*  <SideBar /> */}
                <Anniversary />
            </div>
            
            
        </main>
    )
}

export default Home
