import React from 'react';
import Contact from "../Contact/Contact.jsx";
import s from "./ContactList.module.css"

function ContactList({users, deleteUser}) {
    return (
        <div className={s.list}>
            {users.map((user, index) => (
                <Contact key={index} user={user} deleteUser={deleteUser}/>
            ))}
        </div>
    );
}

export default ContactList;