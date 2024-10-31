import React from "react";
import SideBarGer from "../components/SideBarGer";
import '../styles/EmploStats.css';

export default function GerComm() {
    return (
        <div className="emplo_stats">
            <SideBarGer />
            <GerCommMain />
        </div>
    )
}

function GerCommMain() {
    let gerCommandes = (gerCom.map(commGer =>
        <div className="stats_emplo">
            <p id={commGer.id}>Commande</p>
            <p id={commGer.id}>semaine {commGer.week}</p>
            <p id={commGer.id}>Total articles {commGer.paid}</p>
            <p id={commGer.id}>Prix Total: {commGer.date}</p>
            <p id={commGer.id}>Prix Total: {commGer.hour}</p>
        </div>
    ));

    return (
        <main className="emplStat_main">
            <div className="emplStats_cont">
                <h3>Commandes</h3>
                {gerCommandes}
            </div>
        </main>
    );
}

let gerCom = [
    { id: 1, week: 1, paid: 30, total: 45, date: '31.10.2024', hour: '10:00' },
    { id: 2, week: 2, paid: 40, total: 47, date: '31.10.2024', hour: '20:07' },
]