import React from "react";
import { Link } from "react-router-dom";
import '../styles/Cart.css';
import logo from '../assets/img/logo Zeduc.png';
import NavBar from "../components/NavBar";
import plate from '../assets/img/plat1.png'
import corbeille from '../assets/img/poubelle (1).png'
import flecheWhite from '../assets/img/fleche_wht.png';
import flecheBlack from '../assets/img/fleche_black.png';
import Footer from "../components/Footer";
function Cart() {
    return (
        <>
            <header>
                <NavBar />
            </header>
            <CartMain />
            <Footer />
        </>
    );
}

const CartMain = () => {
    return (
        <main className="main_cart">
            <div className="main_container">
                <h2>Votre panier</h2>
                <p>Les plats que vous ajoutez dans votre panier s’affichent ici</p>

                <div className="cart_histo">
                    <p>Total des articles: <span>4</span></p>
                    <p>Prix total: <span>40000</span>Fc</p>
                </div>

                <div className="histo_container">
                    <div className="histo_item">
                        <div className="histo_left">
                            <div className="histo_img">
                                <img src={plate} className="plate" />
                            </div>

                            <div className="left_content">
                                <p>Plat <span>1</span></p>
                                <h3>Nom du plat</h3>
                                <p>Prix: <span>5000</span>Fc</p>
                            </div>
                        </div>

                        <div className="histo_right">
                            <div className="histoRight_top">
                                <img src={corbeille} alt="Supprimer" className="corbeille" />
                            </div>
                            <div className="histoRight_bot">
                                <p>Quantité:</p>
                                <div className="bot_right">
                                    <button id="plus">Plus</button>
                                    <button id="minus">Moins</button>
                                    <div className="botRight_left">
                                        <label htmlFor="plus"><img src={flecheBlack} className="fleche flc_top" /></label>
                                        <label htmlFor="plus"><img src={flecheWhite} className="fleche flc_bot" /></label>
                                    </div>
                                    <p>1</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="histo_item">
                        <div className="histo_left">
                            <div className="histo_img">
                                <img src={plate} className="plate" />
                            </div>

                            <div className="left_content">
                                <p>Plat <span>1</span></p>
                                <h3>Nom du plat</h3>
                                <p>Prix: <span>5000</span>Fc</p>
                            </div>
                        </div>

                        <div className="histo_right">
                            <div className="histoRight_top">
                                <img src={corbeille} alt="Supprimer" className="corbeille" />
                            </div>
                            <div className="histoRight_bot">
                                <p>Quantité:</p>
                                <div className="bot_right">
                                    <button id="plus">Plus</button>
                                    <button id="minus">Moins</button>
                                    <div className="botRight_left">
                                        <label htmlFor="plus"><img src={flecheBlack} className="fleche flc_top" /></label>
                                        <label htmlFor="plus"><img src={flecheWhite} className="fleche flc_bot" /></label>
                                    </div>
                                    <p>1</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="histo_item">
                        <div className="histo_left">
                            <div className="histo_img">
                                <img src={plate} className="plate" />
                            </div>

                            <div className="left_content">
                                <p>Plat <span>1</span></p>
                                <h3>Nom du plat</h3>
                                <p>Prix: <span>5000</span>Fc</p>
                            </div>
                        </div>

                        <div className="histo_right">
                            <div className="histoRight_top">
                                <img src={corbeille} alt="Supprimer" className="corbeille" />
                            </div>
                            <div className="histoRight_bot">
                                <p>Quantité:</p>
                                <div className="bot_right">
                                    <button id="plus">Plus</button>
                                    <button id="minus">Moins</button>
                                    <div className="botRight_left">
                                        <label htmlFor="plus"><img src={flecheBlack} className="fleche flc_top" /></label>
                                        <label htmlFor="plus"><img src={flecheWhite} className="fleche flc_bot" /></label>
                                    </div>
                                    <p>1</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="histo_item">
                        <div className="histo_left">
                            <div className="histo_img">
                                <img src={plate} className="plate" />
                            </div>

                            <div className="left_content">
                                <p>Plat <span>1</span></p>
                                <h3>Nom du plat</h3>
                                <p>Prix: <span>5000</span>Fc</p>
                            </div>
                        </div>

                        <div className="histo_right">
                            <div className="histoRight_top">
                                <img src={corbeille} alt="Supprimer" className="corbeille" />
                            </div>
                            <div className="histoRight_bot">
                                <p>Quantité:</p>
                                <div className="bot_right">
                                    <button id="plus">Plus</button>
                                    <button id="minus">Moins</button>
                                    <div className="botRight_left">
                                        <label htmlFor="plus"><img src={flecheBlack} className="fleche flc_top" /></label>
                                        <label htmlFor="plus"><img src={flecheWhite} className="fleche flc_bot" /></label>
                                    </div>
                                    <p>1</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Cart;