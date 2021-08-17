import React from 'react'
import classes from "./RightSiderBar.module.css"

const RightSideBar = () => {
    return (
        <div className={classes["right-sidebar-container"]} >
            <div className={classes["first-row"]}>
                <div>
                    <div className={classes["img-container"]}>
                        <img src="https://ke.jumia.is/cms/2021/W26/CP/new-hp-sliders/Webp.net-resizeimage-(1).png" alt=""/>
                    </div>
                    <div>
                        <p className={classes.heading}>help center</p>
                        <p>guide to customer care</p>
                    </div>
                    
                </div>
                <div>
                    <div className={classes["img-container"]}>
                        <img src="https://ke.jumia.is/cms/2021/W26/CP/new-hp-sliders/icone-2-return.png" alt=""/>
                    </div>
                    <div>
                        <p className={classes.heading}>easy return</p>
                        <p>quick fund</p>
                    </div>

                </div>
                <div>
                    <div className={classes["img-container"]}>
                        <img src="https://ke.jumia.is/cms/2021/W26/CP/new-hp-sliders/icone-2-payment.png" alt=""/>
                    </div>
                    <div>
                        <p className={classes.heading}>sell on jumia</p>
                        <p>millions of visitors</p>
                    </div>

                </div>
            </div>
            <div className={classes["second-row"]}>
                <img src="https://ke.jumia.is/cms/2021/W29/KE_Cross_BaridiEdition_HP_0721_BF.gif" alt=""/>
            </div>
        </div>
    )
}

export default RightSideBar
