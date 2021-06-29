import React from 'react'
import classes from "./Footer.module.css"
import {GoogleStoreIcon, AppStoreIcon,FooterCartIcon,FooterLogo} from "./FoodHeaderIcon"

const Footer = () => {
    return (
        <div className={classes.footer}>

            <div className={classes["first-part-container"]}>
            <article className={classes["first-part"]}>
                <div className={classes.logo} >
                    <FooterLogo />
                </div>
                <div className={classes["footer-form"]}>
                    <h3>New to jumia?</h3>
                    <p>Subscribe to our newsletter to get updates on our latest offers!</p>
                    <form action="">
                        <input placeholder="Enter E-mail Address" type="text" />
                        <button>Male</button>
                        <button>Female</button>
                    </form>
                    </div>
                    
                <div className={classes.download}>
                <div className={classes["download-icon-text"]}>
                            <div className={classes["download-icon"]}><span><FooterCartIcon /></span></div>
                            <div className={classes["download-text"]}>
                                <h3>Download Jumia app free</h3>
                        <p>Get access to exclusive offers!</p>
                            </div>
                    
               
                    </div>
                    <div className={classes["app-google-icons"]}>
                        <div><AppStoreIcon /></div>
                        <div><GoogleStoreIcon /></div>
                    </div>
                    </div>
                </article>
                </div>
            <article className={classes["second-part"]}></article>
            
        </div>
    )
}

export default Footer
