import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import '../styles/Parr.css';
import profilTwo from '../assets/img/Profil2.jpg'
import profilThree from '../assets/img/Profil3.jpg'


function Parr() {
    return (
        <>
            <NavBar />
            <MainParr />
        </>
    );
}

const MainParr = () => {
    return (
        <main className="main_parr">
            <div className="mainParr_container">
                <div className="parr_left">
                    <div className="parr_link">
                        <h5>Obtenir un lien d'affiliation</h5>
                        <button className="parrLink_link">Copier le lien</button>
                    </div>
                </div>

                <div className="parr_right">
                    <div className="parr_item">
                        <div className="parr_img">
                            <img src={profilTwo} alt="" />
                        </div>
                        <h4>Béni Ntambu</h4>
                    </div>

                    <div className="parr_item">
                        <div className="parr_img">
                            <img src={profilThree} alt="" />
                        </div>
                        <h4>Evodie Santimi</h4>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Parr;