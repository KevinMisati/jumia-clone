import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classes from "./MiddleCarousel.module.css"
import SimpleImageSlider from "react-simple-image-slider";


const commonStyles = {
    zIndex: "10000",
    background: "#000",
    display: "block",
    color: "#fff",
    padding:"0px",
    borderRadius: "100%",
    border:"1px solid #000",
    outline: "none",
    
}

function SampleNextArrow (props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{   right: "0px", ...commonStyles  }}
            onClick={onClick}
        />
    );
}
function SamplePrevArrow (props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ left: "0px",...commonStyles }}
            onClick={onClick}
        >
            <button className={classes.btn}> {"<"}</button>
        </div>
    );
}
export default class ReactSlickDemo extends React.Component {

    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }
    next () {
        this.slider.slickNext();
    }
    previous () {
        this.slider.slickPrev();
    }

    render () {
        var settings = {
            dots: true,
             dotsClass: "slick-dots slick-thumb", 
            infinite: true,
            speed: 500,
            autoplay: true,
            autoplaySpeed: 3000,
            slidesToShow: 1,
            fade: true,
            slidesToScroll: 1,
            arrows:false,
            appendDots: dots => (
                <div
                    style={{
                       
                        borderRadius: "10px",
                        padding: "10px",
                        position: "absolute",
                        
                        bottom: "20px",
                        height:"auto",

                    }}
                >
                    <ul style={{ margin: "0px" }}>
                        {dots}
                    </ul>
                </div>
            ),
        
           /*   customPaging: i => (
                <div
                    onClick = {() => clas="slick-active"}
                     
                    style={{
                        width: "10px",
                        height:"10px",
                        color: "gray",
                        backgroundColor: clas ==  "slick-active" ?"orange" : "gray",
                        border: "1px gray solid",
                         borderRadius: "100%",
                        
                    }}
                >
                   
                </div>
            )  */
       
        }
        return (
            <div className="container">
                <div onClick={this.previous} className={classes["prev-btn-container"]}>
                <button onClick={this.previous} className={classes["prev-btn"]} onClick={this.previous}>
                    {"<"}
                    </button>
                </div>
                <div onClick={this.next} className={classes["next-btn-container"]}>
                <button onClick={this.next} className={classes["next-btn"]} onClick={this.next}>
                    {">"}
                    </button>
                </div>
                <Slider ref={c => (this.slider = c)} className={classes["slider-container"]} {...settings}>
                    <div  className={classes["img-container"]}>
                        <img src="https://ke.jumia.is/cms/2021/W31/CP/_1424x768_S-(1).jpg" />
                    </div>
                    <div className={classes["img-container"]}>
                        <img src="https://ke.jumia.is/cms/2021/W32/HP/download-(3).jpg" />
                    </div>
                    <div className={classes["img-container"]}>
                        <img src="https://ke.jumia.is/cms/2021/W32/HP/KE_Cross_NewGadgets_Edifier_0821_S.jpg" />
                    </div>
                    <div className={classes["img-container"]}>
                        <img src="https://ke.jumia.is/cms/2021/W32/HP/KE_Cross_NewGadgets_VisionPlus_0821_S.jpg" />
                    </div>
                    <div className={classes["img-container"]}>
                        <img src="https://ke.jumia.is/cms/2021/W32/HP/DOD/JAS_S_Vision.jpg" />
                    </div>
                    <div className={classes["img-container"]}>
                        <img src="https://ke.jumia.is/cms/2021/W32/HP/Mamarocks-D-S.jpg" />
                    </div>
                    <div className={classes["img-container"]}>
                        <img src="https://ke.jumia.is/cms/2021/W26/NewHome/Webp.net-resizeimage-(62)-(1).jpg" />
                    </div>


                </Slider>


        
         
        </div>
            
        );
    }
}









































 /* const images = [
    { url: "https://ke.jumia.is/cms/2021/W31/CP/_1424x768_S-(1).jpg"},
    { url: "https://ke.jumia.is/cms/2021/W32/HP/download-(3).jpg"},
    { url: "https://ke.jumia.is/cms/2021/W32/HP/KE_Cross_NewGadgets_Edifier_0821_S.jpg"},
    { url: "https://ke.jumia.is/cms/2021/W32/HP/KE_Cross_NewGadgets_VisionPlus_0821_S.jpg"},
    { url: "https://ke.jumia.is/cms/2021/W32/HP/DOD/JAS_S_Vision.jpg" },
    { url: "https://ke.jumia.is/cms/2021/W32/HP/Mamarocks-D-S.jpg" },
    { url:"https://ke.jumia.is/cms/2021/W26/NewHome/Webp.net-resizeimage-(62)-(1).jpg"}
]   */


/* export default function SimpleSlider () {
    var settings = {
        dots: true,
        infinite: true,
        speed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        < >
            <Slider className={classes["slider-container"]}  {...settings}>
                
                <div>
                    <img src="https://ke.jumia.is/cms/2021/W31/CP/_1424x768_S-(1).jpg" alt="" />
                </div>
           
          <div>
                    <img src="https://ke.jumia.is/cms/2021/W32/HP/download-(3).jpg" alt="" />
          </div>
                
           
          
                <div>
                    <img src="https://ke.jumia.is/cms/2021/W32/HP/KE_Cross_NewGadgets_Edifier_0821_S.jpg" alt="" />
            </div>
           
                <div>
                    <img src="https://ke.jumia.is/cms/2021/W32/HP/KE_Cross_NewGadgets_VisionPlus_0821_S.jpg" alt="" />
                </div>
                
           
           
                <div>
                    <img src="https://ke.jumia.is/cms/2021/W32/HP/Mamarocks-D-S.jpg" alt="" />
                </div>
            
           
                <div>
                    <img src="https://ke.jumia.is/cms/2021/W26/NewHome/Webp.net-resizeimage-(62)-(1).jpg" alt="" />
                </div>
           
            </Slider>
        </>
    );
}
export  function Simplelider () {
   
    return (
       
            <SimpleImageSlider
                width={712}
                height={384}
                images={images}
            />
        
    );
}
 */