const openCamera = document.getElementById('OpenCamera');
const snapShot = document.getElementById('snapshot');
const video = document.getElementById('vedio');
const canvas = document.getElementById('canvas');
const captureContainer = document.getElementById('captureContainer');


openCamera.addEventListener('click', async() => {
    console.log('clicked opencamera');
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
        video.srcObject = stream;
      } catch (err) {
        console.error("Error accessing webcam:", err);
      }
});

snapShot.addEventListener('click', () => {
        console.log('clicked the snapshot');
        const context = canvas.getContext('2d');
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        const dataURL = canvas.toDataURL('image/png');
        


        const img = document.createElement('img');
        img.src = dataURL;
        img.className = "h-[240px] w-[320px] object-cover transform scale-x-[-1] mt-0 rounded-md shadow-md";

        captureContainer.appendChild(img);

});