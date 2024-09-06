import React from "react";
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">Mi Logo</div>
            <nav className="menu">
                <ul>
                    <li><a href="#home">Inicio</a></li>
                    <li><a href="#services">Servicios</a></li>
                    <li><a href="#contact">Contacto</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
