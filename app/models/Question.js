export class Question {
    constructor(data) {
        this.type = data.type
        this.category = data.category
        this.difficulty = data.difficulty
        this.question = data.question
        this.correctAnswer = data.correct_answer
        this.incorrectAnswer = data.incorrect_answers
    }

    get QuestionBlock() {
        return `
        <div class="row m-auto justify-content-around">
        <div class="col-10 text-center glass">
            <h5>${this.question}</h5>
        `
    }

    get AnswerBoxes() {
        return `
    <div class="row">
        <div class="col-10">
            <div class="row">
                div class="col-5 glass">
                <button>${this.incorrectAnswer[0]}</button>
                </div>
                <div class="col-5 glass">
                <button>${this.incorrectAnswer[1]}</button>
                </div>
                </div>
            </div>
        </div>
    <div class="row">
        <div class="col-10">
            <div class="row">
                <div class="col-5 glass">
                <button>${this.incorrectAnswer[2]}</button>
                </div>
                <div class="col-5 glass">
                <button>${this.correctAnswer}</button>
                /div>
            </div>
        </div>
    </div>
    `
    }
}