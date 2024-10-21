import React from "react";
import { Link } from "react-router-dom";
import '../styles/Event.css';
import logo from '../assets/img/logo Zeduc.png';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import game from '../assets/img/Squid game invitation card.jpeg'
import morpion from '../assets/img/morpion.jpeg'
import quiz from '../assets/img/Question.jpeg'

function Event() {
    return (
        <>
            <header>
                <NavBar />
            </header>
            <MainEvent />
            <Footer />

        </>
    );
}

const MainEvent = () => {
    return (
        <main className="main_event">
            <div className="mainEvent_container main_container">
                <div className="event_top">
                    <div className="eventTop_left">
                        <h2>Jouez à des jeux</h2>
                        <p>Participez à des jeux et gagner des prix</p>
                    </div>

                    <div className="eventTop_right">
                        <img src={game} alt="" />
                    </div>
                </div>

                <div className="event_middle">
                    <div className="eventMiddle_left">
                        <h3>Morpion</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum rerum cumque delectus, officia dolorum atque?</p>
                        <Link to=''>Jouer</Link>
                    </div>

                    <div className="eventMiddle_right">
                        <img src={morpion} alt="" />
                    </div>
                </div>

                <div className="event_bot">
                    <div className="eventBot_left">
                        <img src={quiz} alt="" />
                    </div>

                    <div className="eventBot_right">
                        <h3>Quiz</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum rerum cumque delectus, officia dolorum atque?</p>
                        <Link to=''>Jouer</Link>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Event;