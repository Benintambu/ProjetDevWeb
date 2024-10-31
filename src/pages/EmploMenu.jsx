import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import '../styles/AdminMenu.css'
import '../styles/EmploMenu.css'
import SideBarAdm from "../components/SideBarEmpl";
import image1 from '../assets/img/grilled-steak-fillet-with-fresh-vegetable-salad-generated-by-ai.jpg';
import image2 from '../assets/img/img_promo.jpg';

function EmploMenu() {
    const [emptyQuantity, setQuantity] = useState(false);
    const container = useRef(null);
    const animationRef = useRef(null);

    useEffect(() => {
        // Initialisation de l'animation GSAP avec pause au début
        animationRef.current = gsap.to('.upDate_form', {
            display: "block",
            duration: 0.5,
            paused: true, // L'animation est mise en pause au début
        });
    }, []);

    // Fonction pour jouer l'animation
    var playAnimation = () => {
        animationRef.current.play();
    };

    const reverseAnimation = () => {
        animationRef.current.reverse();
    };

    function EmplCont() {
        const plats = (plates.map(plat =>
            <div className="adMenu_plates">
                <div className="admMenu_img" key={plat.id}>
                    <img src={plat.image} alt="" key={plat.id} />
                </div>

                <div className="adMenu_name">
                    <h4 key={plat.id}>{plat.name}</h4>
                    <h5>Prix: {plat.price}</h5>
                    <div className="adMenu_but">
                        <button className="adMenu_button emplAdd_menu" onClick={playAnimation}>Modifier</button>
                    </div>
                </div>
            </div>
        ))

        return (
            <main className="adm_menu">
                <div className="admMenu_container">
                    <h3>Menu du jour</h3>
                    <div className="plate_cont">{plats}</div>
                </div>
            </main>
        );
    }



    return (
        <div className="adminMenu_cont">
            <SideBarAdm />
            <div className="update_menu">
                <EmplCont />
                <form action="/emplo_menu" className="upDate_form">
                    <div className="upd_close">
                        <i onClick={reverseAnimation} class='bx bx-x side_close'></i>
                    </div>

                    <UpdatePlate checked={emptyQuantity} onCheck={setQuantity} />
                    <input type="number" name="quantite" id="quantite" placeholder="Quantité" disabled={emptyQuantity} />
                    <button type="submit">Valider</button>
                </form>

            </div>
        </div>
    )
}

function UpdatePlate({ checked, onCheck }) {
    return (
        <div className="update_menu">
            <label>
                <input
                    type="checkbox"
                    id="checkbox"
                    onChange={(e) => onCheck(e.target.checked)}
                    checked={checked}
                />
                Epuisé
            </label>
        </div>
    )
}

const plates = [
    { id: 1, name: "Pondu", price: 5000, description: "Plat de pondu", image: image1 },
    { id: 2, name: "Madesu", price: 7000, description: "Plat de Madesu", image: image2 },
]

export default EmploMenu;