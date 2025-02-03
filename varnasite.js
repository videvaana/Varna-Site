const reservationForm = document.getElementById("reservation-form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const roomType = document.getElementById("room-type");
const numGuests = document.getElementById("num-guests");
const numNights = document.getElementById("num-nights");
const priceOutput = document.getElementById("price-output");
const firstNameError = document.getElementById("first-name-error");
const lastNameError = document.getElementById("last-name-error");
const phoneError = document.getElementById("phone-error");
const emailError = document.getElementById("email-error");

roomType.value = "single";
numGuests.value = 1;
numNights.value = 1;

function calculatePrice() {
    let price = 0;
    switch (roomType.value) {
        case "single":
            price = 50;
            break;
        case "double":
            price = 75;
            break;
        case "suite":
            price = 100;
            break;
    }
    price *= numGuests.value;
    price *= numNights.value;
    priceOutput.innerHTML = price;
}

firstName.addEventListener("input", validateFirstName);
lastName.addEventListener("input", validateLastName);
phone.addEventListener("input", validatePhone);
email.addEventListener("input", validateEmail);
roomType.addEventListener("input", calculatePrice);
numGuests.addEventListener("input", calculatePrice);
numNights.addEventListener("input", calculatePrice);

function validateFirstName() {
    if (firstName.value === "") {
        firstNameError.textContent = "Името е задължително";
    } else {
        firstNameError.textContent = "";
    }
}

function validateLastName() {
    if (lastName.value === "") {
        lastNameError.textContent = "Фамилията е задължителна";
    } else {
        lastNameError.textContent = "";
    }
}

function validatePhone() {
    const phoneNumberPattern = /^0\d{9}$/;
    if (phone.value === "") {
        phoneError.textContent = "Телефонен номер е задължителен";
    } else if (!phoneNumberPattern.test(phone.value)) {
        phoneError.textContent = "Телефонният номер трябва да е 10 цифрен";
    } else {
        phoneError.textContent = "";
    }
}

function validateEmail() {
    if (!email.validity.valid) {
        emailError.textContent = "Моля въведете валиден имейл";
    } else {
        emailError.textContent = "";
    }
}

reservationForm.addEventListener("submit", function(event) {
    event.preventDefault();
    validateFirstName();
    validateLastName();
    validatePhone();
    validateEmail();
    if(firstNameError.textContent === "" && lastNameError.textContent === "" && phoneError.textContent === "" && emailError.textContent === "")
        window.location.href="payment.html"
});