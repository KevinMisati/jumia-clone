import React,{useContext} from 'react'
import {  Bars, AccountIcon, HelpIcon, CartIcon, SearchIcon, DownArrow } from "../FoodHeaderIcon"
import classes from "./MobileHeader.module.css"
import { Link } from "react-router-dom"
import { Context } from "../../store/StoreProvider"
import Logo from   "../../images/jumia-logo.svg"



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
                            
                           {/*  <Bars  /> */}
                           <span>
                                <i class="fas fa-bars"></i>
                           </span>
                            
                            <Link to="/">
                                <img alt="logo" src={Logo}></img>
                            </Link>
                            
                            
                           
                        </div>

                        <div className={classes.icons}>

                       
                    <div className={classes.login}>
                        <button>
                            <span>
                                <i class="far fa-user"></i>
                                {/* <AccountIcon /> */}
                            </span>
                        </button>
                        {/*  <LoginButton /> */}
                    </div>

                    <div className={classes["cart-icon"]} >
                        <button onClick={LoginHandler}>
                            <Link to="/cart">
                                <span className={classes["icon"]}>
                                            <i class="fas fa-shopping-cart"></i>{/* <CartIcon /> */}</span>
                                {!(cartItemsNumber === 0) && <span className={classes["cart-number"]}>{cartItemsNumber}</span>}
                            </Link>
                        </button>
                    </div>
                    </div>
                    </div>
                {/* second row */}
                <div className={classes["search-input"]}>
                    <button>
                        <i class="fas fa-search"></i>
                        {/* {<SearchIcon />} */}
                    </button>
                    <input placeholder="Search products, brands and categories" type="text" />
                </div>
                </nav>
            </div>
           

        </>
        
    )
}

export default MobileHeader
