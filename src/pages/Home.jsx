import React from "react";
import { Link } from "react-router-dom";
import '../styles/Home.css';
import logo from '../assets/img/logo Zeduc.png';
import plat1 from '../assets/img/plat1.png';
import NavBar from "../components/NavBar";

function Home() {
    return (
        <>
            <header>
                <NavBar />
            </header>
            <Main />

        </>

    );
}

const Main = () => {
    return (
        <main className="main_container">
            <div className="hero">
                <div className="hero_container">
                    <div className="hero_item itm1">
                        <div className="item1_left">
                            <div className="itm1_top">
                                <h3>Menu du jour</h3>
                                <h2>Nom du plat</h2>
                                <button type="button">
                                    ajouter au panier
                                </button>
                            </div>

                            <div className="itm1_bot">
                                <p>4.4</p>
                                <span>Avis Positifs</span>
                            </div>
                        </div>

                        <div className="item1_right">
                            <img src={plat1} alt="Nourriture" className="hero_food" />
                        </div>
                    </div>
                    <div className="hero_item itm2"></div>
                    <Link className="hero_item itm3" to='/menu'>voir tous les plats</Link>
                </div>
            </div>
        </main>
    )
}

export default Home;