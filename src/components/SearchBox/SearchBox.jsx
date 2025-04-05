import React from 'react';
import s from "./SearchBox.module.css"

function SearchBox({ filter, setFilter }) {
    return (
        <div className={s.searchBox}>
            <label className={s.label}>Find contact by name</label>
            <input
                type="text"
                placeholder="Search contacts..."
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className={s.input}
            />
        </div>

    );
}

export default SearchBox;