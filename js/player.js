//all music logic
let currentSongIndex = 0;

let currentSong = playlist[currentSongIndex];

function loadSong(song){
    audio.src = song.audio;
    cover.src = song.cover;
    title.textContext = song.title;
    artist.textContext = song.artist;
}

function playSong(){
    audio.play();
}

function pauseSong(){
    audio.pause();
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

showNotification(currentSong);

audio.addEventListener("ended", ()=>{
    nextSong();
});

const settings = {
    shuffle:false,
    repeat:false,
    volume:0.5,
};