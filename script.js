const video = document.getElementById('video')

// Promise.all([
//   faceapi.nets.tinyFaceDetector.loadFromUri('./models'), // like any face detector but it will be smaller and quicker
//   faceapi.nets.faceLandmark68Net.loadFromUri('./models'), // to register diffrent parts of the face (mouth,eyes etc..)
//   faceapi.nets.faceRecognitionNet.loadFromUri('./models'), // allow API to recognize where is my face  
//   faceapi.nets.faceExpressionNet.loadFromUri('./models'), // recognize when I'm smiling happy sad etc..
// ]).then(startVideo)

function startVideo() {
  navigator.getUserMedia(
   { video : {} },
   stream => video.srcObject = stream,
   err => console.error(err)
  )
}

video.addEventListener('play', () => {
 alert('how are you')
})