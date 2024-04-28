var videoPlayer = document.querySelector(".video-player"); 
var myVideo = document.getElementById("myVideo");

function stopVideo() {
    videoPlayer.style.display = "none"; 
}

function playVideo(file) {
    myVideo.src = file;
    videoPlayer.style.display = "block"; 
}


videoPlayer.addEventListener('mouseover', function() {
    myVideo.play(); 
});


videoPlayer.addEventListener('mouseout', function() {
    myVideo.pause(); 
});
