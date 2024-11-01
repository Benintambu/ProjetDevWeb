import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../styles/Login.css';
import logo from '../assets/img/logo Zeduc.png';

export default function Login() {
    const navigate = useNavigate();

    // Objet utilisateur avec les informations pour l'authentification
    const user = {
        name: "Isaac Ngangu",
        email: "isaac@gmail.com",
        password: "password123"
    };

    // États pour les champs email, mot de passe et l'erreur
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    // Fonction pour afficher ou masquer le mot de passe
    function showPassword() {
        const passwordInput = document.getElementById('password');
        const showbtn = document.querySelector('.show_log');

        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            showbtn.classList.add('bxs-hide');
        } else {
            passwordInput.type = "password";
            showbtn.classList.remove('bxs-hide');
        }
    }

    // Fonction de gestion de la soumission du formulaire
    function handleLogin(event) {
        event.preventDefault();

        // Vérification des informations d'identification
        if (email === user.email && password === user.password) {
            // Redirection vers la page d'accueil en cas de succès
            navigate("/home");
        } else {
            // Message d'erreur si les informations sont incorrectes
            setError("Email ou mot de passe incorrect");
        }
    }

    return (
        <div className="container">
            <div className="left_item">
                <div className="left_top">
                    <h1><Link to="/home"><img src={logo} alt="Logo" className="logo" /></Link></h1>
                </div>

                <form onSubmit={handleLogin}>
                    <h2>Connectez-vous</h2>
                    <p>Entrez vos identifiants pour avoir accès à votre historique</p>

                    <div className="input_container">
                        <div className="input_item">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <i className='bx bxs-envelope'></i>
                        </div>

                        <div className="input_item">
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Mot de passe"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <i className='bx bxs-show eye show_log' onClick={showPassword}></i>
                        </div>
                    </div>

                    {error && <p className="error">{error}</p>}

                    <div className="form_link">
                        <Link to="/forgot" className="forgot">Mot de passe oublié ?</Link>
                    </div>
                    <button type="submit" className="button">Valider</button>
                    <div className="sign"><p>Vous n'avez pas de compte ? <Link to="/signin">Inscrivez-vous</Link></p></div>
                </form>
            </div>

            <div className="right_item">
                <div className="right_content">
                    <h2>Connectez-vous</h2>
                    <p>Pour avoir accès à toutes nos fonctionnalités</p>
                </div>
            </div>
        </div>
    )
}
