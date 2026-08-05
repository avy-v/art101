//all music logic

const audio = document.getElementById("audioPlayer");
const cover = document.getElementById("cover");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const progressBar = document.getElementById("progressBar");
const currentTime = document.getElementById("currentTime");
const duration = document.getElementById("duration");

const card = document.getElementById("nowPlaying");
//const audio = document.getElementById("audioPlayer");
const playButton = document.getElementById("playButton");
//const progressBar = document.getElementById("progressBar");
//const currentTime = document.getElementById("currentTime");
//const duration = document.getElementById("duration");

//playButton.addEventListener("click", () => {
//    audio.play();
//    showNotification();

//});

function showNotification(){
    card.animate(
        [
            {
                transform:"translateX(-500px)",
                opacity:0
            },
            {
                transform:"translateX(15px)",
                opacity:1,
                offset:.8
            },
            {
                transform:"translateX(0)",
                opacity:1
            }
        ],

        {
            duration:700,
            easing:"cubic-bezier(.22,1,.36,1)",
            fill:"forwards"
        }
    );

    setTimeout(hideNotification,20000);

}

//function showNotification(song){
//    const card = document.getElementById("nowPlaying");
//    card.classList.add("show");
//    clearTimeout(card.hideTimer);
//    card.hideTimer = setTimeout(() => {
//        card.classList.remove("show");
//    }, 5000);
//}

function hideNotification() {
    card.animate(

        [
            {
                transform:"translate(0)",
                opacity:1
            },

            {
                transform:"translateX(-500px)",
                opacity:0
            }
        ],
        
        {
            duration:700,
            easing:"ease-in",
            fill:"forwards"
        }
    );
}

audio.addEventListener("timeupdate", () => {
    const percent =
        (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = percent + "%";
    currentTime.textContent = formatTime(audio.currentTime);
    duration.textContent = formatTime(audio.duration);
});

function formatTime(seconds) {
    if(isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return mins + ":" + secs.toString().padStart(2,"0");
}

let isPlaying = false;

let currentSongIndex = 0;

let currentSong = playlist[currentSongIndex];

function loadSong(song){
    audio.src = song.audio;
    cover.src = song.cover;
    title.textContent = song.title;
    artist.textContent = song.artist;
    audio.load();
    showNotification(song);
}

function playSong(){
    audio.play();
    isPlaying = true;
}

function pauseSong(){
    audio.pause();
    isPlaying = false;
}

function nextSong(){
    currentSongIndex++;
    if(currentSongIndex >= playlist.length){
        currentSongIndex = 0;
    }
    currentSong = playlist[currentSongIndex];
    loadSong(currentSong);
    playSong();
}

loadSong(currentSong);

audio.addEventListener("ended", ()=>{
    nextSong();
});

const settings = {
    shuffle:false,
    repeat:false,
    volume:0.5,
};

function startMusic() {

    playSong();

}

document.addEventListener("click", startMusic, {

    once: true

});