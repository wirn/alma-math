import React, { useEffect, useState } from 'react';

const Task = (props) => {

    const style = {
        borderColor: props.isCorrect === false && props.answered && props.isCorrected ? 'red' : null
    }

    return <div className="card" style={style}>
        <div className="card-body">
            <div className="row">
                <div className="col-6">
                    <div className="form-group" >
                        <b><label>{props.question}</label></b>
                        <input
                            className="form-control text-center w-75"
                            placeholder="svar"
                            type="number"
                            maxLength="2"
                            onBlur={(event) => props.blur(event, props.id)}
                            value={props.userAnswer}
                        />
                    </div>
                </div>
                <div className="col-6">
                    {props.isCorrect === true && props.answered && props.isCorrected ?
                        <img src={require('../assets/images/correct.png')} alt="rätt" /> : null
                    }
                    {props.isCorrect === false && props.answered && props.isCorrected ?
                        <img src={require('../assets/images/wrong.png')} alt="fel" /> : null
                    }
                </div>
            </div>
        </div>
    </div>;
}

export default Task;