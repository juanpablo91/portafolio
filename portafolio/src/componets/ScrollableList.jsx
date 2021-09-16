import React from 'react';

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//import styles for slides items
import './SlideOptions.css';

//import slider files
import Slider from "react-slick";

export default function ScrollList() {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical:true,
    autoplay:true,
    rows:0,
  };

  return(

    <>

    <Slider  {...settings}>
    <div id="silde1" className="">
        <a href="/">Vospace</a>
      </div>
      <div id="silde2">
        <a href="/" className="">aquanima</a>
      </div>
      <div id="silde3">
        <a href="/" className="">betSocial</a>
      </div>
      <div  id="silde4">
         <a href="/" className="">Cincell</a>
      </div>
    </Slider>
    
    </>
  )

}
 