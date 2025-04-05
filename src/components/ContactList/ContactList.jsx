import React from 'react';
import ContactCard from "../ContactCard/ContactCard.jsx";
import s from "./ContactList.module.css"

function ContactList({users, deleteUser}) {
    return (
        <div className={s.list}>
            {users.map((user, index) => (
                <ContactCard key={index} user={user}  deleteUser={deleteUser}/>
            ))}
        </div>
    );
}

export default ContactList;