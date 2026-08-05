//all music logic

const audio = document.getElementById("audioPlayer");
const cover = document.getElementById("cover");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const progressBar = document.getElementById("progressBar");
const currentTime = document.getElementById("currentTime");
const duration = document.getElementById("duration");

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

document.addEventListener("click", startMusic, {

    once: true

});