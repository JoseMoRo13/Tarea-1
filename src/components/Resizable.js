import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Resizable.css';

function Resizable() {
const [display, setDisplay] = useState(true);
const [width, setWidth] = useState (600);

const settings = {
dots: true,
infinite: true,
speed: 500,
slideToShow: 3,
slidesToScroll: 1
};

const images = [
"https://cdn.stocksnap.io/img-thumbs/280h/floral-field_QFBWS7JTIF.jpg",
"https://cdn.stocksnap.io/img-thumbs/280h/bird-perched_VSG77EODME.jpg",
"https://cdn.stocksnap.io/img-thumbs/280h/flower-bud_BDHLBF3BQY.jpg",
"https://cdn.stocksnap.io/img-thumbs/280h/pink-flowers_XYIZLJI756.jpg",
"https://cdn.stocksnap.io/img-thumbs/280h/lake-mountains_VZBJUVPO25.jpg",
];


return (
<div className="slider-container">
<h2>Resizable</h2>
<button className="button" onClick={()=> setWidth(width + 100)}>
{" "}
increase{" "}
</button>
<button className="button" onClick={()=>setWidth(width - 100)}>
{" "}
decrease{" "}
</button>
<button className="button" onClick={()=> setDisplay(!display)}>
{" "}
toggle{" "}
</button>
<div 
style={{
width: width + "px",
display: display ? "block" : "none"
}}
>
<Slider {...settings}>
{images.map((image,index)=>(
<dive key={index}>
<img src={image} alt={`Slider ${index}`}/>
</dive>
))}
</Slider>
</div>
</div>
);
}

export default Resizable;