import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Gallery.css";
export default function Gallery() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1030,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 740,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  
  const imgUrls=[
    {
      name:"1",
      url:"https://jiitopticachapter.in/images/recent%20highlights/gallery1.jpg"
    },
    {
      name:"2",
      url:"https://jiitopticachapter.in/images/recent%20highlights/gallery5.jpeg"
    },
    {
      name:"3",
      url:"https://jiitopticachapter.in/images/recent%20highlights/gallery4.jpg"
    },
    {
      name:"4",
      url:"https://jiitopticachapter.in/images/recent%20highlights/gallery3.jpg"
    },
    {
      name:"5",
      url:"https://jiitopticachapter.in/images/recent%20highlights/gallery2.jpg"
    },
    {
      name:"6",
      url:"https://jiitopticachapter.in/images/recent%20highlights/gallery6.jpeg"
    },
    {
      name:"7",
      url:"https://jiitopticachapter.in/images/recent%20highlights/gallery7.jpeg"
    },
  ];
  
 
  return (
   
    <div className='gallery-body'>
    <h1 className="gallery-title">GALLERY</h1>
      <Slider {...settings}>
        {imgUrls.map((d) => (
          
            <div className="gallery-container">
              <img src={d.url} alt="" className="gallery-card"/>
            </div>
          
        ))}
      </Slider>
      </div>
   
   )
   }
