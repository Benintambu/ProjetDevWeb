import React from 'react';
import '../styles/AdminStats.css';
import { Link } from 'react-router-dom';
import SideBarAdm from '../components/SideBarAdm';


function Dashboard() {
    return (
        <main className="mainAdmin_stats">
            <div className="dashboard">
                <header className="dashboard-header">
                    <h1>Statistiques</h1>
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
                                    <p>30/10/2024</p>
                                    <p>10:00</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
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
