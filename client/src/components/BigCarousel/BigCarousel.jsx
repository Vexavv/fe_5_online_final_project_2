import React, { useState } from 'react';
import { Link } from 'react-router-dom'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styles from './BigCarousel.module.scss'


const images = [
  {
    id: 1,
    src: 'https://res.cloudinary.com/dj9e1wjcg/image/upload/v1677945781/Final_project/Slider/slide12_z3dd1h.webp',
    alt: "chair",
    text: 'Wood Minimal Office Chair Extra 40% off now.',
    link: '/sale'
  },
  {
    id: 2,
    src: 'https://res.cloudinary.com/dj9e1wjcg/image/upload/v1677945781/Final_project/Slider/slide13_bvocpv.webp',
    alt: "Second Slide",
    text: 'Everyone’s Talking About Sweeper and funnel.',
    link: '/products/217261'
  },
  {
    id: 3,
    src: 'https://res.cloudinary.com/dj9e1wjcg/image/upload/v1677945781/Final_project/Slider/slide11_xc8vox.webp',
    alt: "Third Slide",
    text: 'Normann Copenhagen - Craft salt and pepper grinder',
    link:'/products'
  }, 
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


const BigCarousel = () => {

  return (
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlaySpeed={3000}
      centerMode={false}
      className="bigCarousel"
      containerClass="container"
      dotListClass
      draggable={false}
      focusOnSelect={false}
      infinite
      itemClass="bigCarouselItem"
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={true}
      removeArrowOnDeviceType={['mobile', 'tablet']}
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
            max: 600,
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
      sliderClass
      slidesToSlide={1}
      swipeable
    >
      {images.map(image => (
        <div key={image.id}>
        
          <div  className={styles.bigCarouselContent} >
            <p className={styles.bigCarouselPromo}
            >
              Quick parcel delivery, <span className={styles.bigCarouselSpan}>from $25</span>
            </p>
            <h2 className={styles.bigCarouselText}>
              {image.text}
            </h2>
            <Link  className={styles.bigCarouselLink} to={image.link}>
              Start Shopping
            </Link>

          </div>
          <img  src={image.src} alt={image.alt} className={styles.BigCarouselImage}
         
          />
        </div>
      ))}

    </Carousel>
  )
};






export default BigCarousel

