import React from 'react';
import "./Profile.scss";

function Profile({user}) {
 const {username, tag, location, avatar, stats} = user;
    const capitalizeFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    return (
        <div className="main">
            <div className="card">
                <div className="content">
                    <img src={avatar} alt="User avatar" />
                    <p className="bold">{username}</p>
                    <p className="grey">@{tag}</p>
                    <p className="grey">{location}</p>
                </div>

                <ul className="statistics">
                    {Object.keys(stats).map((key) => (
                        <li key={key}>
                            <span>{capitalizeFirstLetter(key)}</span>
                            <span className="bold">{stats[key]}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Profile;