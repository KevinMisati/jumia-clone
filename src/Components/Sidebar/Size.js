import React from 'react'
import classes from "./Size.module.css"
import { SearchIcon } from '../FoodHeaderIcon'

const Size = () => {
    return (
        <div className={classes.size}>
            <h2>Size</h2>
         <form action="">
                        <div className={classes.search}>
                            <button>{ <SearchIcon />}</button>
                        <input placeholder="Search"  type="text" />
                        </div>
                        <div className={classes.control}>
                        <input id="Adidas" type="checkbox" name=""  />
                            <label htmlFor="">S</label>
                        </div>
                        
                            <div className={classes.control}>
                        <input id="Advance" type="checkbox" name=""  />
                            <label htmlFor="">M</label>
                        </div>
                        
                            <div className={classes.control}>
                        <input id="Always" type="checkbox" name=""  />
                            <label htmlFor="">L</label>
                            </div>

                        <div className={classes.control}>
                        <input id="Ampex" type="checkbox" name=""  />
                            <label htmlFor="">XL</label>
                        </div>

                         <div className={classes.control}>
                        <input id="Annov" type="checkbox" name="" />
                            <label htmlFor="">XXL</label>
                        </div>
            </form>
            </div>
    )
}

export default Size
