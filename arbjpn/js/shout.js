const stringToShout =prompt("What do you want to shout?");
const shout = stringToShout.toUpperCase();
const shoutMessage = `<h2>The message to shout is: ${shout}!!</h2>`;

//Display the Value of a string on a page
document.querySelector('main').innerHTML = shoutMessage;
// console.log(shoutMessage);