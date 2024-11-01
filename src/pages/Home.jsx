import React from "react";
import { Link } from "react-router-dom";
import gsap from 'gsap'; // <-- import GSAP
import { useGSAP } from "@gsap/react";
import '../styles/Home.css';
import Footer from "../components/Footer";
import profil from '../assets/img/Profil.jpg'
import plat1 from '../assets/img/top-view-table-full-delicious-food-composition.jpg';
import NavBar from "../components/NavBar";
import quote from '../assets/img/citation.png'
import promo1 from '../assets/img/food.jpg'
import promo2 from '../assets/img/grilled-steak-fillet-with-fresh-vegetable-salad-generated-by-ai.jpg'
import star from '../assets/img/etoile.png'


function Home() {
    return (
        <>
            <header>
                <NavBar />
            </header>
            <Main />
            <Footer />
        </>
    );
}

let menu = [
    { id: 1, platNom: "Pondu", platDescrip: "fhikfshfhfsjopfj" },
    { id: 2, platNom: "Pondu", platDescrip: "fhikfshfhfsjopfj" },
    { id: 3, platNom: "Pondu", platDescrip: "fhikfshfhfsjopfj" },
    { id: 4, platNom: "Pondu", platDescrip: "fhikfshfhfsjopfj" },
    { id: 5, platNom: "Pondu", platDescrip: "fhikfshfhfsjopfj" },
]

let promo = [
    { id: 1, name: 'Pondu', prix: 5000, rate: 5.0 },
    { id: 1, name: 'Poulet', prix: 8000, rate: 4.1 },
]

const Main = () => {
    const menuPlates = (menu.map(menuPlat =>
        <p key={menuPlat.id}>{menuPlat.platNom}</p>
    ))

    const promoPlat = (promo.map(promoPlat =>
        <div className="prmo_item">
            <div className="promoItm_top">
                <h3 key={promoPlat.id}>{promoPlat.name}</h3>
            </div>

            <div className="promoItm_bot">
                <div className="promoItmBot_left">
                    <p key={promoPlat.id}>{promoPlat.prix} FC</p>
                    <p key={promoPlat.id}><img src={star} alt="" /> {promoPlat.rate}</p>
                </div>

                <div className="promoItmBot_left">
                    <button><i class='bx bxs-heart' ></i></button>
                </div>
            </div>
        </div>
    ))

    return (
        <main className="main_container">
            <div className="hero">
                <div className="hero_container">
                    <div className="hero_item itm1">
                        <div className="item1_left">
                            <div className="itm1_top">
                                <h3>Bienvenue sur</h3>
                                <h2>Zeduc Sp@ce</h2>
                                <Link to='/menu'>
                                    Voir le menu
                                </Link>
                            </div>


                        </div>

                        <img src={plat1} alt="Nourriture" className="hero_food" />

                        <div className="itm1_opacity"></div>
                    </div>

                    <div className="hero_item itm2">
                        <h3>Menu du jour</h3>

                        <div className="itm2_cont">{menuPlates}</div>
                    </div>
                    <Link className="hero_item itm3" to='/about'>A propos de nous</Link>
                </div>
            </div>

            {/* <div className="home_promo">
                <div className="homePromo_cont">
                    <div className="homePromo_top">
                        <h4>Prmotions</h4>
                        <p>Découvrez nos promotions et obtenez des réductions sur vos commandes</p>
                        <Link to='/promo'>Voir plus</Link>
                    </div>

                    <div className="homePromo_bot">
                        {promoPlat}
                    </div>
                </div>
            </div> */}

            <div className="promos">
                <div className="promos_content">
                    <h3>Evénements</h3>
                    <div className="promos_container">
                        <div className="item_promos promo1"></div>
                        <div className="item_promos promo2">
                            <div className="promo2_top"></div>
                            <div className="promo2_bot">
                                <p>Participez à des mini-jeux et tentez des gagner des prix ou des points supplémentaires.</p>
                                <div className="promo_link">
                                    <Link to='/event'>voir plus</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="temoig">
                <div className="temoig_container">
                    <div className="temoig_left">
                        <h3>Témoignages</h3>
                        <p>Témoignages d'un ancien client</p>
                    </div>

                    <div className="temoig_right">
                        <img src={quote} alt="Citation" className="quote" />
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, error alias! Ipsum necessitatibus</p>
                        <div className="temoig_person">
                            <div className="person">
                                <img src={profil} alt="Person" />
                            </div>
                            <h3>Isaac Ngangu</h3>
                        </div>

                    </div>
                </div>
            </div>
        </main>
    );
}

export default Home;