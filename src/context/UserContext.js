
import React, { createContext, Component } from 'react';

export const UserContext = createContext();

class UserContextProvider extends Component {
    state = {
        name: '',
        currentLevel: 0,
        levelCompleted: {
            'one': 0,
            'two': 0,
            'three': 0
        }
    }
    setName = (newName) => {
        this.setState({
            name: newName
        }, () => {
            this.updateStateInLocalStorage();
        });
    }
    setCurrentLevel = (newLevel) => {
        this.setState({
            currentLevel: newLevel
        }, () => {
            this.updateStateInLocalStorage();
        });
    }

    updateCompleted = (level) => {
        let levelCompleted = { ...this.state.levelCompleted };
        if (level === 1) {
            levelCompleted.one = parseInt(levelCompleted.one, 10) + 1;
        } else if (level === 2) {
            levelCompleted.two = parseInt(levelCompleted.two, 10) + 1;
        } else if (level === 3) {
            levelCompleted.three = parseInt(levelCompleted.three, 10) + 1;
        } else {
            console.error('level need to be 1, 2 or 3');
            return;
        }
        this.setState({
            levelCompleted: levelCompleted
        }, () => {
            this.updateStateInLocalStorage();
        });
    }

    updateStateInLocalStorage = () => {
        console.log('state: ', JSON.stringify(this.state));
        localStorage.setItem('state', JSON.stringify(this.state));
    }

    componentDidMount() {
        const state = JSON.parse(localStorage.getItem('state'));
        this.setState(state);
    }

    render() {
        return (
            <UserContext.Provider value={{
                ...this.state,
                setName: this.setName,
                setCurrentLevel: this.setCurrentLevel,
                updateCompleted: this.updateCompleted
            }}>
                {this.props.children}
            </UserContext.Provider>
        );
    }
}

export default UserContextProvider;