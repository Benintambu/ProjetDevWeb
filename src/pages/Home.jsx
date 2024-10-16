import React from "react";
import { Link } from "react-router-dom";
import '../styles/Home.css';
import profil from '../assets/img/Profil.jpg'
import plat1 from '../assets/img/plat1.png';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import plat2 from '../assets/img/plat2.jpg';
import eventImg from '../assets/img/people.png';
import quote from '../assets/img/citation.png'

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
                    <div className="hero_item itm2">
                        <h3>Nom du plat</h3>

                        <div className="item2_mid">
                            <img src={plat2} alt="Plat 2" className="item2_img" />
                        </div>

                        <div className="item2_bot">
                            <p>4.3</p>
                            <span>avis positifs</span>
                        </div>
                    </div>
                    <Link className="hero_item itm3" to='/menu'>voir tous les plats</Link>
                </div>
            </div>

            <div className="promos">
                <div className="promos_content">
                    <h3>nos promotions</h3>
                    <div className="promos_container">
                        <div className="item_promos promo1"></div>
                        <div className="item_promos promo2">
                            <div className="promo2_top"></div>
                            <div className="promo2_bot">
                                <p>Découvrez nos différentes promotions afin d’obtenir des réductions sur tous vos achats journaliers.</p>
                                <div className="promo_link">
                                    <button type="button"><Link to=''>voir plus</Link></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="event">
                <div className="event_content">
                    <div className="event_container">
                        <div className="event_left">
                            <h3>Evénements</h3>
                            <p>Participez à des mini-jeux et tentez des gagner des prix ou des points supplémentaires. </p>
                            <Link to=''>en sovoir plus</Link>
                        </div>

                        <img src={eventImg} alt="Personnes" className="event_img" />
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
    )
}

export default Home;