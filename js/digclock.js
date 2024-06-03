// Create a time data function
function currentTime() {
    // Declare Variables
    var d = new Date(); // Get current date
    var hr = d.getHours(); // Get current hours
    var min = d.getMinutes(); // Get current minutes 
    var sec = d.getSeconds(); // Get current seconds
    var ampm; // Declare empty variable to store AM or PM

    // Add 0 to single digits for seconds
    if (sec < 10) {
        sec = "0" + sec;
    }

    // Add 0 to single digits for minutes 
    if (min < 10) {
        min = "0" + min;
    }

    // Determine AM or PM string
    if (hr == 12) {
        ampm = "PM"; // Set to PM 
    } else if (hr > 12) {
        hr -= 12; // Deduct 12 from hours greater than 12 (military time)
        ampm = "PM"; // Set to PM
    } else {
        ampm = "AM"; // Set to AM
    }

    // Assemble time format to display
    var time = hr + ":" + min + ":" + sec + " " + ampm;

    // Display current local time on HTML element
    document.getElementById("clock").innerHTML = "Your Current Local Time: " + time;

    // Optional: Time Zone (You can implement a more precise time zone detection method)
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    document.getElementById("clock").innerHTML += " " + timeZone;
}

// Run time data function every 1 second 
setInterval(currentTime, 1000); // Setting timer 

// Initial run of time data function 
currentTime();
