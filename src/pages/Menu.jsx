import React from "react";
import { Link } from "react-router-dom";
import '../styles/Menu.css';
import NavBar from "../components/NavBar";
import loupe from '../assets/img/chercher.png'
import plat1 from '../assets/img/top-view-table-full-delicious-food-composition.jpg';
import plate from '../assets/img/plat4.png'
import cart from '../assets/img/panier.png'
import Footer from "../components/Footer";


function Menu() {
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
        <main className="main_menu">
            <div className="mainMenu_container">
                <div className="main_top">
                    <h4>Rechercher un plat</h4>
                    <p>Rechercher un plat en tapant ses mots clés</p>
                    <form action="">
                        <input type="search" placeholder="Pondu, fufu, poisson salé" id="search" name="search" />
                        <i class='bx bx-search loupe' ></i>
                    </form>
                </div>

                <div className="menu_jour">
                    <div className="menuDuJour_content">
                        <h3>Menu du jour</h3>
                        <h2>Nom du plat</h2>
                        <h5>Prix: <span></span></h5>
                        <button type="button">
                            ajouter au panier
                        </button>
                    </div>

                    <div className="menu_opacity"></div>

                    <img src={plat1} alt="" />
                </div>

                <div className="main_cards">
                    <div className="cards_item">
                        <div className="card_top">
                            <img src={plate} alt="Plate" />
                        </div>

                        <div className="card_bot">
                            <h2>Nom du plat</h2>
                            <p>prix: <span>1000</span>Fc</p>
                            <div className="cardBot_bot">
                                <div className="cardBot_left">
                                    <p>4.5 <span><i class='bx bx-star'></i></span></p>
                                </div>

                                <div className="cardBot_right">
                                    <i class='bx bx-cart cart' ></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="cards_item">
                        <div className="card_top">
                            <img src={plate} alt="Plate" />
                        </div>

                        <div className="card_bot">
                            <h2>Nom du plat</h2>
                            <p>prix: <span>1000</span>Fc</p>
                            <div className="cardBot_bot">
                                <div className="cardBot_left">
                                    <p>4.5 <span><i class='bx bx-star'></i></span></p>
                                </div>

                                <div className="cardBot_right">
                                    <i class='bx bx-cart cart' ></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="cards_item">
                        <div className="card_top">
                            <img src={plate} alt="Plate" />
                        </div>

                        <div className="card_bot">
                            <h2>Nom du plat</h2>
                            <p>prix: <span>1000</span>Fc</p>
                            <div className="cardBot_bot">
                                <div className="cardBot_left">
                                    <p>4.5 <span><i class='bx bx-star'></i></span></p>
                                </div>

                                <div className="cardBot_right">
                                    <i class='bx bx-cart cart' ></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="cards_item">
                        <div className="card_top">
                            <img src={plate} alt="Plate" />
                        </div>

                        <div className="card_bot">
                            <h2>Nom du plat</h2>
                            <p>prix: <span>1000</span>Fc</p>
                            <div className="cardBot_bot">
                                <div className="cardBot_left">
                                    <p>4.5 <span><i class='bx bx-star'></i></span></p>
                                </div>

                                <div className="cardBot_right">
                                    <i class='bx bx-cart cart' ></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="cards_item">
                        <div className="card_top">
                            <img src={plate} alt="Plate" />
                        </div>

                        <div className="card_bot">
                            <h2>Nom du plat</h2>
                            <p>prix: <span>1000</span>Fc</p>
                            <div className="cardBot_bot">
                                <div className="cardBot_left">
                                    <p>4.5 <span><i class='bx bx-star'></i></span></p>
                                </div>

                                <div className="cardBot_right">
                                    <i class='bx bx-cart cart' ></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="cards_item">
                        <div className="card_top">
                            <img src={plate} alt="Plate" />
                        </div>

                        <div className="card_bot">
                            <h2>Nom du plat</h2>
                            <p>prix: <span>1000</span>Fc</p>
                            <div className="cardBot_bot">
                                <div className="cardBot_left">
                                    <p>4.5 <span><i class='bx bx-star'></i></span></p>
                                </div>

                                <div className="cardBot_right">
                                    <i class='bx bx-cart cart' ></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="cards_item">
                        <div className="card_top">
                            <img src={plate} alt="Plate" />
                        </div>

                        <div className="card_bot">
                            <h2>Nom du plat</h2>
                            <p>prix: <span>1000</span>Fc</p>
                            <div className="cardBot_bot">
                                <div className="cardBot_left">
                                    <p>4.5 <span><i class='bx bx-star'></i></span></p>
                                </div>

                                <div className="cardBot_right">
                                    <i class='bx bx-cart cart' ></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="cards_item">
                        <div className="card_top">
                            <img src={plate} alt="Plate" />
                        </div>

                        <div className="card_bot">
                            <h2>Nom du plat</h2>
                            <p>prix: <span>1000</span>Fc</p>
                            <div className="cardBot_bot">
                                <div className="cardBot-left">
                                    <p>4.5 <span><i class='bx bx-star'></i></span></p>
                                </div>

                                <div className="cardBot_right">
                                    <i class='bx bx-cart cart' ></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <button type="button" className="more_btn">voir plus</button>
            </div>
        </main>
    )
}



export default Menu;