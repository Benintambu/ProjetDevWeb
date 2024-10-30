import React from 'react';
import '../styles/AdminStats.css';
import { Link } from 'react-router-dom';
import SideBarAdm from '../components/SideBarAdm';

/* function Sidebar() {
    return (
        <div className="sidebar">
            <div className="logo">Direction</div>
            <button className="menu-item">Menu</button>
            <button className="menu-item selected">Promo</button>
            <button className="menu-item">Employés</button>
            <button className="menu-item">Stats</button>
            <button className="menu-item">Réclamations</button>
            <button className="menu-item">Déconnexion</button>
        </div>
    );
} */

function Dashboard() {
    return (
        <div className="dashboard">
            <header className="dashboard-header">
                <h1>Statistiques</h1>
                <div className="date">27 Nov. 2024</div>
            </header>
            <div className="dashboard-content">
                <div className="stats-section">
                    <h2>Ventes</h2>
                    <StatisticsCard sold={50} total={53} />
                </div>
                <div className="orders-section">
                    <h2>Commandes</h2>
                    <div className="order-list">
                        {[...Array(4)].map((_, index) => (
                            <div key={index} className="order-card">
                                <p>5 articles</p>
                                <p>Prix total : 30000 FC</p>
                                <p>10:00</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

function StatisticsCard({ sold, total }) {
    return (
        <div className="statistics-card">
            <div className="circle">
                <span>{sold}/{total}</span>
            </div>
            <div className="legend">
                <p>Vendus</p>
                <p>Total</p>
            </div>
        </div>
    );
}

function AdminStats() {
    return (
        <div className="AdminStats">
            <SideBarAdm />
            <Dashboard />
        </div>
    );
}

export default AdminStats;
