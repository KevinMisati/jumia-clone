import React,{useContext} from 'react'
import classes from "./SingleAnniversary.module.css"
import { Context } from '../store/StoreProvider'

const SingleAnnniversary = ({ product }) => {
    const ctx = useContext(Context)

    /* const addToCartHandler = (product) => {
        dispatch({type:"ADD_TO_CART",payload:product})
    } */

    let {oldPrice,newPrice,image,name,stars,numberReviews} = product

if (name.length > 40) {
  name = name.substring(0, 40) + "...";
    }
    const discount = Math.round(((newPrice - oldPrice)/oldPrice) * 100)
    const width = ((stars / 5) * 100) + "%";
    
    return (
        <div className={classes["single-product"]}>
            <div className={classes.image}>
                <img src={image} alt="" />
            
            <div className={classes.info}>
                <div></div>
                <p className={classes.name}>{name}</p>
                <div className={classes.price}>KSh {newPrice}</div>
                <div className={classes["old-price-discount"]}>
                        <span className={classes["old-price"]} >KSh { oldPrice}</span>
                        <span className={classes.discount}>{discount }%</span>
                </div>
                <div className={classes["stars-container"]}>
                        <div className={classes["stars"]}>
                            <div style={{width:width}} className={classes["stars-colored"]} >

                            </div>
                        </div>
                        <div>
                            <span>({numberReviews})</span>
                        </div>
                        
                </div>
                    <button onClick={() => {
                        ctx.addToCartHandler(product)
                }}>add to cart</button>
                </div>
                </div>
            
        </div>
    )
}

export default SingleAnnniversary
