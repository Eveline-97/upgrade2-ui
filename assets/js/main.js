/*OPEN NEXT PAGE*/

const stories = {
    index: 'dance.html',
    dance: 'sequencer.html',
    sequencer: 'song.html',
    song: 'congrats.html'
}

const previousStories = {
    dance: 'index.html',
    sequencer: 'dance.html',
    song: 'sequencer.html',
    congrats: 'song.html'
}

let currentPage = document.title.toLowerCase();
const next = document.getElementById('next');
const nextSound = document.getElementById('next-sound');
const rightSound = document.getElementById('right-sound');
const wrongSound = document.getElementById('wrong-sound');

async function playAudio(snd) {
    return snd.play();
}
const delay = ms => new Promise(res => setTimeout(res, ms));

//show next
document.addEventListener('keydown', e => {
    if (e.code == 'ArrowRight') {
        next.classList.add('shown');
        next.classList.remove('hidden');
    } else if (e.code == 'ArrowLeft') {
        next.classList.add('hidden');
        next.classList.remove('shown');
    } else if (e.code == 'ArrowDown') {
        location.replace(previousStories[currentPage]);
    } else if (e.code == 'ArrowUp') {
        location.replace(stories[currentPage]);
    }
})

next.addEventListener('click', async () => {
    await playAudio(nextSound);
    await delay(500);
    location.replace(stories[currentPage]);
})