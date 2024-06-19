// selectHandler.js
document.addEventListener('DOMContentLoaded', function () {
    const contactMethodSelect = document.getElementById('contact_method');
    const cliffTypesSelect = document.getElementById('cliff_types');
    const contactReasonSelect = document.getElementById('contact_reason');

    const emailContactInput = document.getElementById('email_contact_input');
    const phoneContactInput = document.getElementById('phone_contact_input');
    const westCliffInput = document.getElementById('west_cliff_input');
    const northCliffInput = document.getElementById('north_cliff_input');
    const eastCliffInput = document.getElementById('east_cliff_input');
    const southCliffInput = document.getElementById('south_cliff_input');
    const generalInquiryInput = document.getElementById('general_inquiry_input');
    const supportInput = document.getElementById('support_input');
    const feedbackInput = document.getElementById('feedback_input');

    contactMethodSelect.addEventListener('change', function () {
        emailContactInput.style.display = 'none';
        phoneContactInput.style.display = 'none';

        if (this.value === 'email_contact') {
            emailContactInput.style.display = 'block';
        } else if (this.value === 'phone_contact') {
            phoneContactInput.style.display = 'block';
        }
    });

    cliffTypesSelect.addEventListener('change', function () {
        westCliffInput.style.display = 'none';
        northCliffInput.style.display = 'none';
        eastCliffInput.style.display = 'none';
        southCliffInput.style.display = 'none';

        if (this.value === 'west_cliff') {
            westCliffInput.style.display = 'block';
        } else if (this.value === 'north_cliff') {
            northCliffInput.style.display = 'block';
        } else if (this.value === 'east_cliff') {
            eastCliffInput.style.display = 'block';
        } else if (this.value === 'south_cliff') {
            southCliffInput.style.display = 'block';
        }
    });

    contactReasonSelect.addEventListener('change', function () {
        generalInquiryInput.style.display = 'none';
        supportInput.style.display = 'none';
        feedbackInput.style.display = 'none';

        if (this.value === 'general_inquiry') {
            generalInquiryInput.style.display = 'block';
        } else if (this.value === 'support') {
            supportInput.style.display = 'block';
        } else if (this.value === 'feedback') {
            feedbackInput.style.display = 'block';
        }
    });
});
