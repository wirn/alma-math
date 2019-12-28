import React from 'react';
import { UserContext } from '../../context/UserContext';

const NameChanger = () => {
    return (
        <UserContext.Consumer>
            {(context) => {
                const { name, changeName } = context;

                return (
                    <div className="container my-5" >
                        <div className="col-md-6 offset-md-3 ">
                            <label>Vad heter du?</label>
                            <input
                                className="form-control d-block mb-2"
                                value={name}
                                placeholder={name}
                                onChange={(event) => changeName(event.currentTarget.value)}
                            ></input>
                        </div>
                    </div>
                )
            }}
        </UserContext.Consumer>
    );
};

export default NameChanger;