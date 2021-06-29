import React from 'react'
import classes from "./SingleProduct.module.css"

const SingleProduct = ({product,width}) => {
    return (
        <div  style={{width:width}} className={classes.product}>
            <img src={product.img} alt="" />
            <p>{product.name}</p>
        </div>
    )
}

export default SingleProduct

