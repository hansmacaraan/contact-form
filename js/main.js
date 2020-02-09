

function updateValue(){
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let email = document.getElementById('email').value;
    let phoneNumber = document.getElementById('phoneNumber').value;
    let city = document.getElementById('city').value;
    let mailMessage = document.getElementById('mailMessage').value;

    let firstNameOutput = document.getElementById('firstNameOutput');
    let lastNameOutput = document.getElementById('lastNameOutput');
    let emailOutput = document.getElementById('emailOutput');
    let phoneNumberOutput = document.getElementById('phoneNumberOutput');
    let cityOutput = document.getElementById('cityOutput');
    let mailMessageOutput = document.getElementById('mailMessageOutput');

    firstNameOutput.innerHTML = 'firstName: '+ firstName;
    lastNameOutput.innerHTML = 'lastName: ' + lastName;
    emailOutput.innerHTML = 'email: ' + email;
    phoneNumberOutput.innerHTML = 'phoneNumber: ' + phoneNumber;
    cityOutput.innerHTML = 'city: ' + city;
    mailMessageOutput.innerHTML = 'mailMessage: ' + mailMessage;
}