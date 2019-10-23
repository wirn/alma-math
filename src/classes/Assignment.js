export default class Assignment {
    constructor(
        question,
        answer,
        isCorrect,
        answered = false,
        id = null,
        userAnswer = null
    ) {

        this.question = question;
        this.answer = answer;
        this.isCorrect = isCorrect;
        this.answered = answered;
        if (id !== null)
            this.id = id;
        if (userAnswer)
            this.userAnswer = userAnswer;
        else
            this.userAnswer = '';
    }
}