import React from "react";
import { Link } from "react-router-dom";
import '../styles/Profil.css';
import profil from '../assets/img/Profil.jpg';
import plate from '../assets/img/plat1.png'
import NavBar from "../components/NavBar";

function Profil() {
    return (
        <>
            <div className="container_profil">
                <header>
                    <NavBar />
                </header>
                <MainProfil />
            </div>

        </>
    );
}

const MainProfil = () => {
    return (
        <main className="main_profil">
            <div className="mainProfil_cont">
                <div className="mainProfil_left">
                    <div className="mainProfil_img">
                        <img src={profil} alt="Profile" />
                    </div>

                    <div className="mainProfil_text">
                        <h2>Isaac Ngangu</h2>
                        <p>100 Points de fidélité</p>
                        <Link to='/'>Modifier le profil</Link>
                    </div>
                </div>

                <div className="mainProfil_right">
                    <h4>
                        <i class='bx bxs-envelope profil_ico' ></i>
                        <p>isacc@gmail.com</p>
                    </h4>

                    <h4>
                        <i class='bx bxs-map profil_ico' ></i>
                        <p>Adresse</p>
                    </h4>

                    <h4>
                        <i class='bx bxs-phone profil_ico' ></i>
                        <p>+243 847008939</p>
                    </h4>
                </div>
            </div>
        </main>
    );
}

export default Profil;