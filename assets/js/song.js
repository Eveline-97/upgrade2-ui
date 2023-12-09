//check if first four letters are GIFT
const correctLetters = ['G', 'I', 'F', 'T'];
const correctLetters2 = ['C', 'A', 'K', 'E'];
const enter = document.getElementById('enter');
const letterInputs = document.getElementsByClassName('letter');
const correct = document.getElementById('correct');

/*
const validate = word => {
    for (let i = 0; i < correctLetters.length; i++) {
        if (word.charAt(i).toUpperCase() != correctLetters[i]) { return false; }
    }
    return true;
}
*/

const validate = () => {
    for (let i = 0; i < correctLetters.length; i++) {
        let selector = document.getElementById(`letter${i+1}`);
        console.log(selector.value);
        if (selector.value.toUpperCase() != correctLetters[i] && 
        selector.value.toUpperCase() != correctLetters2[i]) { return false; }
    }
    return true;
}

enter.addEventListener('click', async () => {
    if (validate()) {
        await playAudio(rightSound);
        enter.classList.add('hidden');
        correct.classList.add('shown');
        correct.classList.remove('hidden');
    } else {
        await playAudio(wrongSound);
        window.alert('Wrong word! Try again.');
    }
})