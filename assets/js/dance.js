const video = document.getElementById('dance-video');
const image = document.getElementById('bearfriends');

const toggle = item => {
    if (item.classList.contains('hidden')) {
        item.classList.remove('hidden');
        item.classList.add('shown');
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.mozRequestFullScreen) {
            video.mozRequestFullScreen();
        } else if (video.webkitRequestFullscreen) {
            video.webkitRequestFullscreen();
        } else if (video.msRequestFullscreen) {
            video.msRequestFullscreen();
        }
    } else {
        item.classList.remove('shown');
        item.classList.add('hidden');
        if (video.exitFullscreen) {
            video.exitFullscreen();
        } else if (video.mozExitFullscreen) {
            video.mozExitFullScreen();
        } else if (video.webkitExitFullscreen) {
            video.webkitExitFullscreen();
        } else if (video.msExitFullscreen) {
            video.msExitFullscreen();
        }
    }
}

document.addEventListener('keydown', e => {
    if (e.code == 'KeyV') {
        toggle(video);
    } else if (e.code == 'KeyA') {
        toggle(image);
    }
})