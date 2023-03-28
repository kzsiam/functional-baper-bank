//input field
function getInputFieldValueById(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = ''
    return inputFieldValue;
}

//inner text
function getTextElementValueById(elementId) {
    const textElement = document.getElementById(elementId);
    const textElementValueString = textElement.innerText;
    const textElementValue = parseFloat(textElementValueString);
    return textElementValue;
}
//set text element
function setTextElementById(elementId, newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}

document.getElementById('btn-deposit').addEventListener('click', function(){
    const newDepositAmount = document.getInputFieldValueById('deposit-field');

    const previousDepositTotal = document.getTextElementValueById('deposit-total');

    const newDepositTotal = previousDepositTotal + newDepositAmount;
    setTextElementById('deposit-total', newDepositTotal)
})