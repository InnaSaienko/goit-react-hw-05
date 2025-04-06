import './App.module.css';
import {useEffect, useState} from "react";
import ContactList from "./components/ContactList/ContactList.jsx";
import SearchBox from "./components/SearchBox/SearchBox.jsx";
import ContactForm from "./components/ContactForm/ContactForm.jsx";
import {ContactData} from "./constants/ContactData.js";
import s from "./App.module.css"

export default function App() {
    const [contacts, setContacts] = useState(() =>
        JSON.parse(localStorage.getItem('users')) || [])
    const [filter, setFilter] = useState("");

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedUsers = JSON.parse(localStorage.getItem('users'));
            if (storedUsers) {
                setContacts(storedUsers);
            } else {
                setContacts(ContactData);
            }
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(contacts));
    }, [contacts]);

    const filteredContacts = filter
        ? contacts.filter(contact =>
            contact.name && contact.name.toLowerCase().includes(filter.toLowerCase())
        )
        : contacts;

    const handleAddUser = (newUser) => {
        const userWithId = {
            ...newUser, id: Date.now().toString(),
        };
        setContacts(prevUsers => [...prevUsers, userWithId]);
    };

    const deleteUser = (userId) => {
        setContacts(prevUsers => prevUsers.filter(user => user.id !== userId));
    };

    return (
        <div className={s.main}>
            <h1>Phonebook</h1>
            <ContactForm addUser={handleAddUser}/>
            <SearchBox filter={filter} setFilter={setFilter}/>
            <ContactList users={filteredContacts} deleteUser={deleteUser}/>
        </div>
    )
}

