import React from 'react';
import NameChanger from './components/Start/NameChanger';
import LevelLinks from './components/Start/LevelLinks';
import { UserContext } from './context/UserContext';

const Root = (history, location, match) => {

    return (
        <UserContext.Consumer>
            {(context) => {
                const { name, currentLevel } = context;
                return (
                    <div className="container my-5">
                        hej
							</div>
                )
            }}
        </UserContext.Consumer>
    );
};

export default Root;