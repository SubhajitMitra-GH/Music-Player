const button = document.querySelector('.play-pause');
const icon = button.querySelector('i');
const audio = document.getElementById('audio');
const seekSlider = document.querySelector('.seek_slider');
const name2=document.querySelector('.artist');
const image2=document.querySelector('img');
const songname=document.querySelector('h1');
const musiclist=[
    {
        name:'A lot',
        image:"cov_images/A_lot.jpg",
        artist:"21 Savage",
        song:"music/Alot.mp3"
    },
    {
        name:"Alright",
        image:"cov_images/Alright.jpeg",
        artist:"Kendrick Lamar",
        song:'music/Alright.mp3'
    },
    {
        name:"Talking to the Moon",
        image:"cov_images/moon.jpeg",
        artist:"Bruno Mars",
        song:'music/moon.mp3'
    },
    {
        name:"SICKO MODE",
        image:"cov_images/SICKO_MODE.jpg",
        artist:"Travis Scott",
        song:'music/SICKOMODE.mp3'
    },
    {
        name:"Smack That",
        image:"cov_images/smack_that.jpeg",
        artist:"21 Savage",
        song:'music/SmackThat.mp3'
    }
]  
let songIndex = 0;
let isplaying=false;

//starts playing from the first song 
function playpause() {
    if (icon.classList.contains('play')) {
        icon.classList.remove('fi-sr-play', 'play');
        icon.classList.add('fi-sr-pause', 'pause');

        playSong();
        setUpdate();
    } else {
        icon.classList.remove('fi-sr-pause', 'pause');
        icon.classList.add('fi-sr-play', 'play');
        pauseSong();
    }
}

function playSong() {
audio.src=musiclist[songIndex].song;
    audio.play();
    updateProgressBar();
    isplaying=true;
}
function setUpdate(){
    name2.innerHTML=musiclist[songIndex].artist;
    image2.src=musiclist[songIndex].image;
    songname.innerHTML=musiclist[songIndex].name;
}

function pauseSong() {
    audio.pause();
    c=seekSlider.value;
    isplaying=false;
}
function prev(){
    if(songIndex===0)
        {
            songIndex=4
        }
        else{
            songIndex-=1;
        }
        if(isplaying===true){
            playSong();
            setUpdate();
            }
            else{
                setUpdate();
            }
}
function nect(){
    if(songIndex===4){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    if(isplaying===true){
    playSong();
    setUpdate();
    }
    else{
        setUpdate();
    }
}
function updateProgressBar() {

    audio.addEventListener('timeupdate', () => {
        const progress =(audio.currentTime / audio.duration) * 100;
           seekSlider.value = progress;
    });
}

function seekTo() {
    const seekto = audio.duration * (seekSlider.value / 100);
    audio.currentTime = seekto;
}

