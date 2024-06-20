const questions = [
    "Zou je ooit iemand anders de schuld geven voor iets wat jij hebt gedaan?",
    "Zou je ooit je plek in een wachtrij afstaan aan iemand anders?",
    "Zou je ooit geld van je ouders stelen?",
    "Zou je ooit liegen om jezelf uit de problemen te houden?",
    "Zou je ooit een vriend in de steek laten als dat je eigen leven makkelijker maakt?"
];

let currentQuestionIndex = 0;

const questionElement = document.getElementById('question');
const jaButton = document.getElementById('jaButton');
const neeButton = document.getElementById('neeButton');

function displayQuestion() {
    questionElement.textContent = questions[currentQuestionIndex];
}

jaButton.addEventListener('mouseover', () => {
    document.body.style.backgroundColor = 'darkred';
    document.body.style.transition = 'background-color 0.5s';
    document.body.style.animation = 'shake 0.5s';
});

jaButton.addEventListener('mouseout', () => {
    document.body.style.backgroundColor = 'grey';
    document.body.style.animation = '';
});

neeButton.addEventListener('mouseover', () => {
    document.body.style.backgroundColor = 'white';
    document.body.style.boxShadow = '0 0 15px 5px rgba(0, 255, 0, 0.7)';
});

neeButton.addEventListener('mouseout', () => {
    document.body.style.backgroundColor = 'grey';
    document.body.style.boxShadow = '';
});

jaButton.addEventListener('click', () => {
    currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
    displayQuestion();
    document.body.style.backgroundColor = 'grey';
    document.body.style.animation = '';
});

neeButton.addEventListener('click', () => {
    currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
    displayQuestion();
    document.body.style.backgroundColor = 'grey';
    document.body.style.boxShadow = '';
});

displayQuestion();
