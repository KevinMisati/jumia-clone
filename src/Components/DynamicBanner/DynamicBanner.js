import React from 'react'
import LeftSiderBar from "./LeftSiderBar"
import ReactSlickDemo from "./MiddleCarousel"
import RightSideBar from "./RightSideBar"
import classes from "./DynamicBanner.module.css"
import LowerAds from "./LowerAds"


const DynamicBanner = () => {
    return (
        <div className={classes["dynamic-ads-container"]}>
           

        <div className={classes["dynamic-container"]}>
                <div className={classes["left-sidebar"]}> <LeftSiderBar /></div>

                <div><ReactSlickDemo /></div>
                
                
                <div className={classes["right-sidebar"]}>
                    <RightSideBar />
                </div>
            </div>
        <LowerAds />
    </div>
    )
}

export default DynamicBanner
