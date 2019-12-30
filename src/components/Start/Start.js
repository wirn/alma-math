import React from 'react';
import NameChanger from './NameChanger';
import LevelLinks from './LevelLinks';
import { UserContext } from '../../context/UserContext';

const Start = (history, location, match) => {

    //console.log(history, location, match);

    return (
        <UserContext.Consumer>
            {(context) => {
                const { name, currentLevel } = context;
                return (
                    <div>
                        <NameChanger />

                        {name !== '' &&
                            <LevelLinks />
                        }

                    </div>
                )
            }}
        </UserContext.Consumer>
    );
};

export default Start;