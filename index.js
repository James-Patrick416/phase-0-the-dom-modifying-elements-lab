// Write your code here!
// Remove the main element from the DOM
document.querySelector("main").remove();

// Create a new h1 element
const newHeader = document.createElement("h1");

// Set its id to 'victory'
newHeader.id = "victory";

// Set its text content
newHeader.textContent = "James Patrick is the champion";

// Append it to the body
document.body.append(newHeader);
