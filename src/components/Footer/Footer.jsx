import React from "react";
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-logo">Mi Logo</div>
            <div className="footer-links">
                <a href="#about">Acerca de</a>
                <a href="#privacy">Privacidad</a>
            </div>
        </footer>
    );
};

export default Footer;
