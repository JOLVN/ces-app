import questions from '../datas/questions.json' assert {type: 'json'};
import { loader } from './functions/loader.js'
import { findParameters } from './functions/findParameters.js'


class Results {

    constructor() {
        this.initElements()
        this.initEvents()
    }

    initElements() {

        // Elements
        this.scoreElement = document.querySelector('#score')

        // Global var
        this.totalQuestionsNumber = Object.keys(questions).length
        this.score = 0
    }

    initEvents() {
        loader()
        this.calculateScore()
        this.displayScore()
    }

    // Calcul score according to user answers
    calculateScore() {
        // Go through the questions
        for (let index = 0; index < this.totalQuestionsNumber; index++) {

            // Get user answer and good answer of the question
            const indexUserAnswer = Object.values(findParameters())[index]
            const userAnswer = Object.values(questions)[index]['answers'][indexUserAnswer]
            const goodAnswer = Object.values(questions)[index]['good_answer'] 

            // Compare user answer and good answer
            if (userAnswer == goodAnswer) {
                this.score += 1
            }

        }
    }

    // Display user score in the page
    displayScore() {
        this.scoreElement.innerText = `${this.score} / ${this.totalQuestionsNumber}`
    }
    
}


new Results()