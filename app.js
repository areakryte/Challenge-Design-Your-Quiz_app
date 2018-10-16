/* I know this code is easily compromised.
* If you are new to javascript, take a look and see how you can compromise the code.
* Have fun!
*/
var correctAnswers = 0;
var count = 0;
var answerKey = [1,3,4,1,2];
var quizQuestions = generateQuestion();
var answers = [];

function onStart(event){
  $(".start").remove();

  answers.push(loadQuestions(quizQuestions[count]));
  count ++;



}

function generateQuestion()
{
  var questions = [];
  questions.push("What is the one type of aquatic plant?");
  questions.push("Which plant grows red?");
  questions.push("Which one of these plants grows on the surface of water?");
  questions.push("Which substrate is a poor growing medium?");
  questions.push("What wattage is the minium required for a high light plant?");

  var answerOne = [];
  answerOne.push("Hygrophila Corymbosa"); //Temple Plant Correct Question1
  answerOne.push("Betta Splendens"); //Betta Fish
  answerOne.push("Daucus Carota subsp. Sativus"); //An orange carrot
  answerOne.push("Gravel"); //Correct Question4 Gravel sucks
  answerOne.push("2 watts"); //Med. lighting

  var answerTwo = [];
  answerTwo.push("Aloe Vera"); //Aloe, just aloe
  answerTwo.push("Pepsini"); //Tarantula Hawk
  answerTwo.push("Conium Maculatum"); //Hemlock that kills Socrates
  answerTwo.push("Flourite"); //Good, sharp but messy
  answerTwo.push("3 watts"); //Correct Question5

  var answerThree = [];
  answerThree.push("Brassica Oleracea var. Gemmifera"); //Brussel Sprouts
  answerThree.push("Ludwigia Repens"); //Water Primrose Correct Question2
  answerThree.push("Bellis Perennis"); //The common daisy
  answerThree.push("Sand"); //Some plants perfer sand, but tricky
  answerThree.push("1 watt"); //Low light

  var answerFour = [];
  answerFour.push("Paraponera clavata");
  answerFour.push("Asclepias");
  answerFour.push("Lemnoideae"); //Duckweed Correct Question3
  answerFour.push("Soil"); //It's pretty good
  answerFour.push("5 watts"); //Super high light

  var newSection = [];

  for(var i = 0; i <5; i++){
    newSection.push("<div class=\"questions\"><h2>" + questions[i] + "</h2>" +
    "<input type=\"radio\" name=\"q1\" value=\"1\">" + answerOne[i] +"<br>" +
    "<input type=\"radio\" name=\"q1\" value=\"2\">" + answerTwo[i] +"<br>" +
    "<input type=\"radio\" name=\"q1\" value=\"3\">" + answerThree[i] +"<br>" +
    "<input type=\"radio\" name=\"q1\" value=\"4\">" + answerFour[i] +"<br>" +
    "<button class=\"next\">Next</button>" +
    "</div>");
  }

  return newSection;
}

function loadQuestions(arr){
  $("body").append(arr);
}

function quizResults(){
  $("body").append("<div class=\"results\"><h1>Results</h1></div>");
  $("<p>Number Correct</p><br><p>" + 0 + "/5</p>").appendTo(".results");
}

$(document.body).on("click", ".next",function(event){
  event.preventDefault();
  $(".questions").remove();
  answers.push(loadQuestions(quizQuestions[count]));
  count = count + 1;

  if(count > 5){
    quizResults();
  }
});
