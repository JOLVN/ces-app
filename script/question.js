import { findParameters } from './functions/findParameters.js'
import { showError } from './functions/showError.js'
import { loader } from './functions/loader.js'
import questions from '../datas/questions.json' assert {type: 'json'};


class Question {

    constructor() {
        this.initElements()
        this.initEvents()
    }

    initElements() {
        // Question information
        this.totalQuestionsNumber = Object.keys(questions).length
        this.questionNumber = findParameters()['question']
        this.question = Object.values(questions)[this.questionNumber - 1]

        // Elements
        this.titleElement = document.querySelector('.title')
        this.questionElement = document.querySelector('.question')
        this.answersListElement = document.querySelector('.answers-list')
        this.buttonElement = document.querySelector('.button')
        this.cardErrorElement = document.querySelector('.error-card')

        // Selected question
        this.questionSelected = null
    }

    initEvents() {
        loader()
        this.displayText()
        this.displayAnswers()
        this.generateButtonLink()
    }


    // Display question and question number
    displayText() {
        this.titleElement.innerText = `Question ${this.questionNumber} / ${this.totalQuestionsNumber}`
        this.questionElement.innerText = this.question['question']
    }

    // Display question answers
    displayAnswers() {
        // Go through questions answers
        for (let index = 0; index < this.question['answers'].length; index++) {
            const element = this.question['answers'][index];

            // Create answer card for each question
            let li = document.createElement('li')
            let answer = document.createElement('p')
            answer.innerText = element
            li.classList.add('answer-card')
            li.appendChild(answer)
            
            // Attribuate this answer card to the list
            this.answersListElement.appendChild(li)

            // Select answer when clicking
            answer.addEventListener('click', () => {
                // Reset borders
                for (let i = 0; i < this.answersListElement.children.length; i++) {
                    this.answersListElement.children[i].style.border = "none"
                }
                // Attribute border to selected question
                li.style.border = "solid 1px yellow"
                this.questionSelected = index

                this.generateButtonLink()
            })
        }
    }

    // Genrate button link with answer and next question \\ Next page
    generateButtonLink() {
        // Find previous answers in current link
        let buttonLink = location.search
        let answersLink = ""
        for (let index = 1; index < this.questionNumber; index++) {
            const element = findParameters()[`a${index}`]
            answersLink = answersLink + `&a${index}=${element}`
        }

        // Create button link
        if (this.questionNumber < this.totalQuestionsNumber) {
            // Next question
            buttonLink = `question.html?question=${parseInt(this.questionNumber) + 1}${answersLink}&a${this.questionNumber}=${this.questionSelected}`
        }
        else {
            // No more question -> Form
            answersLink = answersLink.slice(1)
            buttonLink = `form.html?${answersLink}&a${this.questionNumber}=${this.questionSelected}`
        }

        // Check if one question is selected
        if (this.questionSelected != null) {
            // Affect link
            this.buttonElement.href = buttonLink
        }
        else {
            // Show error
            this.buttonElement.addEventListener('click', () => {
                showError("Veuillez sélectionner une question", this.cardErrorElement)
            })
        }
    }



}

new Question()