let input =document.getElementById('input');
const colorBox = document.getElementById('box');
const saveButton = document.getElementById('save-button');
const clearButton = document.getElementById('clear-button');
const colorWheel = document.getElementById('color-wheel');


function save() {
    input = document.getElementById('input');
    colorBox.style.backgroundColor = input.value;
    localStorage.setItem('savedColor', input.value)
    localStorage.getItem('savedColor')
    input.value = '';
}

saveButton.addEventListener('click', save)

input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        save()
    }
})

clearButton.addEventListener('click', () => {
    document.getElementById('input').value = '';
    colorBox.style.backgroundColor = 'white';
})

function firstLoad() {
    input.value = localStorage.getItem('savedColor')
    save()
}

firstLoad()

// colorWheel.addEventListener('click', () => {
    
// })