const toggleEditableElement = document.querySelector('.toggle-editable');
const printButtonElement = document.querySelector('.print-button');
const formElement = document.querySelector('.card-form');


toggleEditableElement.addEventListener('click', toggleEditable);
printButtonElement.addEventListener('click', printCard);

function toggleEditable() {
  let isFormEditable = formElement.getAttribute('contentEditable');
  if (isFormEditable) {
    formElement.removeAttribute('contentEditable');
  } else {
    formElement.setAttribute('contentEditable', 'true');
    formElement.focus();
  }
}

function printCard() {
  window.print();
}