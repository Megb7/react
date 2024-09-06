import React from "react";
import './Main.css';

const TitleComponent = ({ title }) => {
    return <h1>{title}</h1>;
};

const Main = () => {
    return (
        <main className="main">
            <TitleComponent title="Bienvenidos a mi página" />
            <p>Esta es la sección principal de la página.</p>
        </main>
    );
};

export default Main;
