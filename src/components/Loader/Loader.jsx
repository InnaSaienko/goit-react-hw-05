import React from 'react';
import s from "./Loader.module.css";

const Loader = () => {
    return (
        <div className={s.progress}>
            <div className={s.indeterminate}></div>
        </div>
    );
};

export default Loader;