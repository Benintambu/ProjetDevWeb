// components/Cart.js
import React, { useContext } from "react";
import { CartContext } from '../contexts/CartContext';
import '../styles/Cart.css';
import corbeille from '../assets/img/poubelle (1).png';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Cart = () => {
    const { cart, removeFromCart } = useContext(CartContext);

    return (
        <>
            <NavBar />
            <main className="main_cart">
                <div className="main_container">
                    <h2>Votre panier</h2>
                    <p>Les plats que vous ajoutez dans votre panier s’affichent ici</p>

                    <div className="cart_histo">
                        <p>Total des articles: <span>{cart.reduce((total, item) => total + item.quantity, 0)}</span></p>
                        <p>Prix total: <span>{cart.reduce((total, item) => total + item.prix * item.quantity, 0)}</span> Fc</p>
                        <button>Valider</button>
                    </div>

                    <div className="histo_container">
                        {cart.length > 0 ? (
                            cart.map(item => (
                                <div className="cart_item" key={item.id}>
                                    <div className="cartItm_left">
                                        <div className="cartItm_img">
                                            <img src={item.imgPlat} alt={item.nomPlat} />
                                        </div>
                                        <h3>{item.nomPlat}</h3>
                                        <p>{item.prix} Fc</p>
                                        <input type="number" value={item.quantity} readOnly />
                                    </div>
                                    <div className="cartItm_right">
                                        <img
                                            src={corbeille}
                                            alt="Supprimer"
                                            className="corbeille"
                                            onClick={() => removeFromCart(item.id)}
                                        />
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>Votre panier est vide</p>
                        )}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Cart;
