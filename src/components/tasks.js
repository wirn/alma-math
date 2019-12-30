import React, { useState } from 'react';
import Task from './Task';
import getTask from '../helpers';
import { UserContext } from '../context/UserContext';
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Tasks(props) {

    console.log(props.match.params.level);

    const getTasks = (level) => {
        let tasks = [];
        for (let i = 0; i < nrOfQuestions; i++) {
            const t = getTask(level);
            t.id = i;
            t.answered = false;
            tasks.push(t);
        }
        return tasks;
    }

    const level = parseInt(props.match.params.level, 10);
    const [nrCorrect, setNrCorrect] = useState(0);
    const [procentageCorrect, setProcentageCorrect] = useState(0);
    const [nrAnswered, setNrAnswered] = useState(0);
    const [nrOfQuestions] = useState(9);
    const [isCorrected, setIsCorrected] = useState(false);
    const [tasks, setTasks] = useState(getTasks(level));


    const userAnswered = (event, id) => {
        if (event.target.value && event.target.value !== '') {

            let newTasks = [...tasks];
            const currentTask = newTasks.find(x => x.id === id);
            currentTask.userAnswer = parseInt(event.target.value, 10);
            currentTask.answered = true;

            currentTask.isCorrect = currentTask.userAnswer === currentTask.answer

            setTasks(newTasks);

            let nrAnswered = 0;
            tasks.forEach((task) => {
                if (task.answered === true) {
                    nrAnswered++;
                }
            });

            setNrAnswered(nrAnswered);
        }
    }

    const getGrade = () => {
        if (procentageCorrect >= 100) {
            return 5
        } else if (procentageCorrect >= 90) {
            return 4
        }
        else if (procentageCorrect >= 80) {
            return 3
        }
        else if (procentageCorrect >= 70) {
            return 2
        }
        else {
            return 1
        }
    }

    const getGradeText = () => {
        const grade = getGrade(procentageCorrect);

        switch (grade) {
            case 5:
                return 'Bravo!';
            case 4:
                return 'Jättebra';
            case 3:
                return 'Bra';
            case 2:
                return 'Ok';
            default:
                return 'Inte så bra';
        }
    }

    const getGradeImage = () => {
        const grade = getGrade(procentageCorrect);
        let image = require('../assets/images/wrong-jakob.png');
        if (grade === 5) {
            image = require('../assets/images/correct-jakob-lg.png');
        } else if (grade === 4 || grade === 3 || grade === 2) {
            image = require('../assets/images/correct-njae-lg.png');
        }
        return image;
    }

    const correct = (event, currentLevel, updateCompleted) => {

        console.log(event, currentLevel, updateCompleted);

        setIsCorrected(true);

        let nrCorrectAnswers = 0;
        tasks.forEach((task) => {
            if (task.isCorrect === true) {
                nrCorrectAnswers++;
            }
        });

        const procentageCorrect = (nrCorrectAnswers / nrOfQuestions) * 100;

        if (nrCorrectAnswers === nrOfQuestions) {
            updateCompleted(currentLevel)
        }

        setNrCorrect(nrCorrect);
        setProcentageCorrect(procentageCorrect);

        if (nrAnswered === nrOfQuestions) {
            $('#exampleModal').modal();
        }
    }

    return (
        <UserContext.Consumer>
            {(context) => {
                const { currentLevel, updateCompleted } = context;
                return <div className="container">
                    <div className="row">
                        {tasks.map((task) => <div className="col-md-4 mb-4" key={task.id}>
                            <Task
                                id={task.id}
                                question={task.question}
                                answer={task.answer}
                                blur={userAnswered}
                                isCorrect={task.isCorrect}
                                answered={task.answered}
                                isCorrected={isCorrected}
                            />
                        </div>
                        )}
                    </div>

                    <button className="btn btn-primary mb-3" onClick={(event) => correct(event, currentLevel, updateCompleted)}>Rätta</button>

                    <h2 className="h6" style={{ 'fontStyle': 'italic' }}>svarat på {nrAnswered} av {nrOfQuestions}</h2>

                    <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-lg" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h4 className="modal-title text-uppercase" id="exampleModalLabel">
                                        {getGradeText()}
                                    </h4>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body text-center">
                                    <img className="img-fluid mb-3" src={getGradeImage()} alt="bravo" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div >
            }
            }
        </UserContext.Consumer>
    )
}

export default Tasks;