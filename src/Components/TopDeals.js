import React from 'react'
import classes from "./TopDeals.module.css"
import SingleProduct from "./SingleProduct"

const TopDeals = () => {
    const data = [
        {
            name:"SmartPhones",
            img:"https://ke.jumia.is/cms/2021/JA21/Live/MCP/TNs/V1/Desktop/Nokia.jpg"
        },
         {
            name:"Smart Tvs",
             img:"https://ke.jumia.is/cms/2021/JA21/Live/MCP/TNs/smart-tvs_132x132.jpg"
        },
         {
            name:"Mobile Accessories",
             img:"https://ke.jumia.is/cms/2021/JA21/Live/MCP/TNs/th-phone-accessories_132x132.jpg"
        },
        {
            name: "Small Apliances",
            img: "https://ke.jumia.is/cms/2021/JA21/Live/MCP/TNs/V1/Desktop/Ramtons.jpg"
        },
        {
            name: "Health & Safety",
            img: "https://ke.jumia.is/cms/2021/JA21/Live/MCP/TNs/V1/Desktop/Webp.net-resizeimage-(81).jpg"
        },
        {
            name: "Food Cupboard",
            img: "https://ke.jumia.is/cms/2021/JA21/Live/MCP/TNs/V1/Desktop/Food.jpg"
        },
        {
            name: "Data Storage",
            img: "https://ke.jumia.is/cms/2021/JA21/Live/MCP/TNs/th-storage-devices_132x132.jpg"
        },
        {
            name: "Women Fashion",
            img: "https://ke.jumia.is/cms/2021/JA21/Live/MCP/TNs/V1/Desktop/Women-Fashion.jpg"
        },
        {
            name: "Men Fashion",
            img: "https://ke.jumia.is/cms/2021/JA21/Live/MCP/TNs/Boss_Man_132.png"
        },
        {
            name: "TV Accessories",
            img: "https://ke.jumia.is/cms/2021/JA21/Live/MCP/TNs/V1/Desktop/TV-Accessories.jpg"
        }
    ]
    return (
        <div className={classes["all-products"]}>
            <h2>Top Deals</h2>
            <div className={classes["all-products-container"]}>
            {data.map((datum,index) => {
                return (
                    <SingleProduct key={index +Math.random()} width = {"133px"} product={datum} />
                )
            })}
            </div>
            
        </div>
    )
}

export default TopDeals
