import React from 'react';
import s from "./SearchBar.module.css"

function SearchBar({ onSubmit }) {
    const handleSubmit = (event) => {
        event.preventDefault();
        const searchThema = event.target[0].value.trim();
        if (searchThema === '') {
            alert('Please enter text to search for images.');
        } else {
            onSubmit(searchThema);
        }
    };

    return (
        <header className={s.searchBox}>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    autocomplete="off"
                    autofocus
                    placeholder="Search images and photos"
                    className={s.input}
                />
                <button type="submit">Search</button>
            </form>
        </header>
    );
}

export default SearchBar;