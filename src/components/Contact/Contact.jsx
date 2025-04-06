import React from 'react';
import s from "./Contact.module.css";

const Contact = ({contact, deleteUser}) => {
    const {name, number} = contact;
    console.log(contact);
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
                <button className={s.button} onClick={() => deleteUser(contact.id)}>
                    <a className="waves-effect waves-light btn-small">Delete</a>
                </button>
            </div>
        </>
    );
};

export default Contact;