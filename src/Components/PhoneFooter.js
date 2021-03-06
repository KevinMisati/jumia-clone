import React from 'react'
import classes from "./PhoneFooter.module.css"
import {Link} from "react-router-dom"

const PhoneFooter = () => {
    return (
      
    <div className={classes["phone-footer-container"]}>

            <div className={classes["phone-footer"]}> 
            <div style={{ margin: "0px" }} className={classes["back-to-top-container"]}>
            <div  className={classes["back-to-top"]}>
                <h5><Link to="/" >
                    back to top
                </Link></h5>
                    </div>
            </div>
                
            <div>
                <h5>Help center</h5>
                <h5>contact us</h5>
                <h5>shipping and delivery</h5>
                
            </div>
                        
            <div>
                <h5>return policy</h5>
                <h5>corporate {"&"} bulk purcheses </h5>
                
                </div>
                
            <div>
                <h5>Become a jumia vendor</h5>
                <h5>jumia city partner program</h5>   
            </div>
               
            <div>
                <h5>report a product</h5>   
            </div>
            <div className={classes["all-rights"]}>
                    <p>Built by Kevin Misati.</p>
                </div>
          <div></div>                                                            
        </div> 
    </div>
    )
}

export default PhoneFooter
