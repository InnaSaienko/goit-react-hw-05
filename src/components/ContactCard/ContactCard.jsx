import React from 'react';
import s from "./ContactCard.module.css";

const ContactCard = ({user, deleteUser}) => {
    const {name, number} = user;
    console.log(user);
    return (
        <>
            <div className={s.card}>
                <div className={s.cardContent}>
                    <div className={s.cardName}>
                        <p>{name}</p>
                    </div>
                    <div className={s.cardNumber}>
                        <p>{number}</p>
                    </div>

                </div>
                <button className={s.button} onClick={() => deleteUser(user)}>
                    <a className="waves-effect waves-light btn-small">Delete</a>
                </button>
            </div>
        </>
    );
};

export default ContactCard;