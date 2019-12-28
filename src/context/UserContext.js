
import React, { createContext, Component } from 'react';

export const UserContext = createContext();

class UserContextProvider extends Component {
    state = {
        name: '',
        currentLevel: 0,
        levelCompleted: {
            1: 0,
            2: 0,
            3: 0
        }
    }
    changeName = (newName) => {
        this.setState({
            name: newName
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
            <UserContext.Provider value={{ ...this.state, changeName: this.changeName }}>
                {this.props.children}
            </UserContext.Provider>
        );
    }
}

export default UserContextProvider;