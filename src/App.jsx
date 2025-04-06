import './App.module.css';
import {useState} from "react";
import ContactList from "./components/ContactList/ContactList.jsx";
import SearchBox from "./components/SearchBox/SearchBox.jsx";
import ContactForm from "./components/ContactForm/ContactForm.jsx";
import {ContactData} from "./constants/ContactData.js";
import s from "./App.module.css"


export default function App() {
    const [users, setUsers] = useState(ContactData);
    const [filter, setFilter] = useState("");

    const filteredContacts = filter
        ? users.filter(contact =>
            contact.name && contact.name.toLowerCase().includes(filter.toLowerCase())
        )
        : users;

    const handleAddUser = (newUser) => {
        setUsers(prev => [...prev, { ...newUser }]);
        localStorage.setItem('users', JSON.stringify(users));
    };

    const deleteUser = (userToDelete) => {
        setUsers(prev => prev.filter(user => user !== userToDelete));
        localStorage.setItem('users', JSON.stringify(users));
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

