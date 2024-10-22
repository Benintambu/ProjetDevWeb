import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import '../styles/Histo.css'
import corbeille from '../assets/img/poubelle (1).png'


function Histo() {
    return (
        <>
            <header>
                <NavBar />
            </header>
            <HistoMain />
        </>
    );
}

const HistoMain = () => {
    return (
        <main className="main_histo">
            <div className="histo_container">
                <h4 className="histo_title">Historique</h4>

                <div className="histor_container">
                    <div className="item_histo">
                        <div className="itemHisto_left">
                            <h3>Nom du plat</h3>
                            <h4>Date</h4>
                            <h5>Prix</h5>
                            <h6>Nombre d'articles</h6>
                        </div>

                        <div className="itemHisto_right">
                            <img src={corbeille} alt="Supprimer" className="corbeille" />

                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Histo;