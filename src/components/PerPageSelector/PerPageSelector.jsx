import React from 'react';
import s from './PerPageSelector.module.css';

const PerPageSelector = ({photosPerPage, onChange}) => {
    return (
        <div className={s.perPage}>
            <select
                value={photosPerPage}
                onChange={(e) => onChange(Number(e.target.value))}
                className={s.perPageSelector}>
                <option value='10'>10</option>
                <option value='20'>20</option>
                <option value='30'>30</option>
                <option value='40'>40</option>
            </select>
        </div>
    );
};

export default PerPageSelector;