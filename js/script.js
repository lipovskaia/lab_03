/*eslint-env browser*/
//global variables
var score1;
var score2;
var score3;
var total = 0;
var average; 

// prompt user for the test scores
score1 = window.prompt("What is the first score?");
total += parseInt(score1, 10);

score2 = window.prompt("What is the second score?");
total += parseInt(score2, 10);

score3 = window.prompt("What is the second score?");
total += parseInt(score3, 10);

average = total /3;

document.write("the first score " + score1 + "<br>");
document.write("the first score " + score2 + "<br>");
document.write("the first score " + score3 + "<br>");
document.write("Average score is: " + parseFloat(average));