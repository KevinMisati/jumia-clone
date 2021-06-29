import React from 'react'
import classes from "./ChosenForU.module.css"
import SingleProduct from "./SingleProduct"

const ChosenForU = () => {

    const CalcDiscount = ((newP , oldP) => {
        const discount = (newP - oldP) / oldP
        return(Math.round(discount))
    })

    const data = [
        {
            name: "Samsung Galaxy A12, 6.5, 4GB RAM + 128GB(Dual SIM), 5000mAh - Blue",
            img: "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/49/134053/1.jpg?4164",
            newPrice: 16499,
            oldPrice: 19000,
           // discount:CalcDiscount(newPrice,oldPrice)
        },
        {
            name: "Garnier Pure Active 3 In1 Charcoal Anti Blackhead Mask Wash Scrub -150ml",
            img: "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/44/255851/1.jpg?8649",
            newPrice: 699,
            oldPrice: 970,
           // discount: CalcDiscount(newPrice, oldPrice)
        },
        {
            name: "Garnier Skin Active Pure Charcoal Black Tissue Face Mask",
            img: "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/45/269252/1.jpg?7176",
            newPrice: 199,
            oldPrice: 300,
            //discount: CalcDiscount(newPrice, oldPrice)
        },
        {
            name: "Bruhm BGI-66M31ORBN, 3+1 Free Standing Gas Cooker - Shiny Black",
            img: "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/94/459062/1.jpg?8897",
            newPrice: 23900,
            oldPrice: 30500,
           // discount: CalcDiscount(newPrice, oldPrice)
        },
        {
            name: "Eako Disposable Protective Face Mask 3ply 50pcs Pack.",
            img: "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/34/588023/1.jpg?7908",
            newPrice: 220,
            oldPrice: 266,
           // discount: CalcDiscount(newPrice, oldPrice)
        },
        {
            name: "Jameson Irish Whiskey - 1 Litre",
            img: "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/97/211061/1.jpg?3626",
            newPrice: 1999,
            oldPrice: 2324,
           // discount: CalcDiscount(newPrice, oldPrice)
        }
    ]
    return (
        <div className={classes["all-products"]}>
            <h2>Chosen For You</h2>
            <div className={classes["all-products-container"]}>
                {data.map((datum) => {
                    return (
                        <SingleProduct width={100/6 +"%"} product={datum} />
                    )
                })}
            </div>
            
        </div>
    )
}

export default ChosenForU
