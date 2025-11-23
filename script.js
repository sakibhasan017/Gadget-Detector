let model;
const preview = document.getElementById("preview");
const resultText = document.getElementById("resultText");
const loader = document.getElementById("loader");
const fileInput = document.getElementById("fileInput");
const video = document.getElementById("video");
const canvas = document.getElementById("canvas");
const captureBtn = document.querySelector(".capture");

// Load TensorFlow model
async function loadModel() {
    resultText.innerHTML = "Loading AI model...";
    model = await tf.loadLayersModel("assets/models/model.json");
    resultText.innerHTML = "Model Loaded ✔";
}
loadModel();

// Open gallery picker
function openFile() {
    fileInput.click();
}

// Camera functions
async function startCamera() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } });
        video.srcObject = stream;
        video.classList.remove("hidden");
        preview.classList.add("hidden");
        captureBtn.classList.remove("hidden");
        resultText.innerHTML = "Point camera and capture!";
    } catch (err) {
        alert("Camera access denied or not supported.");
    }
}

// Capture photo from camera
function takePhoto() {
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(video, 0, 0);
    const dataUrl = canvas.toDataURL("image/jpeg");
    preview.src = dataUrl;
    preview.classList.remove("hidden");
    video.classList.add("hidden");
    captureBtn.classList.add("hidden");
    predictImage(preview);
}

// Handle gallery image
fileInput.addEventListener("change", async (event) => {
    const file = event.target.files[0];
    if (!file) return;
    preview.src = URL.createObjectURL(file);
    preview.classList.remove("hidden");
    video.classList.add("hidden");
    captureBtn.classList.add("hidden");
    await predictImage(preview);
});

// Prediction function
async function predictImage(img) {
    loader.classList.remove("hidden");
    resultText.innerHTML = "Processing...";

    await new Promise(r => setTimeout(r, 200));

    const tensorImg = tf.browser.fromPixels(img)
        .resizeNearestNeighbor([224, 224])
        .toFloat()
        .div(255.0)
        .expandDims();

    const prediction = await model.predict(tensorImg).data();

    const bestIdx = prediction.indexOf(Math.max(...prediction));

    const labels = await fetch("assets/models/metadata.json")
        .then(res => res.json())
        .then(data => data.labels);

    const bestLabel = labels[bestIdx];
    const confidence = prediction[bestIdx];

    loader.classList.add("hidden");

    if (confidence < 0.75) {
        resultText.innerHTML = "Can't Detect. Try again!";
    } else {
        resultText.innerHTML = `Detected: <span style="color:#0078ff">${bestLabel}</span>`;
    }

    tensorImg.dispose();
}
