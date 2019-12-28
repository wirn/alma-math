import React from 'react';
import { Link } from 'react-router-dom';
import NameChanger from './NameChanger';
import LevelLinks from './LevelLinks';

const Start = (history, location, match) => {

    console.log(history, location, match);

    return (
        <div className="container my-5">
            <NameChanger />
            <LevelLinks />
        </div>
    );
};

export default Start;