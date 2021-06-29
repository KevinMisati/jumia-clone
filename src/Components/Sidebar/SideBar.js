import React from 'react'
import classes from "./SideBar.module.css"
import { SearchIcon } from "../FoodHeaderIcon"
import ProductRating from './ProductRating'
import Size from "./Size"
import Gender from "./Gender"
import SellerScore from './SellerScore'

const SideBar = () => {
    return (
        <div className={classes.sidebar}>
            <div className={classes.categories}>
                <article>
                    <h2>Category</h2>
                    <a href="#">Computing</a>
                    <a href="#">Electronics</a>
                    <a href="#">Sporting Goods</a>
                    <a href="#">Phones &amp; Tablets</a>
                    <a href="#">Toys &amp; Games</a>
                    <a href="#">Fashion</a>
                    <a href="#">Gaming</a>
                    <a href="#">Home &amp; Office</a>
                    <a  href="#">Grocery</a>
                    <a href="#">Automobile</a>
                    <a href="#">Health &amp; Beauty</a>
                    <a href="#">Baby Products</a>
                </article>
            </div>

            <div className={classes.brand}>
                <article>
                    <h2>Brand</h2>
                    <form action="">
                        <div className={classes.search}>
                            <button>{ <SearchIcon />}</button>
                        <input placeholder="Search"  type="text" />
                        </div>
                        <div className={classes.control}>
                        <input id="Adidas" type="checkbox" name="" id="" />
                            <label htmlFor="">Adidas</label>
                        </div>
                        
                            <div className={classes.control}>
                        <input id="Advance" type="checkbox" name="" id="" />
                            <label htmlFor="">Advance</label>
                        </div>
                        
                            <div className={classes.control}>
                        <input id="Always" type="checkbox" name="" id="" />
                            <label htmlFor="">Always</label>
                            </div>

                        <div className={classes.control}>
                        <input id="Ampex" type="checkbox" name="" id="" />
                            <label htmlFor="">Ampex</label>
                        </div>

                         <div className={classes.control}>
                        <input id="Annov" type="checkbox" name="" id="" />
                            <label htmlFor="">Annov</label>
                        </div>
                    </form>
            </article>
                </div>
            
            <div className={classes.price}>

                <article>
                    <div className={classes.title}>
                        <h2>Price (Kshs)</h2>
                        <button>Apply</button>
                    </div>
                    <div classNmae={classes["price-range"]}>
                        <div>
                            <div className={classes["left-range"]} style={{ left: "0 %", width: "100%"}}></div>
                        <input name="x" class="ps" type="range" value="4" min="4" max="500000" />
                        <input name="y"  type="range" value="500000" min="4" max="500000" />
                        </div>
                    </div>
                </article>
            </div>
       
            <ProductRating />
            <Size />
            <Gender />
            <SellerScore />
        </div>

        
    )
}

export default SideBar
