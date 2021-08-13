import React,{useContext} from 'react'
import classes from "./Header.module.css"
import FoodHeaderIcon, { PayIcon, Bars, Logo, AccountIcon, HelpIcon, CartIcon, SearchIcon, DownArrow } from "./FoodHeaderIcon"
import { Link } from "react-router-dom"
import {Context} from "../store/StoreProvider"
import LoginButton from './Account/LoginButton'
import Button from './UI/Button'

const Header = () => {
    const ctx = useContext(Context)
    const cartItemsNumber = ctx.products.length;
    const LoginHandler = () => {

    }
    return (
        <>
            
        <div className={classes.header}>
            <div className={classes.ad}>
                <img src="https://ke.jumia.is/cms/2021/W31/CP/KE_Cross_SelfLove_STB_0721.gif" alt=""/>
            </div>
            <div className={classes.icons}>
                <FoodHeaderIcon />
                <PayIcon />
                </div>
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
                        <Button name="search" />
                       
                    </form>
                    <div className={classes.login}>
                        <button>
                        <span><AccountIcon /></span>
                        <span className={classes["text"]}>Login</span>
                            <span className={classes["help-text"]}><DownArrow /></span>
                        </button>
                       {/*  <LoginButton /> */}
                    </div>

                    <div className={classes["help-text"]}>
                        <button>
                        <span className={classes["text"]}><HelpIcon /></span>
                        <span className={classes["text"]}>Help</span>
                            <span className={classes["help-arrow"]}><DownArrow /></span>
                        </button>
                    </div>

                    <div className={classes["cart-icon"]} >
                        <button onClick={LoginHandler}>
                        <Link to="/cart">
                            <span className={classes["icon"]}><CartIcon /></span>
                            <span className={classes["text"]}>Cart</span>
                            {!(cartItemsNumber === 0) && <span className={classes["cart-number"]}>{cartItemsNumber}</span>}
                            </Link>
                        </button>
                    </div>


                </nav>
                <div className={classes["search-input"]}>
                    <button>{<SearchIcon />}</button>
                    <input placeholder="Search" type="text" />
                </div>
            </div>
             
            </>
    )
}

export default Header
