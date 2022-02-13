// VARIABLES AND STRING CHALLENGE

//1. Declare variables and capture input.
const adjective = prompt("Type any adjective you know.");
const relativeName = prompt("Type any name that pops in your head.");
const verb = prompt("Type any verb you can think off.");
const friendsName = prompt("Type the name of your closest friends.");
//2. Combine the input with other words to create a story.
const sentence = 
    `<p> ${adjective} year have passed and the COVID still not gone away.
    ${relativeName} goes to the supermarket to buy a lot of vegetables and fruits.
    ${relativeName} really is very helpful not only to others but to animals too, 
    ${friendsName} fell off the bridge after falling in love to the person who have been falling in love the to view of the New York Gotham City.</p>`;
    console.log("The adjective was " + adjective);
 //3. Display the story as a <p> inside the <main> element.
document.querySelector('main').innerHTML = sentence;