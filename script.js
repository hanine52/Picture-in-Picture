const videoElement = document.getElementById('video');
const button =  document.getElementById('button');


// Prompte to select media screen, pass to video element , then play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        
    }
}


button.addEventListener('click', async () => {
    // Disable the button
    button.disabled = true;
    // Start Picture in Picture
    await videoElement.requestPictureInPicture();
    // Reset the button 
    button.disabled = false;
});

selectMediaStream();