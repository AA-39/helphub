var document;

document.addEventListener('DOMContentLoaded', function () {
    var volunteerButton = document.getElementById('volunteerButton');

    function showForm() {
        var formElement = document.getElementById('formElement');
        formElement.style.display = 'block';
    }

    volunteerButton.addEventListener('click', function () {
        showForm();
    });

    // Function to generate a random color
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i += 1) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    var charHeading = document.querySelector('h1');

    function changeHeadingColor() {
        var randomColor = getRandomColor();
        charHeading.style.color = randomColor;
    }

    charHeading.addEventListener('click', function () {
        changeHeadingColor();
    });

    // Function to check the user's answer
    function checkAnswer() {
        // Get the unique IDs of quiz elements on each page
        var quizQuestion = document.getElementById('quizQuestion');
        var quizFeedback = document.getElementById('quizFeedback');

        // Get the selected option
        var selectedOption = document.querySelector('input[name="quizOption"]:checked');

        if (selectedOption) {
            // Check the selected option's value based on the quiz content
            if (quizQuestion.textContent.includes('pollution') && selectedOption.value === 'option1') {
                quizFeedback.textContent = 'Correct! Industrial emissions are a significant source of air pollution.';
            } else if (quizQuestion.textContent.includes('communication') && selectedOption.value === 'option1') {
                quizFeedback.textContent = 'Correct! Social Media has significantly improved communication worldwide.';
            } else if (quizQuestion.textContent.includes('outreach') && selectedOption.value === 'option2') {
                quizFeedback.textContent = 'Correct! A primary goal of a community health outreach program is providing preventive care and education.';
            } else if (quizQuestion.textContent.includes('underprivileged') && selectedOption.value === 'option2') {
                    quizFeedback.textContent = 'Correct! Limited access to quality schools is a common challenge faced by underprivileged youth in accessing education.';
            } else {
                quizFeedback.textContent = 'Incorrect. Please try again.';
            }
        } else {
            quizFeedback.textContent = 'Please select an option before checking your answer.';
        }
    }

    // Attach the checkAnswer function to the button click event
    var checkAnswerButton = document.getElementById('checkAnswerButton');
    checkAnswerButton.addEventListener('click', checkAnswer);
});
