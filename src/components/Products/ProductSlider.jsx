import React from "react";
import Slider from "react-slick";
 
export default function SimpleSlider({sliderImages}) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1
  };
  const productImages =  sliderImages.map((image,i)=>(
    <div key={i}>
      <img src={image} style={{width:'100%'}} alt=''/>
    </div>
  ))

  return (
    <Slider {...settings}>
      {productImages}
    </Slider>
    
  );
}
