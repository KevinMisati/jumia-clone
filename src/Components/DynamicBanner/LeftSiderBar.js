import React from 'react'
import { FruitIcon, HealthIcon, HomeIcon, ComputingIcon, ElectronicsIcon, CategoriesIcon, GardenIcon, SportingIcon, BabyIcon, GamingIcon, FashionIcon } from "../FoodHeaderIcon"
import classes from "./LeftSidebar.module.css"

const LeftSiderBar = () => {
    return (
        <div className={classes["left-sidebar-container"]}>
            
            
            <div className={classes["left-sidebar"]}>
            <ul>
                <li><span><FruitIcon /></span>Supermarket</li>
                <li> <span><HealthIcon /></span>Health {"&"} Beauty</li>
                <li><span><HomeIcon /></span> Home {"&"} Office </li>
                <li> <span><FruitIcon /></span>Phones {"&"} Office</li>
                <li> <span><ComputingIcon /></span>Computing</li>
                <li> <span><ElectronicsIcon /></span>Electronics</li>
                <li> <span><FashionIcon /></span>Fashion</li>
                <li> <span><GamingIcon /></span>Gaming</li>
                <li> <span><BabyIcon /></span>Baby Products</li>
                <li> <span><SportingIcon /></span>Sporting Goods</li>
                <li> <span><GardenIcon /></span>Garden {"&"} Outdoors</li>
                <li> <span>< CategoriesIcon /></span>Other Categories</li>
                </ul>
            </div>
        </div>
    )
}

export default LeftSiderBar
