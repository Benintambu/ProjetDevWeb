import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from '../assets/img/logo Zeduc.png';
import '../styles/AdminLogin.css';

function AdminLogin() {
    const navigate = useNavigate();

    // Objet avec les informations de connexion administrateur
    const admin = {
        email: "admin@example.com",
        password: "1234ABCD"
    };

    // États pour les champs email, mot de passe et les erreurs
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    // Fonction de gestion de la soumission du formulaire
    const handleAdminLogin = (event) => {
        event.preventDefault();

        // Vérification des informations d'authentification
        if (email === admin.email && password === admin.password) {
            navigate("/admin_menu");  // Redirection en cas de succès
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
                        <h3>Connexion espace <br />administrateur</h3>
                    </div>

                    <form onSubmit={handleAdminLogin} className="admin_form">
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

                <div className="adminLogin_right"></div>
            </div>
        </div>
    );
}

export default AdminLogin;
