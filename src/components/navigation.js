import React from 'react'
import { Link } from "react-scroll";
import './styles/navigation.css'
function navigation() {
    return (
        <div className='navbar'>
            <Link
                 className='home' 
                activeClass="active"
                to="homepage"
                spy={true}
                smooth={true}
                offset={0}
                duration={1000}
                style={{width:'300px',textAlign:'center'}}>
                 HOME</Link>
            <Link
                className='about' activeClass="active" to="about" spy={true} smooth={true} offset={0} duration={1000}
                style={{width:'300px',textAlign:'center'}}>
                ABOUT ME</Link>
            <Link
                className='resume' activeClass="active" to="resume" spy={true} smooth={true} offset={0} duration={1000}
                style={{width:'300px',textAlign:'center'}}>
                RESUME</Link>

            <Link
                className='projects' 
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={0}
                duration={1000}
                style={{width:'300px',textAlign:'center'}}
            >PROJECTS !</Link>
            <Link
                className='contact' 
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={1000}
                style={{width:'300px',textAlign:'center'}}

            >CONTACT</Link>
        </div>
    )
}

export default navigation
