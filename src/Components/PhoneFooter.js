import React from 'react'
import classes from "./PhoneFooter.module.css"

const PhoneFooter = () => {
    return (
      
    <div className={classes["phone-footer-container"]}>

            <div className={classes["phone-footer"]}> 
            <div style={{ margin: "0px" }} className={classes["back-to-top-container"]}>
            <div  className={classes["back-to-top"]}>
                <h4><a href="/" >
                    back to top
                </a></h4>
                    </div>
            </div>
                
            <div>
                <h4>Help center</h4>
                <h4>contact us</h4>
                <h4>shipping and delivery</h4>
                
            </div>
                        
            <div>
                <h4>return policy</h4>
                <h4>corporate {"&"} bulk purcheses </h4>
                
                </div>
                
            <div>
                <h4>Become a jumia vendor</h4>
                <h4>jumia city partner program</h4>   
            </div>
               
            <div>
                <h4>report a product</h4>   
            </div>
            <div className={classes["all-rights"]}>
                <p>All Rights Reseved</p>
                </div>
          <div></div>                                                            
        </div> 
    </div>
    )
}

export default PhoneFooter
