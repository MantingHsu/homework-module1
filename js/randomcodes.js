/* ------- RANDOM CODES ------- */
// Function to generate combination of characters
function generateCode() {
    // Create variables to store generated codes and the type of characters we want to show as codes
    var code = ''; // Initialize to null value
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$';
    
    // Generate character multiple times using a loop
    for (var i = 1; i <= 8; i++) {
        var char = Math.floor(Math.random() * str.length); // Randomly select a character
        code += str.charAt(char); // Append selected character to the code
    }
    return code; // Return the generated code
}

// Function to display the generated code
function displayGeneratedCode() {
    const generatedCode = generateCode();
    document.getElementById('generatedCode').textContent = generatedCode;
}

// Run the function to display the code when the page loads
window.onload = displayGeneratedCode;

// Get HTML element to display
document.getElementById("codes").innerHTML = generateCode();

// Disable Button
function disableButton() {
    document.getElementById("submit").disabled = true;
}

// Activate function
disableButton();
