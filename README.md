# Gadget Detection Model (TensorFlow.js)

This project is a **web-based object detection tool** built with a custom **Teachable Machine** model trained on **13 gadget-related classes**. The app runs directly in the browser using **TensorFlow.js**, allowing users to detect specific objects in real time through their webcam or uploaded images.

🔗 **Live Demo:**  
https://silly-piroshki-2771b0.netlify.app/

---

## 📦 About the Model

I trained a custom image classification model using **Google Teachable Machine**, consisting of **13 classes**:

1. Laptop  
2. Glasses  
3. Watch  
4. Printer  
5. CCTV Camera  
6. Chair  
7. Earphones  
8. Mouse  
9. Bike  
10. Calculator  
11. Backpack  
12. PenDrive  
13. **Unknown** – This class captures anything that does *not* belong to the above categories (to help reduce false detections).

After training, I exported the model in **TensorFlow.js** format and integrated it into a custom UI that performs real-time object detection.

---

## 🌐 What the Web App Does

✔ Detects any of the 13 gadget classes  
✔ Uses your webcam or uploaded images  
✔ Runs entirely in the browser (no backend required)  
✔ Fast and responsive thanks to TensorFlow.js   

---

## 🧩 How Others Can Modify or Improve the Model

Inside the project’s `assets/` folder, I included:

**gadget_training_model.tm**

This file can be imported back into **Teachable Machine**:

1. Go to **https://teachablemachine.withgoogle.com/**
2. Click **"Upload a project or Open project from file"**
3. Select the `gadget_training_model.tm` file
4. Add more images, remove classes, or retrain the model
5. Export again as **TensorFlow.js**
6. Replace the old model files in your project to update the web app

This makes the model **fully customizable** for anyone who wants to extend it.

---

## 🚀 How to Run Locally

If you want to run this project on your machine:

```bash
# Clone the project
git clone <your-repository-link>

# Open the folder
cd <project-folder>

# Start a local server (example using VSCode)
# Install Live Server extension, then right-click index.html > "Open with Live Server"
```

Because the model is in **TensorFlow.js**, there's **no need for Node.js, databases, or backend services.**

---

## 🛠 Technologies Used

- **TensorFlow.js**  
- **Teachable Machine**  
- **HTML / CSS / JavaScript**  
- **Netlify** (hosting)

---

## 🙌 Contribution

Anyone is free to:

- Improve the UI  
- Retrain or expand the model  
- Add more gadgets  
- Increase dataset quality  
- Optimize prediction speed  

Just remember to update the model files after retraining.


