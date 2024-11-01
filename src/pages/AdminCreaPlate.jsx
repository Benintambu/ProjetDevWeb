import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import SideBarAdm from "../components/SideBarAdm";
import '../styles/AdminCreaPlate.css';
import admiImg from '../assets/img/add_img.png'

export default function AdminPlate() {
    return (
        <div className="admnPlate_cont">
            <SideBarAdm />
            <AdmCreaPlateMain />
        </div>
    );
}

function AdmCreaPlateMain() {
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
        <main className="admPlate_main">
            <div className="admPlate_container">
                <h3>Ajouter un plat</h3>
                <form action="/admin_menu">
                    <div className="admForm_right">
                        <input type="file" name="photo" id="photo" ref={inputProfilRef} />
                        <label htmlFor="photo" >
                            Ajouter une photo
                        </label>

                        <div className="admniRight_img">
                            <img src={admiImg} alt="Image" id="profil_pic" className="profil_pic" ref={profilePicRef} />
                        </div>
                    </div>

                    <div className="admForm_left">
                        <input type="text" name="name_plat" id="name_plat" className="admForm_item" placeholder="Nom" />
                        <input type="number" name="price" id="price" className="admForm_item" placeholder="Prix" />
                        <input type="number" name="quantity" id="quantity" className="admForm_item" placeholder="Qté" />
                        <input type="text" name="descr" id="descr" className="admForm_item" placeholder="Description" />
                        <button type="submit" className="admForm_item">Valider</button>
                        <Link to='/admin_menu' className="admForm_item form_a">Annuler</Link>
                    </div>
                </form>
            </div>
        </main>
    )
}