// Array of objects of questions and answer
let questionArray  = [{
     question: "Which of the following collision avoidance systems helps airplanes avoid colliding with each other?",
     correct_answer: "TCAS",
     incorrect_answers: ["GPWS", "OCAS", "TAWS"],

},

{
     correct_answer: "Mike",
     incorrect_answers: ["Matthew", "Mark", "Max"],
     question: "What name represents the letter M in the NATO phonetic alphabet?"
},
{
     correct_answer: "A Tight Rope",
     incorrect_answers: ["Broken Glass", "Balls", "The Moon"],
     question: "What does a funambulist walk on?"
},
{
     correct_answer: "Octagon",
     incorrect_answers: ["Hexagon", "Circle", "Triangle"],
     question: "What geometric shape is generally used for stop signs?"
},
{
     correct_answer: "Brazil",
     incorrect_answers: ["China", "South Korea", "United States of America"],
     question: "Which country, not including Japan, has the most people of japanese decent?"
},
{
     correct_answer: "Metropolitan Line",
     incorrect_answers: ["Circle Line", "Bakerloo Line", "Victoria Line"],
     question: "What was the first ever London Underground line to be built?",
},
{
     correct_answer: "7",
     incorrect_answers: ["8", "9", "10"],
     question: "How many colors are there in a rainbow?",
},
{
     correct_answer: "Kentucky Fried Chicken",
     incorrect_answers: ["Kentucky Fresh Cheese", "Kibbled Freaky Cow", "Kiwi Food Cut"],
     question: "What do the letters of the fast food chain KFC stand for?"
},
{
     correct_answer: "Richard Branson",
     incorrect_answers: ["Alan Sugar", "Donald Trump", "Bill Gates"],
     question: "Virgin Trains, Virgin Atlantic and Virgin Racing, are all companies owned by which famous entrepreneur?   "
},
{
     correct_answer: "Skin",
     incorrect_answers: ["Heart", "large Intestine", "Liver"],
     question: "What is the largest organ of the human body?"
}
]
$(document).ready(function(){
//array of current question 


let start= 0;
let end = questionArray.length
let pickedquestion
let currentQueAndAns = []
/*
           Section A
In this section, I randomly pick a number and  push it into a currentQueAndAns array
*/ 
//generating random question without repeat
function randomQuestion(){
for (var i = 0; i < end; i++) {
  
 let randomIndex = Math.floor(Math.random() * (end-start)+start)
  pickedquestion = questionArray[randomIndex]
 questionArray[randomIndex] = questionArray[start]
     //populate the randomly picked question
     questionArray[start] = pickedquestion
    
     //increment start
     start++
 }

 currentQueAndAns.push(pickedquestion)
console.log(currentQueAndAns)


//hold correct answer
let correctAnswerArr = [currentQueAndAns[0].correct_answer]
console.log(correctAnswerArr)

//holds all answers
let allAnswersArray = [currentQueAndAns[0].correct_answer,currentQueAndAns[0].incorrect_answers[0],currentQueAndAns[0].incorrect_answers[1],currentQueAndAns[0].incorrect_answers[2] ];
//shuffle all answer
 allAnswersArray.sort(function(){ return Math.random()-0.5})
 console.log(allAnswersArray)
 
 function textChange(){
     
  //update the html
     $("#currentquestion").text(currentQueAndAns[0].question);
     $("#answer1").text(allAnswersArray[0])
     $("#answer2").text(allAnswersArray[1])
     $("#answer3").text(allAnswersArray[2])
     $("#answer4").text(allAnswersArray[3])
   //  adds a data-name attr in order to use "indexof" to check the answer against useranswer
     $("input[value ='option1']").val(allAnswersArray[0])
     $("input[value ='option2']").val(allAnswersArray[1])
     $("input[value ='option3']").val(allAnswersArray[2])
     $("input[value ='option4']").val(allAnswersArray[3])
     
     
     } textChange()
     
}randomQuestion()
     $(".submit").click(function(){
           var answers = $("input[name='answer']:checked");
           var len = answers.length;
           
            for (var i = 0; i < len; i++){
            if (answers){
                 
                 userAnswer  = answers.val()
          
            }
            //test
            }console.log(userAnswer)
          
            if (correctAnswerArr.indexOf(userAnswer) === 0){
          alert("Good job! Correct answer is "+ userAnswer)
                 
            }
            else{
               alert("Oh no!, Correct answer is "+ correctAnswerArr)
              
            }
          
          })
          $(".next").on("click", randomQuestion)




















})