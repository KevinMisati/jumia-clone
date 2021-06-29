import React from 'react'
import { SearchIcon } from "../FoodHeaderIcon"
import classes from "./SellerScore.module.css"

const SellerScore = () => {
    return (
        <div className={classes["seller-score"]}>
            <h2>Seller score</h2>
         <form action="">
                        <div className={classes.search}>
                            <button>{ <SearchIcon />}</button>
                        <input placeholder="Search"  type="text" />
                        </div>
                        <div className={classes.control}>
                        <input id="Adidas" type="checkbox" name="" id="" />
                            <label htmlFor="">80% or more</label>
                        </div>
                        
                            <div className={classes.control}>
                        <input style={{borderRadius:"50%"}} id="Advance" type="checkbox" name="" id="" />
                            <label htmlFor="">60% or more</label>
                        </div>
                        
                            <div className={classes.control}>
                        <input id="Always" type="checkbox" name="" id="" />
                            <label htmlFor="">40% or more</label>
                            </div>

                        <div className={classes.control}>
                        <input id="Ampex" type="checkbox" name="" id="" />
                            <label htmlFor="">20% or more</label>
                        </div>

                        
            </form>
            </div>
    )
}

export default SellerScore
