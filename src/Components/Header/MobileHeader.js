import React,{useContext} from 'react'
import {  Bars, Logo, AccountIcon, HelpIcon, CartIcon, SearchIcon, DownArrow } from "../FoodHeaderIcon"
import classes from "./MobileHeader.module.css"
import { Link } from "react-router-dom"
import { Context } from "../../store/StoreProvider"



const MobileHeader = () => {
    const ctx = useContext(Context)
    const cartItemsNumber = ctx.products.length;
    const LoginHandler = () => {

    }
    return (
        <>
            <div className={classes["mobile-nav-container"]}>

                <nav className={classes.nav}>
                    {/* first row */}
                    <div className={classes["first-row"]}>
                        <div className={classes["logo-bars"]}>
                            
                            <Bars  />
                            <Link to="/"><Logo width="100px" /></Link>
                           
                        </div>

                        <div className={classes.icons}>

                       
                    <div className={classes.login}>
                        <button>
                            <span><AccountIcon /></span>
                        </button>
                        {/*  <LoginButton /> */}
                    </div>

                    <div className={classes["cart-icon"]} >
                        <button onClick={LoginHandler}>
                            <Link to="/cart">
                                <span className={classes["icon"]}><CartIcon /></span>
                                {!(cartItemsNumber === 0) && <span className={classes["cart-number"]}>{cartItemsNumber}</span>}
                            </Link>
                        </button>
                    </div>
                    </div>
                    </div>
                {/* second row */}
                <div className={classes["search-input"]}>
                    <button>{<SearchIcon />}</button>
                    <input placeholder="Search products, brands and categories" type="text" />
                </div>
                </nav>
            </div>
           

        </>
        
    )
}

export default MobileHeader
