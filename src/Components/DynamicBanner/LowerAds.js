import React from 'react'
import classes from "./LowerAds.module.css"

const LowerAds = () => {
    return (
        <div className={classes["lower-ads-container"]}>
            <div className={classes["lower-ads"]}>
            <div className={classes["single-ad"]}>
                <div>
                    <img src="https://ke.jumia.is/cms/QuickLinks/JumiaMall.png" alt=""/>
                </div>
                <div className={classes.caption}>
                    <p>official stores</p>
                </div>
            </div>
            <div className={classes["single-ad"]}>
                <div>
                    <img src="https://ke.jumia.is/cms/QuickLinks/JumiaMall.png" alt="" />
                </div>
                <div className={classes.caption}>
                    <p>official stores</p>
                </div>
            </div>
            <div className={classes["single-ad"]}>
                <div>
                    <img src="https://ke.jumia.is/cms/QuickLinks/JumiaMall.png" alt="" />
                </div>
                <div className={classes.caption}>
                    <p>official stores</p>
                </div>
            </div>
            <div className={classes["single-ad"]}>
                <div>
                    <img src="https://ke.jumia.is/cms/QuickLinks/JumiaMall.png" alt="" />
                </div>
                <div className={classes.caption}>
                    <p>official stores</p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default LowerAds
