import { clearHtml } from "./components/createHtml.js";
import { createMessage } from "./components/createMessage.js";

const form = document.querySelector("#contactform");
const email = document.querySelector("#email");
const emailError = document.querySelector("#email-error");
const name = document.querySelector("#name");
const nameError = document.querySelector("#name-error");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subject-error");
const adress = document.querySelector("#adress");
const adressError = document.querySelector("#adress-error");
const messageContainer = document.querySelector(".message");

form.addEventListener("submit", validateForm);

function validateForm(event) {
  event.preventDefault();
  clearHtml(messageContainer);

  if (validateLength(name.value, 1, nameError) && validateLength(subject.value, 10, subjectError) && validateEmail(email.value) && validateLength(adress.value, 25, adressError)) {
    createMessage(messageContainer, "success", "Your message has been successfully sent");
    form.reset();
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const result = regEx.test(email);

  if (result) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }
  return result;
}

function validateLength(value, length, errorMessage) {
  if (value.trim().length >= length) {
    errorMessage.style.display = "none";
    return true;
  } else {
    errorMessage.style.display = "block";
    return false;
  }
}
