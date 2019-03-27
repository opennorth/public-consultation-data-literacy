//MOD = "mod1" or "mod2"
//SOURCE = link to json data
//adapted from https://www.sitepoint.com/simple-javascript-quiz/
function getQuiz(source, mod){
	var XMLHttpRequestObject = false; 
	if(window.XMLHttpRequest){
		XMLHttpRequestObject = new XMLHttpRequest();
		XMLHttpRequestObject.responseType = 'json';

	} else if(window.ActiveXObject){
		XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP");
	}
	if(XMLHttpRequestObject){
		XMLHttpRequestObject.open("GET", source);

		XMLHttpRequestObject.onreadystatechange = function(){
			if (XMLHttpRequestObject.readyState == 4 && XMLHttpRequestObject.status == 200){
				const myQuestions=XMLHttpRequestObject.response;
				const quizContainer = document.getElementById('quiz');
				const resultsContainer = document.getElementById('results');
								
				if(mod=="mod1"){
					const submitButton = document.getElementById('M1S4Button');
				}
				if(mod=="mod2"){
					const submitButton = document.getElementById('M2S4Button');
				}

				function buildQuiz() {
				    // we'll need a place to store the HTML output
				    const output = [];
				    // for each question...
				    myQuestions.forEach(
				        (currentQuestion, questionNumber) => {
				            // we'll want to store the list of answer choices
				            const answers = [];
				            // and for each available answer...
				            for (letter in currentQuestion.answers) {
				                // ...add an HTML radio button
				                answers.push(
				                    `<label>
								            <input type="radio" name="question${questionNumber}" value="${letter}">
								           
								            ${currentQuestion.answers[letter]}
								          </label>`
				                );
				            }
				            // add this question and its answers to the output
				            output.push(
				                `<div class="question"> ${currentQuestion.question} </div>
								        <div class="answers"> ${answers.join('')} </div>`
				            );
				        }
				    );
				    // finally combine our output list into one string of HTML and put it on the page
				    quizContainer.innerHTML = output.join('');
				}

				function showResults() {
				    // gather answer containers from our quiz
				    const answerContainers = quizContainer.querySelectorAll('.answers');
				    // keep track of user's answers
				    let numCorrect = 0;
				    // for each question...
				    myQuestions.forEach((currentQuestion, questionNumber) => {
				        // find selected answer
				        const answerContainer = answerContainers[questionNumber];
				        const selector = 'input[name=question' + questionNumber + ']:checked';
				        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
				        // if answer is correct
				        if (userAnswer === currentQuestion.correctAnswer) {
				            // add to the number of correct answers
				            numCorrect++;
				            // color the answers green
				            answerContainers[questionNumber].style.color = '#048701';
				            answerContainers[questionNumber].style.fontWeight = 'bold';
				        }
				        // if answer is wrong or blank
				        else {
				            //color the answers red
				            answerContainers[questionNumber].style.color = '#db230d';
				            answerContainers[questionNumber].style.fontWeight = 'bold';
				        }
				    });
				    // add to results box
				    resultsContainer.innerHTML = numCorrect + ' out of ' + myQuestions.length;
				}
				// display quiz right away
				buildQuiz();
				// on submit, show results
				submitButton.addEventListener('click', showResults);			

				delete XMLHttpRequestObject; 
				XMLHttpRequestObject = null; 
			}
		}

		XMLHttpRequestObject.send(null);
	}
	
}