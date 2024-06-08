document.addEventListener("DOMContentLoaded", function() {
    const inquireButton = document.getElementById("submit");
    const verificationInput = document.getElementById("verificationInput");
    const generatedCode = document.getElementById("generatedCode");

    // Disable the button and set the initial style
    inquireButton.disabled = true;
    inquireButton.style.backgroundColor = "transparent";

    // Generate a random code
    function generateRandomCode() {
        let code = Math.random().toString(36).substring(2, 10);
        generatedCode.textContent = code;
    }

    generateRandomCode();

    // Function to check if the button should be enabled
    function checkFormValidity() {
        if (verificationInput.value === generatedCode.textContent) {
            inquireButton.disabled = false;
            inquireButton.style.backgroundColor = "";
        } else {
            inquireButton.disabled = true;
            inquireButton.style.backgroundColor = "transparent";
        }
    }

    // Add event listener to check input against the generated code
    verificationInput.addEventListener("input", checkFormValidity);

    // Handle the display of additional inputs based on the contact method and cliff type
    document.getElementById("contact_method").addEventListener("change", function() {
        let emailInput = document.getElementById("email_contact_input");
        let phoneInput = document.getElementById("phone_contact_input");

        emailInput.style.display = "none";
        phoneInput.style.display = "none";

        if (this.value === "email_contact") {
            emailInput.style.display = "block";
        } else if (this.value === "phone_contact") {
            phoneInput.style.display = "block";
        }
    });

    document.getElementById("cliff_types").addEventListener("change", function() {
        document.querySelectorAll(".cliff-input").forEach(function(element) {
            element.style.display = "none";
        });

        if (this.value) {
            document.getElementById(this.value + "_input").style.display = "block";
        }
    });

    document.getElementById("contact_reason").addEventListener("change", function() {
        document.querySelectorAll(".contact-input").forEach(function(element) {
            element.style.display = "none";
        });

        if (this.value) {
            document.getElementById(this.value + "_input").style.display = "block";
        }
    });
});
