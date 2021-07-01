import React,{useContext} from 'react'
import classes from "./Header.module.css"
import FoodHeaderIcon, { PayIcon, Bars, Logo, AccountIcon, HelpIcon, CartIcon, SearchIcon, DownArrow } from "./FoodHeaderIcon"
import { Link } from "react-router-dom"
import {Context} from "../store/StoreProvider"

const Header = () => {
    const ctx = useContext(Context)
    const cartItemsNumber = ctx.products.length;
    return (
        <div className={classes.header}>
            <div className={classes.ad}>
                <img src="https://ke.jumia.is/cms/2021/JA21/Live/HP/Week2/Day5/Explosion/KE_JA21_ExplosionDay_Tease_D-(1).gif" alt=""/>
            </div>
            <div className={classes.icons}>
                <FoodHeaderIcon />
                <PayIcon />
            </div>
            <div className={classes["nav-container"]}>
                <nav className={classes.nav}>
                   
                    <Bars />
                    <Link to="/"><Logo /></Link> 
                    <form action="">
                        <div>
                            <button className={classes["search-btn-icon"]}><SearchIcon /></button>
                            <input placeholder="Search products, brands and categories" type="text" />
                        </div>
                        <button className={classes.search}>SEARCH</button>
                    </form>
                    <div>
                        <span><AccountIcon /></span>
                        <span className={classes["help-text"]}>Login</span>
                        <span className={classes["help-text"]}><DownArrow /></span>
                    </div>
                    <div className={classes["help-text"]}>
                        <span className={classes["help-text"]}><HelpIcon /></span>
                        <span className={classes["help-text"]}>Help</span>
                        <span className={classes["help-arrow"]}><DownArrow /></span>
                    </div>
                    <div className={classes["cart-icon"]} >
                        <Link  to="/cart">
                        <span className={classes["icon"]}><CartIcon /></span>
                            <span className={classes["cart-text"]}>Cart</span>
                            {!(cartItemsNumber === 0) && <span className={classes["cart-number"]}>{cartItemsNumber}</span>}
                        </Link>
                    </div>
                   
                   
                </nav>
                <div className={classes["search-input"]}>
                    <button>{<SearchIcon />}</button>
                    <input placeholder="Search" type="text" />
                </div>
            </div>
        </div>
    )
}

export default Header
