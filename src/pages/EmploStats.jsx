import React from "react";
import SideBarEmpl from "../components/SideBarEmpl";
import '../styles/EmploStats.css';

export default function EmploStats() {
    return (
        <div className="emplo_stats">
            <SideBarEmpl />
            <EmploStatsMain />
        </div>
    )
}

function EmploStatsMain() {
    let statsWeeks = (statsEmpl.map(statEmpl =>
        <div className="stats_emplo">
            <p id={statEmpl.id}>semaine {statEmpl.week}</p>
            <p id={statEmpl.id}>Articles achetés {statEmpl.paid}</p>
            <p id={statEmpl.id}>Total {statEmpl.total}</p>
        </div>
    ));

    return (
        <main className="emplStat_main">
            <div className="emplStats_cont">
                <h3>Statistiques hebdo</h3>
                {statsWeeks}
            </div>
        </main>
    );
}

let statsEmpl = [
    { id: 1, week: 1, paid: 30, total: 45 },
    { id: 2, week: 2, paid: 40, total: 47 },
]