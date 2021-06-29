import React from 'react'
import classes from "./Header.module.css"
import FoodHeaderIcon,{PayIcon,Bars,Logo,AccountIcon,HelpIcon,CartIcon,SearchIcon,DownArrow} from "./FoodHeaderIcon"

const Header = () => {
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
                    <Logo />
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
                    <div >
                        <span><CartIcon /></span>
                        <span className={classes["cart-text"]}>Cart</span>
                    </div>
                   
                </nav>
            </div>
        </div>
    )
}

export default Header
