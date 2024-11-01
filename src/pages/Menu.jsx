// components/Menu.js
import React, { useContext, useState } from "react";
import { CartContext } from '../contexts/CartContext';
import image1 from '../assets/img/grilled-steak-fillet-with-fresh-vegetable-salad-generated-by-ai.jpg';
import star from '../assets/img/etoile.png';
import '../styles/Menu.css';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const plat = [
    { id: 1, nomPlat: "Pondu", prix: 5000, note: 4.5, imgPlat: image1 },
    { id: 2, nomPlat: "Fufu", prix: 4000, note: 4.7, imgPlat: image1 },
    { id: 3, nomPlat: "Poisson salé", prix: 6000, note: 4.8, imgPlat: image1 },
    { id: 4, nomPlat: "Makayabu", prix: 3500, note: 4.2, imgPlat: image1 },
    { id: 5, nomPlat: "Fumbwa", prix: 5500, note: 4.4, imgPlat: image1 },
    { id: 6, nomPlat: "Pilchards", prix: 3000, note: 4.1, imgPlat: image1 },
];

const Menu = () => {
    const { addToCart } = useContext(CartContext);
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (event) => {
        setSearchTerm(event.target.value.toLowerCase());
    };

    const filteredPlats = plat.filter(plate =>
        plate.nomPlat.toLowerCase().includes(searchTerm)
    );

    const menuPlat = filteredPlats.map(plate => (
        <div className="cards_item" key={plate.id}>
            <div className="cards_top">
                <h3>{plate.nomPlat}</h3>
            </div>
            <img src={plate.imgPlat} className="cards_img" alt={plate.nomPlat} />
            <div className="cart_opa"></div>
            <div className="cards_bot">
                <div className="cardsBot_left">
                    <p>{plate.prix} Fc</p>
                    <p><img src={star} className="star" alt="Étoile" /> {plate.note}</p>
                    <button onClick={() => addToCart(plate)}>Ajouter au panier</button>
                </div>
                <div className="cardsBot_right">
                    <button><i className='bx bxs-heart'></i></button>
                </div>
            </div>
        </div>
    ));

    return (
        <>
            <NavBar />
            <main className="main_menu">
                <div className="mainMenu_container">
                    <div className="main_top">
                        <h4>Rechercher un plat</h4>
                        <p>Rechercher un plat en tapant ses mots clés</p>
                        <form>
                            <input
                                type="search"
                                placeholder="Pondu, fufu, poisson salé"
                                value={searchTerm}
                                onChange={handleSearch}
                            />
                            <i className='bx bx-search loupe'></i>
                        </form>
                    </div>
                    <div className="main_cards">
                        {menuPlat.length > 0 ? menuPlat : <p>Aucun plat trouvé</p>}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Menu;
