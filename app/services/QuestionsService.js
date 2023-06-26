import { AppState } from "../AppState.js";
import { Question } from "../models/Question.js";
import { questionApi } from "./AxiosService.js"



class QuestionsService {
    async getQuestions() {
        const response = await questionApi.get()
        console.log('questions', response.data);
        const arrayOfQuestions = response.data.results.map(questionsPojo => new Question(questionsPojo))
        console.log(arrayOfQuestions);
        AppState.questions = arrayOfQuestions
    }
}


export const questionsService = new QuestionsService()