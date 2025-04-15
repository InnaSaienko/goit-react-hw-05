import React from 'react';
import s from "./Navigation.module.css";
import { NavLink} from "react-router-dom";
import clsx from "clsx";

const menu = [{name: "HOME", link: "/"}, {name: "MOVIES", link: "/movies"}];
export const Navigation = () =>  {

    const setActiveClass = ({isActive}) => {
        return clsx(s.link, isActive &&  s.active);
    };

    return (
        <ul className={s.nav}>
            {menu.map((item, index) => (
                <NavLink key={index} id='nav' to={item.link} className={setActiveClass}>
                    <span className={s.name}>{item.name}</span>
                    <span className={s.bar}></span>
                </NavLink>))}
        </ul>
    );
}

export default Navigation;