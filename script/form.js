import { findParameters } from './functions/findParameters.js'
import { showError } from './functions/showError.js'

class Form {

    constructor() {
        this.initElements()
        this.initEvents()
    }

    initElements() {
        // Question information
        this.totalQuestionsNumber = Object.keys(findParameters()).length

        // HTML elements
        this.fNameInputElement = document.querySelector('#fname')
        this.lNameInputElement = document.querySelector('#lname')
        this.emailInputElement = document.querySelector('#email')
        this.conditionsCheckboxElement = document.querySelector('#conditions')
        this.buttonElement = document.querySelector('.button')
        this.cardErrorElement = document.querySelector('.error-card')
    }

    initEvents() {
        this.generateButtonLink()
        this.inputEventListener(this.buttonElement)
    }

    // Listen event of an input when we click
    inputEventListener(input) {
        input.addEventListener('click', () => {
            this.generateButtonLink()
        })
    }


    // Generate button link
    generateButtonLink() {

        // Find previous answers in current link
        let buttonLink = location.search
        let answersLink = ""
        // Go through url parameters
        for (let index = 1; index < this.totalQuestionsNumber + 1; index++) {
            const element = findParameters()[`a${index}`]
            // Get answers part of URL
            answersLink = answersLink + `&a${index}=${element}`
        }
        // Delete first character
        answersLink = answersLink.slice(1)

        // Create button link
        buttonLink = `results.html?${answersLink}`

        // Check if all the fields are filled
        if (this.areInputsFilled()) {
            // Add link to button
            this.buttonElement.href = buttonLink
        }
        else {
            this.buttonElement.href = "#"
        }
    }


    areInputsFilled() {
        
        if (this.fNameInputElement.value.length > 1 && this.lNameInputElement.value.length > 1 && this.emailInputElement.value.length > 1) {
            if (this.conditionsCheckboxElement.checked) {
                return true
            }
            else {
                this.buttonElement.addEventListener('click', () => {
                    showError("Veuillez accepeter les conditions générales", this.cardErrorElement)
                })
                return false
            }
        }
        else {
            this.buttonElement.addEventListener('click', () => {
                showError("Veuillez remplir tous les champs", this.cardErrorElement)
            })
            return false
        }
        
    }


}

new Form()