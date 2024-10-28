import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import '../styles/ModifProfil.css';
import user from '../assets/img/utilisateur.png'

function ModifProfil() {
    return (
        <div className="modif_profil">
            <header>
                <NavBar />
            </header>
            <MainProfil />

        </div>
    );
}

const MainProfil = () => {
    return (
        <main className="main_modif">
            <div className="modifProfil_cont">
                <div className="modif_left">
                    <div className="profil_tof">
                        <img src={user} alt="" />
                    </div>

                    <input type="file" name="file" id="file" placeholder="file" />
                    <label htmlFor="file">Choisir une photo</label>
                </div>

                <div className="modif_right">
                    <h3>Modifier vos informations</h3>
                    <form action="/profil">
                        <input type="text" name="prénom" id="prénom" placeholder="prénom" />
                        <input type="text" name="nom" id="nom" placeholder="nom" />
                        <input type="email" id="email" name="email" placeholder="email" />
                        <input type="adresse" id="adresse" name="adresse" placeholder="adresse" />
                        <input type="tel" name="tel" id="tel" placeholder="téléphone" />
                        <button type="submit">Valider</button>
                    </form>
                </div>
            </div>


        </main>
    )
}

export default ModifProfil;
<i class='bx bxs-camera' ></i>