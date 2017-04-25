console.log("i am here");

var inputText = document.getElementById("input");
var mybtn = document.getElementById("btn");

inputText.addEventListener("keyup", handleEnter);
mybtn.addEventListener("click", handleClick);

function handleClick(event){
  
  	var testString=inputText.value;
  	reversal(testString);
  	alphabits(testString);
  	palindrome(testString);
    console.log("testString from text box", testString);
  
 }


 
 function handleEnter(event){

  //check to see if the enter key was pressed
  if (event.which === 13) {
  	//console.log("inputText", inputText.value);
  	var testString=inputText.value;
  	reversal(testString);
  	alphabits(testString);
  	palindrome(testString);
    console.log("testString from text box", testString);
  }
 }



function reversal(testString) {

	var result = document.getElementById("output");
	reversetestString = testString.split("").reverse().join("");
	result.innerHTML += reversetestString + "<br>";
	console.log(reversetestString);

}

function alphabits(testString) {
	var result = document.getElementById("output");
	alphabittestString = testString.split("").sort().join("");
	result.innerHTML += alphabittestString + "<br>";
	console.log(alphabittestString);

}

function palindrome(testString) {
	var result = document.getElementById("output");
	newtestString = testString.split("").reverse().join("");
	console.log("testString inside palindrome", testString);
	console.log("newtestString inside palindrom", newtestString);
	if (newtestString === testString){
		result.innerHTML += testString + " is a palindrome" + "<br>";
		//console.log(testString);
	}
	
}

	//var testString = "madam";

	
