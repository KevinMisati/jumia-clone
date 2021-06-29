import React from 'react'
import classes from "./Gender.module.css"
import { SearchIcon } from '../FoodHeaderIcon'

const Gender = () => {
    return (
        <div className={classes.size}>
            <h2>Gender</h2>
         <form action="">
                        <div className={classes.search}>
                            <button>{ <SearchIcon />}</button>
                        <input placeholder="Search"  type="text" />
                        </div>
                        <div className={classes.control}>
                        <input id="Adidas" type="checkbox" name="" id="" />
                            <label htmlFor="">Baby</label>
                        </div>
                        
                            <div className={classes.control}>
                        <input id="Advance" type="checkbox" name="" id="" />
                            <label htmlFor="">Boys</label>
                        </div>
                        
                            <div className={classes.control}>
                        <input id="Always" type="checkbox" name="" id="" />
                            <label htmlFor="">Females</label>
                            </div>

                        <div className={classes.control}>
                        <input id="Ampex" type="checkbox" name="" id="" />
                            <label htmlFor="">Girls</label>
                        </div>

                         <div className={classes.control}>
                        <input id="Annov" type="checkbox" name="" id="" />
                            <label htmlFor="">Male</label>
                        </div>
            </form>
            </div>
    )
}

export default Gender
