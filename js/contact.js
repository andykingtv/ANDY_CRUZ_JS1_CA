const contactForm = document.querySelector("#contactForm");
contactForm.addEventListener("submit", validateForm);

function validateForm(event) {
  event.preventDefault();

  const contactName = document.querySelector("#name");
  const contactNameError = document.querySelector("#nameError");
  const contactNameValue = contactName.value;

  if (checkInputLength(contactNameValue) === true) {
    contactNameError.style.display = "none";
  } else {
    contactNameError.style.display = "block";
  }

  const contactAnswer = document.querySelector("#answer");
  const contactAnswerError = document.querySelector("#answerError");
  const contactAnswerValue = contactAnswer.value;

  if (contactAnswerValue.length > 9) {
    contactAnswerError.style.display = "none";
  } else {
    contactAnswerError.style.display = "block";
  }

  const contactEmail = document.querySelector("#email");
  const contactEmailError = document.querySelector("#emailError");
  const invalidEmailError = document.querySelector("#invalidEmailError");

  const contactEmailValue = contactEmail.value;

  if (checkInputLength(contactEmailValue) === true) {
    contactEmailError.style.display = "none";
  } else {
    contactEmailError.style.display = "block";
  }

  if (validateEmail(contactEmailValue) === true) {
    invalidEmailError.style.display = "none";
  } else {
    invalidEmailError.style.display = "block";
  }

  const contactAddress = document.querySelector("#address");
  const contactAddressError = document.querySelector("#addressError");
  const contactAddressValue = contactAddress.value;

  if (contactAddressValue.length > 14) {
    contactAddressError.style.display = "none";
  } else {
    contactAddressError.style.display = "block";
  }
}

function checkInputLength(value) {
  const trimmedValue = value.trim();

  if (trimmedValue.length > 0) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(contactEmail) {
  const regEx = /\S+@\S+\.\S+/;
  return regEx.test(contactEmail);
}

/* This is literally from the "FORM VALIDATION" lesson we had. 
Hard to kind of work around with different variable names etc. Just did the same 
with the different properties  */
