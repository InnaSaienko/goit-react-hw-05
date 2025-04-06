import React from 'react';
import Contact from "../Contact/Contact.jsx";
import s from "./ContactList.module.css"

function ContactList({contacts, deleteUser}) {
    return (
        <div className={s.list}>
            {contacts.map((contact, index) => (
                <Contact key={index} contact={contact} deleteUser={deleteUser}/>
            ))}
        </div>
    );
}

export default ContactList;