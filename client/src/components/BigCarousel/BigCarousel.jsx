import React, { useState } from 'react';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';



const images = [
    {
      id: 1,
      src: 'https://cdn.shopify.com/s/files/1/0376/9440/6700/files/slide13.png?v=1629543119',
      alt: "First Slide"
    },
    {
      id: 2,
      src: 'https://cdn.shopify.com/s/files/1/0376/9440/6700/files/slide12.png?v=1613723856',
      alt: "Second Slide"
    },
    {
      id: 3,
      src: 'https://cdn.shopify.com/s/files/1/0376/9440/6700/files/slide11.png?v=1613723856',
      alt: "Third Slide"
    },
//     {
//     id: 4,
//     src: 'https://www.youtube.com/embed/ZFArP9yqfrA',
//     alt: "Fourth Slide"
//   }
  ]

 const responsive = [{
        desktop: {
            breakpoint: {
              max: '3000px',
              min: '1200px'
            },
            items: 1
          },
          mobile: {
            breakpoint: {
                max: '599px',
                min: '0px'
              },
              items: 1
            },
            tablet: {
              breakpoint: {
                max: '1199px',
                min: '600px'
              },
              items: 1
            }
    }]


const BigCarousel =()=>{ 
        
return (
    <Carousel
    additionalTransfrom={0}
    arrows
    autoPlaySpeed={3000}
    centerMode={false}
    className="bigCarousel"
    containerClass="container"
    dotListClass="bigCarouselDot"
    draggable
    focusOnSelect={false}
    infinite
    itemClass="bigCarouselItem"
    keyBoardControl
    minimumTouchDrag={80}
    pauseOnHover
    renderArrowsWhenDisabled={false}
    renderButtonGroupOutside={false}
    renderDotsOutside={false}
    responsive={{
      desktop: {
        breakpoint: {
          max: 3000,
          min: 1024
        },
        items: 1
      },
      mobile: {
        breakpoint: {
          max: 464,
          min: 0
        },
        items: 1
      },
      tablet: {
        breakpoint: {
          max: 1024,
          min: 464
        },
        items: 1
      }
    }}
    rewind={false}
    rewindWithAnimation={false}
    rtl={false}
    shouldResetAutoplay
    showDots
    sliderClass="bigCarouselSlider"
    slidesToSlide={1}
    swipeable
  >
   { images.map(image => (
    <img key={image.id} src= {image.src} alt={image.alt}
    style={{
        display: 'block',
        height: '100%',
        margin: 'auto',
        width: '100%'
      }}
      />
     
   ))}
  
  </Carousel>
    )};
    
    
   



export default BigCarousel

