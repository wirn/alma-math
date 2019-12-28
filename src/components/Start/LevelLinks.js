import React from 'react';
import { Link } from 'react-router-dom';

const LevelLinks = (history, location, match) => {

    console.log(history, location, match);

    return (
        <div className="container my-5">
            <div className="col-md-6 offset-md-3 ">
                <Link to="/tasks/1" className="btn btn-primary btn-lg ml-auto mr-2">
                    <div className="d-flex">
                        Nivå 1
                        {/* <button className="btn btn-primary btn-lg ml-auto">Börja</button> */}
                    </div>
                </Link>
                <Link to="/tasks/2" className="btn btn-primary btn-lg ml-auto mr-2">
                    <div className="d-flex">
                        Nivå 2
                    </div>
                </Link>
                <Link to="/tasks/3" className="btn btn-primary btn-lg ml-auto">
                    <div className="d-flex">
                        Nivå 3
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default LevelLinks;