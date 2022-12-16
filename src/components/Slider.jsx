import { ArrowBackOutlined, ArrowForwardOutlined } from '@mui/icons-material';
import React, {useState } from  'react';
import { slides } from '../data';

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if(direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 3)
        } else {
            setSlideIndex(slideIndex < 3 ? slideIndex + 1 : 0)
        }
    }
    return (
        <div className="slider">
            <div className="arrow"  onClick={() => handleClick("left")}>
               <ArrowBackOutlined />
            </div>
           <div className="wrapper" style={{
            transform: `translateX(${slideIndex * -100}vw)`
           }}>
            {
                slides.map(slide => {
                    return (
                            <div className="slide" key={slide.id}>
                               <div className="image-container">
                                   <img src={slide.img} alt="" />
                               </div>
                               <div className="info">
                                   <h1>{slide.title}</h1>
                                   <p>
                                       {slide.desc}
                                   </p>
                                   <a href={slide.link} className='btn' role='button'>Shop Now</a>
                               </div>
                           </div>
                    )
                })
            }
           </div>
            <div className="arrow" onClick={() => handleClick("right")}>
                <ArrowForwardOutlined />
            </div>
        </div>
    );
}
export default Slider;