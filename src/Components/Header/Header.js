import React,{useContext} from 'react'
import classes from "./Header.module.css"
import FoodHeaderIcon, { PayIcon, Bars, AccountIcon, HelpIcon, CartIcon, SearchIcon, DownArrow } from "../FoodHeaderIcon"
import { Link } from "react-router-dom"
import {Context} from "../../store/StoreProvider"
import Logo from "../../images/jumia-logo.svg"

import Button from '../UI/Button'
import MobileHeader from './MobileHeader' 

const Header = () => {
    const ctx = useContext(Context)
    const cartItemsNumber = ctx.products.length;
    const LoginHandler = () => {

    }
    return (
        <>
            
            <div className={classes.header}>
                {/* advert */}
                <div className={classes.ad}>
                    <img src="https://ke.jumia.is/cms/2021/W32/HP/KE_Cross_CPR_300bob_0821_STB-(1).gif" alt=""/>
                </div>
                    {/* 2 icons only on large screens */}
                <div className={classes.icons}>
                    <FoodHeaderIcon />
                    <PayIcon />
                </div>
                </div>
                
                
            
            <div className={classes["nav-container"]}>

                <nav className={classes.nav}>

                    <span>
                        <i class="fas fa-bars"></i>
                    </span>
                    <Link to="/">
                        <img alt="logo" src={Logo}></img>
                    </Link>
                    
                    {/* only on large screens */}
                    <form action="">
                        <div>
                            <button className={classes["search-btn-icon"]}>
                                <i class="fas fa-search"></i>
                            </button>
                            <input placeholder="Search products, brands and categories" type="text" />
                        </div>
                        <Button name="search" />
                       
                    </form>
                    <div className={classes.login}>
                        <button>
                            <span>
                                <i class="far fa-user"></i>
                                {/* <AccountIcon /> */}
                            </span>
                        <span className={classes["text"]}>Login</span>
                            <span ><DownArrow /></span>
                        </button>
                       {/*  <LoginButton /> */}
                    </div>

                    <div className={classes["help-text"]}>
                        <button>
                            <span className={classes["help-icon"]}>
                                <i class="far fa-question-circle"></i>
                            </span>
                        <span className={classes["text"]}>Help</span>
                            <span className={classes["help-arrow"]}><DownArrow /></span>
                        </button>
                    </div>

                    <div className={classes["cart-icon"]} >
                        <button onClick={LoginHandler}>
                        <Link to="/cart">
                            <span className={classes["icon"]}>
                                    <i class="fas fa-shopping-cart"></i>
                            </span>
                            <span className={classes["text"]}>Cart</span>
                            {!(cartItemsNumber === 0) && <span className={classes["cart-number"]}>{cartItemsNumber}</span>}
                            </Link>
                        </button>
                    </div>


                </nav>
            </div>

            <div className={classes["mobile-header"]}>
                 <MobileHeader />
            </div>
             
            </>
    )
}

export default Header
