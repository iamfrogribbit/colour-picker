let input =document.getElementById('input');
const colorBox = document.getElementById('box');
const saveButton = document.getElementById('save-button');
const clearButton = document.getElementById('clear-button');
const colorWheel = document.getElementById('color-wheel');


saveButton.addEventListener('click', () => {
    input = document.getElementById('input');
    colorBox.style.backgroundColor = input.value;
    input.value = '';
})

input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        input = document.getElementById('input');
        colorBox.style.backgroundColor = input.value;
        input.value = '';
    }
})

clearButton.addEventListener('click', () => {
    document.getElementById('input').value = '';
    colorBox.style.backgroundColor = 'white';
})

colorWheel.addEventListener('click', () => {
    
})