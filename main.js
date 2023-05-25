const videoFile = document.getElementById('video-file'),
	  videoButton = document.getElementById('video-button')
	  


function playPause(){
	if (videoFile.paused) {
		//play video
		videoFile.play()

		//hide video play button
        videoButton.style.display = 'none'

	}
	
}

videoButton.addEventListener('click',playPause)