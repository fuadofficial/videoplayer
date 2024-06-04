let playBtn = document.getElementById("play-btn");
let video = document.querySelector(".video");
let progressBar = document.querySelector(".progress-bar");
let progressRange = document.querySelector(".progress-range");

let isVideoPlaying = false;

playBtn.addEventListener("click", playOrPauseVideo);
video.addEventListener("click", playOrPauseVideo);
video.addEventListener("timeupdate", updateProgressBar);
progressRange.addEventListener("click", updateSeekBar);

// video play and pause function
function playOrPauseVideo() {
  if (!isVideoPlaying) {
    video.play();
    isVideoPlaying = true;
    playBtn.classList.replace("fa-play", "fa-pause");
  } else {
    video.pause();
    isVideoPlaying = false;
    playBtn.classList.replace("fa-pause", "fa-play");
  }
}

// click space bar,then stop video
document.onkeydown = function (event) {
  switch (event.keyCode) {
    case 32:
      event.preventDefault();
      playOrPauseVideo();
      break;
  }
};

// Update progress bar
function updateProgressBar(event) {
  let currentTime = event.target.currentTime;
  let duration = event.target.duration;

  progressBar.style.cssText = `
     width:${(currentTime / duration) * 100}%
    `;
}

// click progress bar, then video palying that place
function updateSeekBar(event) {
  let calculateWidth = progressRange.getBoundingClientRect();
  let currentPoint = event.offsetX;
  let progressBarWidth = calculateWidth;
  let currentRange =
    (event.offsetX / event.target.clientWidth) * video.duration;
  video.currentTime = currentRange;
}

var timer = 10;
  video.addEventListener('keydown', (e) => {
   event.preventDefault();
   switch (event.keyCode) {
         case 37:  
              var currentTime = video.currentTime;
              video.currentTime = currentTime - timer;
            break;
         
         case 39:
               var currentTime = video.currentTime;
              video.currentTime = currentTime + timer;
            break;
            }
});
