import React from 'react'
import classes from "./ProductRating.module.css"

const ProductRating = () => {
    const arr = [5,4,3,2,1]
    return (
       <div className={classes["product-rating"]}>
           <h2>product rating</h2>
            <div className={classes["stars-container"]}>
                {
                    arr.map((num,index) => {
                        const width= (num/5 *100) +"%" ;
                        return (
                            <div key={index +Math.random()}>
                                <div className={classes["star-container"]}>
                        <div className={classes["stars"]}>
                            <div style={{width:width}} className={classes["stars-colored"]} >

                            </div>
                        </div>
                        <div>
                            <span>{"&"} above</span>
                                    </div>
                                    </div>
                        </div>
                    )
                })
                }
                        
                        
                </div>
            </div>
    )
}

export default ProductRating
