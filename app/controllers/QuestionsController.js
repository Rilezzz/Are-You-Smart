import { AppState } from "../AppState.js"
import { questionsService } from "../services/QuestionsService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"



function _drawQuestions() {
    let questions = AppState.questions
    let format = ''

    questions.forEach(q => format += q.QuestionBlock)

    setHTML('questions', format)
}



export class QuestionsController {
    constructor() {
        console.log('Questions Controller Loaded')

        this.getQuestions()

        AppState.on('questions', _drawQuestions)
    }

    async getQuestions() {
        try {
            await questionsService.getQuestions()
            Pop.success('Questions Popped')
        } catch (error) {
            console.error(error)
            Pop.error(error.message)
        }
    }


}