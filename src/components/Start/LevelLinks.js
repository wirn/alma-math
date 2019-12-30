import React from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

const LevelLinks = () => {

    return (
        <UserContext.Consumer>
            {(context) => {
                const { setCurrentLevel } = context;
                return (
                    <div className="container my-5">
                        <div className="col-md-6 offset-md-3 ">
                            <Link to="/tasks/1" className="btn btn-primary btn-lg ml-auto mr-2">
                                <div className="d-flex" onClick={(event) => setCurrentLevel(1)}>
                                    Nivå 1
                                </div>
                            </Link>
                            <Link to="/tasks/2" className="btn btn-primary btn-lg ml-auto mr-2">
                                <div className="d-flex" onClick={(event) => setCurrentLevel(2)}>
                                    Nivå 2
                                </div>
                            </Link>
                            <Link to="/tasks/3" className="btn btn-primary btn-lg ml-auto">
                                <div className="d-flex" onClick={(event) => setCurrentLevel(3)}>
                                    Nivå 3
                                </div>
                            </Link>
                        </div>
                    </div>
                )
            }
            }
        </UserContext.Consumer>
    )
};

export default LevelLinks;