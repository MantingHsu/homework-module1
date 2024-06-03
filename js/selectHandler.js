document.getElementById('contact_method').addEventListener('change', function() {
    const selectedValue = this.value;
    const contactInputs = document.querySelectorAll('.contact-input');

    // Hide all contact input fields
    contactInputs.forEach(function(input) {
        input.style.display = 'none';
    });

    // Show the selected contact input field
    if (selectedValue) {
        document.getElementById(selectedValue + '_input').style.display = 'block';
    }
});

document.getElementById('contact_reason').addEventListener('change', function() {
    const selectedValue = this.value;
    const contactReasonInputs = document.querySelectorAll('.contact-input');

    // Hide all contact reason input fields
    contactReasonInputs.forEach(function(input) {
        input.style.display = 'none';
    });

    // Show the selected contact reason input field
    if (selectedValue) {
        document.getElementById(selectedValue + '_input').style.display = 'block';
    }
});
