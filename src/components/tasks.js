import React, { Component } from 'react';
import Task from './task';
import getTask from './helpers';
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min';

class Tasks extends Component {

    constructor() {
        super();
        this.correct = this.correct.bind(this);
    }

    nrOfQuestions = 9;

    state = {
        tasks: this.getTasks(),
        nrCorrect: 0,
        procentageCorrect: 0,
        nrAnswered: 0,
        isCorrected: false
    }

    getTasks() {
        let tasks = [];
        for (let i = 0; i < this.nrOfQuestions; i++) {
            const t = getTask();
            t.id = i;
            t.answered = false;
            tasks.push(t);
        }
        return tasks;
    }

    userAnswered = (event, id) => {
        if (event.target.value && event.target.value !== '') {

            let newTasks = [...this.state.tasks];
            const currentTask = newTasks.find(x => x.id === id);
            currentTask.userAnswer = parseInt(event.target.value, 10);
            currentTask.answered = true;

            currentTask.isCorrect = currentTask.userAnswer === currentTask.answer

            this.setState({
                tasks: newTasks
            })

            let nrAnswered = 0;
            this.state.tasks.forEach((task) => {
                if (task.answered === true) {
                    nrAnswered++;
                }
            });

            this.setState({
                nrAnswered: nrAnswered
            })
        }
    }

    getGrade() {
        if (this.state.procentageCorrect >= 100) {
            return 5
        } else if (this.state.procentageCorrect >= 90) {
            return 4
        }
        else if (this.state.procentageCorrect >= 80) {
            return 3
        }
        else if (this.state.procentageCorrect >= 70) {
            return 2
        }
        else {
            return 1
        }
    }

    getGradeText() {
        const grade = this.getGrade(this.state.procentageCorrect);

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

    getGradeImage() {
        const grade = this.getGrade(this.state.procentageCorrect);
        switch (grade) {
            case 5:
                return require('../assets/images/correct-jakob-lg.png');
            case 4 || 3 || 2:
                return require('../assets/images/correct-njae-lg.png');
            case 3:
            default:
                return require('../assets/images/wrong-jakob.png');
        }
    }

    correct() {

        this.setState({ isCorrected: true });

        let nrCorrectAnswers = 0;
        this.state.tasks.forEach((task) => {
            if (task.isCorrect === true) {
                nrCorrectAnswers++;
            }
        });

        const procentageCorrect = (nrCorrectAnswers / this.nrOfQuestions) * 100;

        this.setState({
            nrCorrect: nrCorrectAnswers,
            procentageCorrect: procentageCorrect,
        })

        if (this.state.nrAnswered === this.nrOfQuestions) {
            $('#exampleModal').modal();
        }
    }


    componentDidUpdate() {
        console.log('componentDidUpdate');
        console.log('componentDidUpdate', this.state.tasks);
    }

    render() {

        return <div>
            <h1 className="my-5 text-center text-uppercase">Almas matteland</h1>

            <div className="row">
                {this.state.tasks.map((task) => <div className="col-md-4 mb-4" key={task.id}>
                    <Task
                        id={task.id}
                        question={task.question}
                        answer={task.answer}
                        blur={this.userAnswered}
                        isCorrect={task.isCorrect}
                        answered={task.answered}
                        isCorrected={this.state.isCorrected}
                    />
                </div>
                )}
            </div>

            <button className="btn btn-primary mb-3" onClick={(event) => this.correct(event)}>Rätta</button>

            <h2 className="h6" style={{ 'fontStyle': 'italic' }}>svarat på {this.state.nrAnswered} av {this.nrOfQuestions}</h2>

            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title text-uppercase" id="exampleModalLabel">
                                {this.getGradeText()}
                            </h4>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body text-center">
                            <img className="img-fluid mb-3" src={this.getGradeImage()} alt="bravo" />
                        </div>
                    </div>
                </div>
            </div>

        </div >
    }
}

export default Tasks;