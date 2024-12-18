const userName = "mahin"; // User's name variable
const repoCount = 20;

// Logging user name and repo count using template literals
console.log(`Hello my name is ${userName} and my repo count is ${repoCount}`);

// Creating a string object for the game name
const gameDetails = new String("hitesh-hc-com");

// Accessing the first character of the string
console.log(gameDetails[0]); // First character of the game name

// Checking the prototype of the string object
console.log(gameDetails.__proto__);

// Logging the length of the string and converting it to uppercase
console.log(gameDetails.length); // Length of the string
console.log(gameDetails.toUpperCase()); // Converting the game name to uppercase

// Extracting the character at index 2
console.log(gameDetails.charAt(2)); // Character at index 2

// Finding the index of character 't' in the string
console.log(gameDetails.indexOf("t")); // Index of character 't'

// Extracting a substring from the game name (first 4 characters)
const partialString = gameDetails.substring(0, 4);
console.log(partialString); // First 4 characters

// Using slice with negative index to extract a portion of the string (starting from the 8th last character to the 4th)
const slicedString = gameDetails.slice(-8, 4);
console.log(slicedString); // Portion of the string from the negative index

// String with extra spaces
const spacedString = "   hitesh    ";
console.log(spacedString); // String with spaces at both ends
console.log(spacedString.trim()); // Removing spaces from both ends

// URL string with encoded characters
const urlString = "https://www.youtube.com";

// Replacing '%20' with a dash in the URL
console.log(urlString.replace("%20", "-")); // Replacing encoded space with a dash

// Checking if the string contains the word 'mahin'
console.log(urlString.includes("mahin")); // Checking for 'mahin'

// Splitting the game name string based on '-'
console.log(gameDetails.split("-")); // Splitting game name into an array
