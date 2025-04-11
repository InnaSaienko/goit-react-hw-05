import React from 'react';
import s from "../../App.module.css";

const LoadMoreBtn = ({onClick}) => {
    return (
        <div>
            <button
                className={s.button}
                onClick={onClick}
                style={{display: 'flex', margin: '0 auto'}}
            >
                Load More
            </button>

        </div>
    );
};

export default LoadMoreBtn;