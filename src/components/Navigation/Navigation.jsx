import React from 'react';
import s from "./Navigation.module.css";
import {Link} from "react-router-dom";

const menu = [{name: "HOME", link: "/"}, {name: "MOVIES", link: "/movies"}];
export const Navigation = () =>  {

    return (
        <ul className={s.nav}>
            {menu.map((item, index) => (
                <Link key={index} id='nav' to={item.link} className={s.li}>
                    <span className={s.span}>{item.name}</span>
                </Link>))}
        </ul>
    );
}

export default Navigation;