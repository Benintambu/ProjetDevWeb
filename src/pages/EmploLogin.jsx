import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from '../assets/img/logo Zeduc.png';
import '../styles/EmploLogin.css';
import back from '../assets/img/empl.jpg';

function EmploLogin() {
    const navigate = useNavigate();

    // Objets contenant les informations d'authentification pour chaque profil
    const profiles = {
        employee: {
            email: "employe@example.com",
            password: "1234EMP",
            redirectTo: "/emplo_menu"
        },
        manager: {
            email: "gerant@example.com",
            password: "1234GER",
            redirectTo: "/ger_comm"
        }
    };

    // États pour les champs email, mot de passe et les erreurs
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    // Fonction de gestion de la soumission du formulaire
    const handleLogin = (event) => {
        event.preventDefault();

        // Vérification des identifiants et redirection en fonction du profil
        if (email === profiles.employee.email && password === profiles.employee.password) {
            navigate(profiles.employee.redirectTo);
        } else if (email === profiles.manager.email && password === profiles.manager.password) {
            navigate(profiles.manager.redirectTo);
        } else {
            setError("Email ou mot de passe incorrect");  // Message d'erreur
        }
    };

    return (
        <div className="adminLogin_container">
            <div className="adminLogin_content">
                <div className="adminLogin_left">
                    <div className="adminLeft_top">
                        <img src={logo} alt="Logo" className="logo" />
                        <h3>Connexion espace <br />Employé</h3>
                    </div>

                    <form onSubmit={handleLogin} className="admin_form">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="ntambu@gmail.com"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <label htmlFor="password">Mot de passe</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="1234ABCD"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <button type="submit">Se connecter</button>

                        {error && <p className="error_message">{error}</p>}
                    </form>
                </div>

                <div className="adminLogin_right emplLog_r" style={{ backgroundImage: `url(${back})` }}>
                    {/* Optionnel : ajouter un arrière-plan ou d'autres éléments */}
                </div>
            </div>
        </div>
    );
}

export default EmploLogin;
