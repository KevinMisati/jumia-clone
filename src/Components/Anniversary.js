import React from 'react'
import classes from "./Anniversary.module.css"
import SingleAnnniversary from './SingleAnnniversary'
import { DownArrow } from './FoodHeaderIcon'

const Anniversary = () => {
    const data = [{
        image: "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/44/255851/1.jpg?8649",
        name: "Garnier Pure Active 3 In1 Charcoal Anti Blackhead Mask Wash Scrub -150ml",
        oldPrice: 970,
        newPrice:699 ,
        stars: 4.5,
        officialStore: true,
        numberReviews:789,
    },
    {
        image: "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/39/696832/1.jpg?6195",
        name: "Fashion 6-Pack Men's Cotton Woven Boxers - Assorted",
        oldPrice:999 ,
        newPrice: 699,
        stars: 4,
        officialStore: false,
        numberReviews:578,
    },
    {
        image: "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/83/312531/1.jpg?9008",
        name: "Fashion Elastic Belt Corset Tummy Shaper",
        oldPrice: 641,
        newPrice: 360,
        stars: 4,
        officialStore: false,
        numberReviews:484,
        },
    {
        image: "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/15/018582/1.jpg?5449",
        name: "Ariel 3.5kg Hand Wash Touch Of Downy Detergent",
        oldPrice: 1000,
        newPrice: 799,
        stars: 5,
        officialStore: true,
        numberReviews:34,
    },
    {
        image: "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/81/456182/1.jpg?0594",
        name: "Dr. Rashel Vitamin C Brightening &amp; Anti-Aging Face Serum -50ml.",
        oldPrice:1000,
        newPrice:322 ,
        stars:4 ,
        officialStore:false ,
        numberReviews:873,
        },
     {
        image: "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/89/320992/1.jpg?3146",
        name: "Fashion 5Pack Hard Khakis; Beige, Navy Blue,Green,Chocolate&amp;Maroon",
        oldPrice: 4559,
        newPrice: 4339,
        stars:4 ,
        officialStore:false ,
        numberReviews:139,
        },
      {
        image: "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/15/914781/1.jpg?8648",
        name: "Garnier Skin Active Hydrabomb Pomegranate Tissue Face Mask",
        oldPrice:300 ,
        newPrice:199 ,
        stars:4.7 ,
        officialStore:false,
        numberReviews:615,
        },
      {
        image: "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/14/03184/1.jpg?1755",
        name: "Fashion Checked Cotton Boxer Shorts - 3 Pieces - Assorted",
        oldPrice:430 ,
        newPrice:380 ,
        stars: 4,
        officialStore:false ,
        numberReviews:874,
        },
        {
            image: "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/471551/1.jpg?6708",
            name: "Generic Men's Official And Casual Boots",
            oldPrice:4000,
            newPrice:2223,
            stars:4,
            officialStore:false,
            numberReviews:2,
        },
        {
            image: "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/26/500093/1.jpg?8569",
            name: "Generic Strong Bass Earphones - White",
            oldPrice:500,
            newPrice:238,
            stars:3,
            officialStore:false,
            numberReviews:1,
        },
        {
            image: "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/789862/1.jpg?0086",
            name: "Generic Fluffy Carpets 5*8 Maroo",
            oldPrice: 5850,
            newPrice: 3225,
            stars: 4,
            officialStore: false,
            numberReviews: 2,
        },
        {
            image: "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/79/070053/1.jpg?8050",
            name: "Jesou Collection Gift For Men.Watch + Sunglasses + Wallet + Tie + Belt",
            oldPrice: 4000,
            newPrice: 2849,
            stars: 4,
            officialStore: false,
            numberReviews: 2,
        },
        {
            image: "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/56/321892/1.jpg?7076",
            name: "Lifesum Methylated Spirit 70% Vv 5 Litres",
            oldPrice:1285,
            newPrice:1221 ,
            stars:4 ,
            officialStore:false ,
            numberReviews:1 ,
        },
        {
            image: "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/03/516803/1.jpg?5710",
            name: "Generic Automatic Soap Dispenser",
            oldPrice:5000,
            newPrice:2660 ,
            stars:3.3 ,
            officialStore:false ,
            numberReviews:3 ,
        },
        {
            image: "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/31/724253/1.jpg?1455",
            name: "Fashion 4Pcs Child Safety Locks Protective Device Drawer",
            oldPrice: 1500,
            newPrice: 722,
            stars: 4.1,
            officialStore: false,
            numberReviews: 3,
        },
        {
            image: "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/01/355952/1.jpg?8827",
            name: ">Generic Techno Spark K7 autofocus Back Cover - Black",
            oldPrice:400,
            newPrice:370 ,
            stars:5 ,
            officialStore: false,
            numberReviews: 4,
        }
        
    
    
    ]
    
    return (
        <div className={classes["anniversary-container"]}>
            <div className={classes.title}>
                <h2>Anniversary Deals</h2>
                <h4>
                    <span>Sort by: </span>
                    <span>Popularity</span>
                    <span><DownArrow /></span>
                </h4>
            </div>
        <div className={classes.anniversary}>

            {data.map((datum,index )=> {
                return (
                    <SingleAnnniversary key={index +Math.random()} product={datum} />
                )
            })}
            </div>
            </div>
    )
}

export default Anniversary
