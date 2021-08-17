import React from 'react'
import classes from "./DoubleBanner.module.css"

const DoubleBanner = () => {
    return (
        <div className={classes["double-banner-container"]} >
            <div className={classes["double-banner"]}>
                <div className={classes["first-part"]}>
                    <img src="https://ke.jumia.is/cms/2021/W33/HP/Banners/KE_Beauty_LoveYourSkin_0721_DB-copy-6.jpg" alt=""/>
                </div>
                <div className={classes["second-part"]}>
                    <img src="https://ke.jumia.is/cms/2021/W33/HP/Banners/KE_Beauty_LoveYourSkin_0721_DB.jpg" alt=""/>
                    </div>
            </div>
        </div>
    )
}

export default DoubleBanner
