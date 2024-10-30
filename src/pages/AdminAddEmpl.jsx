import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import '../styles/AdminAddEmpl.css'
import SideBarAdm from "../components/SideBarAdm";
import admiImg from '../assets/img/add_img.png'


export default function AdminAddEmpl() {
    return (
        <div className="add_empl">
            <SideBarAdm />
            <AddEmpl />
        </div>
    )
}

function AddEmpl() {
    const profilePicRef = useRef(null);
    const inputProfilRef = useRef(null);

    useEffect(() => {
        const inputProfil = inputProfilRef.current;
        const profilePic = profilePicRef.current;

        if (inputProfil) {
            inputProfil.onchange = function () {
                profilePic.src = URL.createObjectURL(inputProfil.files[0]);
            };
        }

        return () => {
            if (inputProfil) {
                inputProfil.onchange = null; // Nettoie l'événement
            }
        };
    }, []);

    return (
        <main className="mainAdd_empl">
            <div className="addEmpl_cont">
                <div className="addEmpl_left">
                    <h3>Ajouter un employé</h3>

                    <form action="">
                        <div className="input_empl">
                            <label htmlFor="prenom">Prénom</label>
                            <input type="text" id="prenom" placeholder="Jacques" name="prenom" />
                        </div>

                        <div className="input_empl">
                            <label htmlFor="prenom">Nom</label>
                            <input type="text" id="prenom" placeholder="Batra" name="nom" />
                        </div>

                        <div className="input_empl">
                            <label htmlFor="prenom">Date de naissance</label>
                            <input type="date" id="birth_empl" />
                        </div>

                        <div className="input_empl">
                            <div className="input_choice">
                                <label htmlFor="male_empl">M</label>
                                <input type="radio" id="male_empl" name='sexe_empl' />
                            </div>

                            <div className="input_choice">
                                <label htmlFor="female_empl">F</label>
                                <input type="radio" id="female_empl" name='sexe_empl' />
                            </div>
                        </div>

                        <div className="input_empl">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="batra@gmail.com" />
                        </div>

                        <div className="input_empl">
                            <label htmlFor="prenom">Téléphone</label>
                            <input type="phone" id="phone" placeholder="0847008939" />
                        </div>

                        <div className="input_empl">
                            <label htmlFor="prenom">Mot de passe</label>
                            <input type="password" id="password" placeholder="1234ABCD" />
                        </div>

                        <button type="submit">Valider</button>
                    </form>
                </div>

                <div className="addEmpl_right">
                    <div className="addEmplR_img">
                        <img src={admiImg} className="add_img" ref={profilePicRef} />
                    </div>
                    <input type="file" id="add_img" style={{ display: 'none' }} ref={inputProfilRef} />
                    <label htmlFor="add_img" id="add_image">Ajouter une photo</label>
                </div>
            </div>
        </main>
    )
}