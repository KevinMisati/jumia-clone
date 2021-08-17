import React from 'react'
import classes from "./LowerAds.module.css"

const ads = [
    {
        image: "https://ke.jumia.is/cms/QuickLinks/JumiaMall.png",
        title: "official stores"
    },
    {
        image: "https://ke.jumia.is/cms/QuickLinks/JumiaGlobal.png",
        title: "jumia global"
    },
    {
        image: "https://ke.jumia.is/cms/QuickLinks/JumiaOne_2.png",
        title: "airtime & bills"
    },
    {
        image: "https://ke.jumia.is/cms/QuickLinks/ICONE_FOOD-.png",
        title: "jumia food"
    }
]

const LowerAds = () => {
    return (
        <div className={classes["lower-ads-container"]}>
            <div className={classes["lower-ads"]}>
               
                    {
                        ads.map(({image,title}) => {
                            return (
                                <div className={classes["single-ad"]}>
                                    <div>
                                        <img src={image} alt="" />
                                    </div>
                                    <div className={classes.caption}>
                                        <p>{title}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                
            
            </div>
        </div>
    )
}

export default LowerAds
