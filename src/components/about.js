import React from 'react'
import './styles/about.css'

export default function about() {
    return (
        <div className='parallax1' id='about'>
                <div 
                className='name'
                    data-aos="fade-right"
                    data-aos-offset="200"
                    data-aos-delay="300"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out">
  
                    NAME - VARUN SHARMA
                </div>
                <div className='age'
                 data-aos="fade-right"
                 data-aos-offset="200"
                 data-aos-delay="300"
                 data-aos-duration="1000"
                 data-aos-easing="ease-in-out">
                    AGE - 19
                </div>
                <div className='clg'
                 data-aos="fade-left"
                 data-aos-offset="200"
                 data-aos-delay="300"
                 data-aos-duration="1000"
                 data-aos-easing="ease-in-out">
                    COLLEGE - NSUT(MAIN CAMPUS)
                </div>
                <div className='scl'
                 data-aos="fade-left"
                 data-aos-offset="200"
                 data-aos-delay="300"
                 data-aos-duration="1000"
                 data-aos-easing="ease-in-out">
                    SCHOOL - D.P.S. DWARKA
                </div>
  
        </div>
    )
}
