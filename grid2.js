let currentCell = 0;
let targetCell = 0; // Initial target cell where the letter should stop
//const letter = ['A', 'B', 'C'];
let result = 0;
let finalScore = 0;
let score1 = [];
let roll = false;
let starting = false;
let queTime = false;
let num;
let questions=[]
let counting1 = document.getElementById('timer-3');
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-button");
const nextButton = document.getElementById("next-button");
const nextButton1 = document.getElementById("next-button1");
let obtainedQuestions= [];
//const timer = document.getElementById('timer');
let currentQuestionIndex = 0;
let score = 0;
// let moving = document.getElementById("moving");
const quizDialog = document.getElementById("quiz-dialog");
const quizDialog1 = document.getElementById("result-dialog");
const closeButton = document.querySelector(".close-button");
const rightwrong = document.getElementById("rightwrong");
const showScoreElement = document.getElementById("showscore");
let showCountElement = document.getElementById("timer-4");
//let quizResult = document.getElementById('tscore');
// let percentage = document.getElementById('percent')

const startButton = document.getElementById('start');
const rollButton = document.getElementById('count')
const dice = document.getElementById('dice');
let moveButton = document.getElementById('move');
let endGame = false;
let attemptedQuestions=1;
const finalScoreDialog = document.getElementById('final-score-dialog');
const firstDialog = document.getElementById('instructions');

const finalPercentageElement = document.getElementById('final-percentage');
const questionsAttemptedElement = document.getElementById('questions-attempted');
//const playerNameInput = document.getElementById('player-name');
const playerAgainButton = document.getElementById('Play-again');
let percentageScore=0;
let finalScoreElement=document.getElementById('final-score');
let finalTimeUsedElement = document.getElementById("final-time-used");
let finalTimeUsed=0;
let p = 0;
let t=0;
let finalTimeUsed1=0;
let percentageScore1 = 0;
const playerName = document.getElementById('player-name')
const exitButton = document.getElementById('exit-button')
const namePlayer = document.getElementById('name')
const finalScoreDialog1= document.getElementById('final-score-dialog1')
const inputForm = document.getElementById('inputForm');
const smiley = "🍏";
const correctSign = "✓";
const showResult= document.getElementById('show-result')
//const audio = new Audio("sound.mp3");






firstDialog.showModal()
nextButton1.addEventListener('click',()=>{firstDialog.close()})

startButton.addEventListener('click', () => {
   sound.src = "Audio2.mp3"
   sound.play();
    
     starting = true;
     document.getElementById(`cell-${currentCell}`).textContent = smiley                    //letter[2];
     document.getElementById('move').disabled = true;
     //wait= true;
     document.getElementById('count').disabled= false;
     document.getElementById('start').disabled = true;
     endGame=false;
     //console.log(starting)
 }
 
 );
  
 let time = setInterval(()=>{
    if(starting== true)
{ // p +=1
  counting1.innerHTML= p++
  
   if(currentPosition==99)
    {
        
        clearInterval(time);
        finalTimeUsed = p
        showFinalScoreDialog();
 }
} }, 1000)
 
console.log(time);

rollButton.addEventListener('click', () => {
    sound.src = "Audio2.mp3"
   sound.play();
  

     if(starting === true && queTime===false && endGame === false)
     {
     let result1 = Math.floor(Math.random() * 6) + 1;
     let result2 = Math.floor(Math.random() * 6) + 1;
     result = result1 + result2;
     dice.textContent = result1 + "," + result2;
     targetCell = currentCell + result; // Set target cell based on dice roll
    // console.log(result);
     
  document.getElementById('move').disabled = false;
  document.getElementById('count').disabled = true;
  
 }
 else
 {
     document.getElementById('count').disabled = true;  
 }
 }
 );
 
 
 
let intervalId;

let currentPosition = 0; // Initial position

moveButton.addEventListener('click', () => {

   
    if(starting== true && endGame==false)
    {
    currentPosition = currentCell; // Initialize currentPosition to currentCell

    intervalId = setInterval(() => {
    cells[currentPosition].textContent = ''; // Clear the current cell
    currentPosition++;
    cells[currentPosition].textContent = smiley      //'A' ; // Move the letter to the next cell
       // console.log(currentPosition);

    if (currentPosition == targetCell)
    {
            clearInterval(intervalId);
            currentCell = targetCell; // Update currentCell to the new position
    }
        
    else if(currentPosition == 99){
            endGame == true;
            targetCell== currentPosition;
            clearInterval(intervalId);
            finalScoreDialog.showModal()
            //
            document.getElementById('move').disabled=true;
            document.getElementById('count').disabled=true;
            document.querySelectorAll('.cell').disabled = true;
            
            
     }
            }, 300);
     queTime= true;
    document.getElementById('count').disabled = false;
    document.getElementById('move').disabled = true; 
}

    
    

    //document.getElementById('move').false=true;
 

} );



function startQuiz() 
{
   // starting= true;
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
}
let que = 0;
function resetState() {
    nextButton.style.display = 'none';
    while (answerButtons.firstChild) 
    {
    answerButtons.removeChild(answerButtons.firstChild);
    }
}
let multiplier=100;
//console.log(Math.floor(Math.random() * 20));
function showQuestion() {
    //counting1.innerText = setInterval(counting,1000)
    resetState();
    que = Math.floor(Math.random() * multiplier)
    let currentQuestion = questions[que];

    //let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = currentQuestion.question;
   

currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerButtons.appendChild(button);

        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
    });
}


function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === 'true';
    if (isCorrect) {
        score += 2;
      //  score2 += 2;
        score1.push(score);
       // obtainedQuestions.push(score2)
        selectedBtn.classList.add("correct");
        selectedBtn.classList.add('blinking'); // Add blinking effect
        //selectedBtn.innerHTML=
        sound.src = "correct.mp3"
        sound.play();
        clearInterval(num);
        //showCountElement.textContent= 10;
        
    } else {
        selectedBtn.classList.add("incorrect");
        score += 0;
        score1.push(score);
        //score2 +=2
       // obtainedQuestions.push(score2);
        //selectedBtn.innerHTML= "Wrong !!!";
        sound.src = "wrong.mp3"
        sound.play();
        clearInterval(num);
       // showCountElement.textContent= 10;
    }
     //obtainedQuestions.push(score2)
      Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true")
        {
            button.classList.add("correct");

        
        }
        button.disabled = true;
    });
    
    nextButton.style.display = 'block';
    updateScore();
}

  
function updateScore()
 {
    for(let i = 0; i< score1.length; i++)
{   
    finalScore = finalScore + score1[i];
    score1=[];
    
}   
    showScoreElement.innerText = finalScore;
    console.log(finalScore);
};

console.log(attemptedQuestions);


const cells = document.querySelectorAll('.cell');


  cells.forEach(cell => {
     
cell.addEventListener('click', () => {
    if(queTime == true && endGame== false)
   {

    quizDialog.showModal();
    startQuiz();
    showCountElement.textContent= 12;
    
}
    
    
    
    let m = 11;
  
    if (num) 
    {
        clearInterval(num);
    }
       showCountElement = document.getElementById('timer-4');

    num = setInterval(() => {
        showCountElement.textContent = m--;
        if (m === -2) 
        {
            clearInterval(num);
            quizDialog.close();
            queTime=false;
            showCountElement.textContent= 12;
            dice.textContent= '0,0'
            document.getElementById('count').disabled=false;
            attemptedQuestions++
           // m = 9;
        }
    }, 1000);
});
})


function showFinalScoreDialog() 
 {
    if(attemptedQuestions>1)
    {
    percentageScore = Math.round((finalScore / ((attemptedQuestions-1) * 2)) * 100);
    finalPercentageElement.textContent = `Percentage: ${percentageScore}%`;
    questionsAttemptedElement.textContent = `Questions Attempted: ${attemptedQuestions-1}`;
    finalScoreElement.textContent = `Final Score: ${finalScore}`;
    finalTimeUsed1= finalTimeUsed-1
    finalTimeUsedElement.textContent = `Time Used: ${finalTimeUsed1}s`;
    percentageScore1=parseFloat(percentageScore)
    finalScoreDialog.showModal()
    storeLowestTime(finalTimeUsed1, percentageScore1); 
}
}
let que1=[]

nextButton.addEventListener("click", () => {
    quizDialog.close();
    queTime=false;
    document.getElementById('count').disabled=false;
    dice.textContent ="0,0";
    console.log(questions[que]);
    que1.push(que)
    console.log(que1)
    removeQuestionAtIndex(que);
    attemptedQuestions++
   multiplier--;
   sound.src = "Audio2.mp3"
   sound.play();
  
});


console.log(smiley);

console.log(typeof percentageScore1)

playerAgainButton.addEventListener('click', ()=>{
    location.reload()
})  

