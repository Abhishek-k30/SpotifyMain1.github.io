console.log("Welcome to Spotify");
function  myplay(params) {
    


// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('Romantic/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
 

    

let Romantic = [
    {songName: "Raatan Lambiya", filePath: "Romantic/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Tum Mile", filePath: "Romantic/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Mann Mera", filePath: "Romantic/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Mast Magan", filePath: "Romantic/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Zara sa", filePath: "Romantic/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Jashn-e-bahara", filePath: "Romantic/6.mp3", coverPath: "covers/6.jpg"},
     
     
     
     
]
let bollywood=[
    {songName: "Raatan Lambiya", filePath: "bollywood/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Tum Mile", filePath: "bollywood/2.mp3", coverPath: "covers/2.jpg"},
]

 
 



 
 
    

 
 
  
 
 


songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = Romantic[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = Romantic[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `Romantic/${songIndex+1}.mp3`;
        masterSongName.innerText = Romantic[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>5){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `Romantic/${songIndex+1}.mp3`;
    masterSongName.innerText = Romantic[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `Romantic/${songIndex+1}.mp3`;
    masterSongName.innerText = Romantic[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

}