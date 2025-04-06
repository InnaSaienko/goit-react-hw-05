import './App.module.css';
import {useEffect, useState} from "react";
import ContactList from "./components/ContactList/ContactList.jsx";
import SearchBox from "./components/SearchBox/SearchBox.jsx";
import ContactForm from "./components/ContactForm/ContactForm.jsx";
import {ContactData} from "./constants/ContactData.js";
import s from "./App.module.css"


export default function App() {
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState("");

    useEffect(() => {
        const storedUsers = JSON.parse(localStorage.getItem('users'));
        if (storedUsers) {
            setUsers(storedUsers);
        } else {
            setUsers(ContactData);
        }
    }, []);

    const filteredContacts = filter
        ? users.filter(contact =>
            contact.name && contact.name.toLowerCase().includes(filter.toLowerCase())
        )
        : users;

    const handleAddUser = (newUser) => {
        setUsers(prevUsers => {
            const updatedUsers = [...prevUsers, { ...newUser }];
            localStorage.setItem('users', JSON.stringify(updatedUsers));
            return updatedUsers;
        });
    };

    const deleteUser = (userToDelete) => {
        setUsers(prevUsers => {
            const updatedUsers = prevUsers.filter(user => user !== userToDelete);
            localStorage.setItem('users', JSON.stringify(updatedUsers));
            return updatedUsers;
        });
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

