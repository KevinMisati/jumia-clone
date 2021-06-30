import React from 'react'
import classes from "./SingleChosen.module.css"

const SingleProduct = ({ product, width }) => {
    let { img, name, newPrice, oldPrice } = product
    if (name.length > 23) {
        name = name.substring(0,22) +"..."
    }
    return (
        <div className={classes.product}>
            <img src={img} alt="" />
            <p>{name}</p>
            <div className={classes.price}>KSh {newPrice}</div>
            <div className={classes["old-price-discount"]}>
                <span className={classes["old-price"]} >KSh {oldPrice}</span>
                
            </div>
        </div>
    )
}

export default SingleProduct

