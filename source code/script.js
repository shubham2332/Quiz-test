let questions = [
    {
        question: "Which of the following is a correct way to declare a variable in JavaScript?",
        option: [
            "var myVar",
            "declare myVar",
            "dim myVar",
            "int myVar"
        ],
        answer: "var myVar"

    },
    {
        question: "What is the result of typeof null in JavaScript?",
        option: [
            "null",
            "undefined",
            "object",
            "function,"
        ],
        answer: "object"

    },
    {
        question: "Which of the following will print (Hello World) to the console",
        option: [
            "print('Hello World')",
            "log('Hello World')",
            "console.log('Hello World')",
            "alert('Hello World')",
        ],
        answer: "console.log('Hello World')"

    },
    {
        question: "What will 2 + '2' evaluate to in JavaScrip",
        option: [
            "22",
            "4",
            "NaN",
            "'4'",
        ],
        answer: "22"

    },
    {
        question: "Which of the following is NOT a JavaScript data type?",
        option: [
            "String",
            "Boolean",
            "Float",
            "Undefined",
        ],
        answer: "Float"

    },
    {
        question: "How do you create a function in JavaScript?",
        option: [
            "function myFunction {}",
            "function: myFunction() {}",
            "function myFunction() {}",
            "create function myFunction() {}",
        ],
        answer: "function myFunction() {}"

    },
    {
        question: "Which symbol is used for single-line comments in JavaScript?",
        option: [
            "#",
            "//",
            "/* */",
            "<!— -->",
        ],
        answer: "//"

    },
    {
        question: "Which method is used to convert a JSON object into a string in JavaScript?",
        option: [
            "JSON.stringify()",
            "JSON.parse()",
            "JSON.toString()",
            "JSON.objectify()",
        ],
        answer: "JSON.toString()"

    },
    {
        question: "What is the output of Boolean('false') in JavaScript?",
        option: [
            "true",
            "false",
            "undefined",
            "null",
        ],
        answer: "true"

    },
    {
        question: "How can you detect the client’s browser name in JavaScript?",
        option: [
            "navigator.appName",
            "window.browser",
            "document.browser",
            "browser.name",
        ],
        answer: "navigator.appName"

    },
    {
        question: "Which function is used to parse a string to an integer in JavaScript?",
        option: [
            "parseInteger()",
            "parseInt()",
            "toInt()",
            "intParse()",
        ],
        answer: "parseInt()"


    },

];

let questionIndex = 0;
let questionArea = document.querySelector(".question h3");
let optionArea = document.querySelectorAll(".btn");

function initializeQuiz() {
    questionArea.textContent = questions[questionIndex].question;
    for(let i=0; i<optionArea.length; i++){
        optionArea[i].textContent = questions[questionIndex].option[i];

}
}
initializeQuiz();

let marks = 0;
for (let i = 0; i < optionArea.length; i++) {
    optionArea[i].addEventListener('click', checkedOption)
}

var obj = this;
let correctsound = document.getElementById("correctsound")
let wronganswer = document.getElementById("wrong")  

function checkedOption() {
    let correcanswer = questions[questionIndex].answer;
    let selectedAnswer = this.textContent;

    if (correcanswer === selectedAnswer) {
        marks++;
        this.style.backgroundColor = "green";
        this.style.color = "white";
        correctsound.play()
    }
    else {
        this.style.backgroundColor = "red"
        this.style.color = "white";
        wronganswer.play()
        for(let i =0; i<optionArea.length ; i++){
            if(optionArea[i].textContent === questions[questionIndex].answer){
                optionArea[i].style.backgroundColor = 'green';
                optionArea[i].style.color="white"
            }
        }
    }
    disabledOptions();
    questionIndex++;
}

function disabledOptions(){
    for(let i = 0 ; i<optionArea.length; i++){
        optionArea[i].disabled = true
    }
}
let quizgame = document.querySelector('.quiztest');

let resultsection = document.querySelector('.result-section');
let resultsectionh1= document.querySelector('.result-section h1');




let nxtbtn = document.getElementById('nxt-btn');
nxtbtn.addEventListener("click",movetonextquestion);

function movetonextquestion(){
    for(let i = 0 ; i<optionArea.length;i++){
        optionArea[i].disabled = false;
        optionArea[i].style.backgroundColor=""
        optionArea[i].style.color=""
    }
    if(questionIndex<questions.length){
        initializeQuiz();   
    }
    else{
        console.log(optionArea.length)
        alert(' Quiz complete')

        resultsection.style.display = 'block';
        quizgame.style.display = 'none';
        resultsectionh1.textContent = `your marks are ${marks} / ${questions.length}`;

    }
    
}

let restartbtn = document.getElementById('restart');
restartbtn.addEventListener('click' , restartquiz);

function restartquiz(){
    marks = 0;
    questionIndex = 0;
    
    resultsection.style.display = 'none';
    quizgame.style.display='block';
    initializeQuiz();
}
document.addEventListener('keydown' , handlekeypress);

function handlekeypress(event){
    let keypressed = event.key;
    let optionindex = parseInt(keypressed)-1;
    if(optionindex >=0 && optionindex < optionArea.length){
        optionArea[optionindex].click();
    }
}



