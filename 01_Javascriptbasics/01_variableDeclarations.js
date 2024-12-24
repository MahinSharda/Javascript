const userId = 144553; // This is my unique user ID
let userEmail = "mahin@google.com"; // My email address
var userPassword = "12345"; // Initial password
let userCity = "Mohali"; // City where
let userState; // Generally happy

// userId = 2; // Can't change this, it is fixed

// Updating my details as per new account setup
userEmail = "mahin@mahin.com"; // New email address
userPassword = "212121"; // New password for security
userCity = "Bengaluru"; // If I shift, this will change

console.log(userId); // Show my unique user ID in console

// Reminder: Avoid 'var' in modern code, stick to 'let' or 'const' for better scope control

console.table([userId, userEmail, userPassword, userCity, userState]); // Displaying details in a table
