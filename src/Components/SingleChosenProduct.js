import React from 'react'
import classes from "./SingleChosen.module.css"

const SingleProduct = ({ product, width }) => {
    let { img, name, newPrice, oldPrice } = product
    if (name.length > 23) {
        name = name.substring(0,22) +"..."
    }
    const discount = Math.round(((product.newPrice - product.oldPrice) / oldPrice) * 100)
    return (
        <>
            <div className={classes.product}>
                <div className={classes["discount-container"]}>
                    <span className={classes.discount}>
                        {discount}
                    </span>
                </div>
            <img src={img} alt="" />
            <p>{name}</p>
            <div className={classes.price}>KSh {newPrice}</div>
            <div className={classes["old-price-discount"]}>
                <span className={classes["old-price"]} >KSh {oldPrice}</span>
                
            </div>
           
            </div>
           
            </>
    )
}

export default SingleProduct

