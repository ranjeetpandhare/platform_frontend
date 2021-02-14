import React from 'react'
import { Facebook, Github, Linkedin } from 'react-bootstrap-icons';


const Footer = () => {
    const footerstyle = {
        backgroundColor: "black",
        color: "white",
        minHeight: "200px"
    }

    return (
        <div style={footerstyle} >
            <span><h5>Copyright @ 2021 Ranjeet .All Rights Reserved</h5></span>
            <a href="https://www.facebook.com/ranjeet.pandhare" target="_blank"><Facebook color="white" size={50} /></a>&nbsp; &nbsp;
            <a href="https://www.linkedin.com/in/pandhare-ranjeet-3b6850a5/" target="_blank"><Linkedin color="white" size={50} /></a>&nbsp; &nbsp;
            <a href="https://github.com/ranjeetpandhare" target="_blank"><Github color="white" size={50} /></a>&nbsp; &nbsp;
        </div >
    )
}

export default Footer
