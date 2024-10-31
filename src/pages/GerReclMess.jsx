import React from "react";
import { Link } from "react-router-dom";
import '../styles/AdminReclMes.css';
import SideBarGer from "../components/SideBarGer";
import profil from '../assets/img/Profil3.jpg';


export default function GerReclMess() {
    return (
        <div className="admnRecl_mess">
            <SideBarGer />
            <main className="admMain_mess">
                <GerReclMain />
            </main>

        </div>
    );
}

{/* <i class='bx bx-chevron-left'></i>
 */}
function GerReclMain() {
    return (
        <div className="admin_mess">
            <div className="adMess_top">
                <Link to='/ger_recl'><i class='bx bx-chevron-left admiRec_ret'></i></Link>

                <div className="adMessTop_profil">
                    <div className="adMessTop_img">
                        <img src={user.userImg} alt="" />
                    </div>
                    <h2>{user.firstName} {user.lastName}</h2>
                </div>
            </div>

            <div className="adMess_mid">
                <span>{user.date}</span>
                <h3>{user.subject}</h3>
                <p>{user.message}</p>
            </div>

            <div className="adMess_bot">
                <Link>Répondre</Link>
            </div>
        </div>
    );
}

const user = {
    firstName: 'Evodie',
    lastName: 'Santimi',
    subject: 'Commande non reçue',
    message: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem error facilis, deleniti fugit quos aperiam eligendi harum pariatur. Atque repellat ea vitae consequuntur eum adipisci laudantium doloremque nobis alias sapiente aliquam, rerum minus unde. Dolore architecto, quas asperiores assumenda error ducimus debitis, eos rerum ipsum soluta cupiditate nihil temporibus. Est.',
    date: '29.10.204',
    userImg: profil,
}