//validate numbers
const correctNumbers = [6, 4, 3, 5, 2, 1];
const correctNumbers2 = [0, 4, 0, 3, 2, 3];
let numbers = [0, 0, 0, 0, 0, 0];
const enter = document.getElementById('enter');
const correct = document.getElementById('correct');

const validate = () => {
    for (let i = 0; i < correctNumbers.length; i++) {
        let n = document.getElementById(`n${i}`);
        if (n.value != correctNumbers[i] && n.value != correctNumbers2[i]){ return false };
    }
    return true;
}

enter.addEventListener('click', async () => {
    if (validate()) {
        await playAudio(rightSound);
        enter.classList.add('hidden');
        correct.classList.remove('hidden');
        correct.classList.add('shown');
    } else {
        await playAudio(wrongSound);
        window.alert('Wrong numbers! Try again.');
    }
})