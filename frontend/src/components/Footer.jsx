import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer className="bg-gray-200 text-center p-4 mt-8"> 
        <div className="social-icons mb-4">
          <a className="mr-4" href='#' target='_blank' rel='noopener noreferrer'><FaFacebook /></a>
          <a className="mr-4" href='#' target='_blank' rel='noopener noreferrer'><FaTwitter /></a>
          <a className="mr-4" href='#' target='_blank' rel='noopener noreferrer'><FaInstagram /></a>
        </div> 
            
        <div className="footer-links">  
          <a href='/about'>Sobre nosotros</a>
          <a href='/contact'>Contactanos</a>
          <a href='/privacy'>Politica de privacidad</a>
        </div>
      </footer>
    </>
  );
}
