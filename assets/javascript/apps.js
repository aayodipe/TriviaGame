    // Array of objects of questions and answer
    let questionArr = [{
     question: "Which of the following collision avoidance systems helps airplanes avoid colliding with each other?",
     correct_answer: "TCAS",
     incorrect_answers: ["GPWS", "OCAS", "TAWS"],

},

{
     correct_answer: "Mike",
     incorrect_answers: ["Matthew", "Mark", "Max"],
     question: "What name represents the letter &quot;M&quot; in the NATO phonetic alphabet?"
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
// //length of the array
// var start = 0   
// let  end = questionArr.length
  
//   function randomIndex(){  
//        //get randomIndex with no repeat  
//      let randomIndex = Math.floor(Math.random()* (end-start)) + start
//      // select a random question
//      let selectedQuestion = questionArr[randomIndex]
//      //swap the selected question to index [0]
//      questionArr[randomIndex]= questionArr[start]
//     // populate the selected question
//      questionArr[start] = selectedQuestion
//      //increment the start
//      start++
//      //test
//      console.log(selectedQuestion)
//   }randomIndex()





   



//populate the question to the question section 
// let questionPiked = 
// polulate the answers to the answer sections
// push the correct answers to correct answer array 
// push the wrong answers to wrong answers array







// change the html with the array index
// let questionAsked = document.getElementById("currentquestion");
// questionAsked.innerHTML = arrayQuestion[0]




// function startQuest() {


//loop  over the array to pick an element
// for (var i = 0; i < end; i++) {
//      //Random index of the array
//      let randomIndex = Math.floor(Math.random() * (end - start)) + start

//      //Get the random element
//      pickedquestion = questionArr[randomIndex]
   
//      //swap the random element to the first element
//      questionArr[randomIndex] = questionArr[start]
//      //populate the randomly picked question
//      questionArr[start] = questionPicked
    
//      //increment start
//      start++
//        //testing
     
       
// }startQuest() 



// function startTimer(duration,display) {
// var timer = duration, minutes, seconds;
// setInterval(function (timer) {
//    minutes = parseInt(timer / 60)
//    seconds = parseInt(timer % 60);

//    minutes = minutes < 10 ? "0" + minutes : minutes;
//    seconds = seconds < 10 ? "0" + seconds : seconds;

//    display.textContent = minutes + ":" + seconds;

//    if (--timer < 0) {
//        timer = duration;
//    }
// }, 1000);
// }

// window.onload = function () {
// var fiveMinutes = 605,
//    display = document.querySelector('.timeleft');
// startTimer(fiveMinutes, display);
// };







//Make the first keyword the question and the other keywords the answers

//Set time for the questions
//Make user to answer the question 
//listen to user value 
//Determine if a question was correctly answered or wrongly answer
//
//Display the next question



//populate all the question on the page 
//set all but one to display none
//write a function that compare the user value with the correct answer
//write a function that display the next question on the page after a set time