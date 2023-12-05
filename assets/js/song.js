//check if first four letters are GIFT
const correctLetters = ['G', 'I', 'F', 'T'];
let letters = ['', '', '', ''];
const enter = document.getElementById('enter');
const letterInputs = document.getElementsByClassName('letter');
const correct = document.getElementById('correct');

const validate = word => {
    for (let i = 0; i < correctLetters.length; i++) {
        if (word.charAt(i).toUpperCase() != correctLetters[i]) { return false; }
    }
    return true;
}

enter.addEventListener('click', async () => {
    let word = document.getElementById('word').value;
    if (validate(word)) {
        await playAudio(rightSound);
        enter.classList.add('hidden');
        correct.classList.add('shown');
        correct.classList.remove('hidden');
    } else {
        await playAudio(wrongSound);
        window.alert('Wrong word! Try again.');
    }
})