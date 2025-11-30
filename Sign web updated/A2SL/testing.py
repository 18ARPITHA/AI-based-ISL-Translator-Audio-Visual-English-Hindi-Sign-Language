import tkinter as tk
from tkinter import filedialog, messagebox
import cv2
import numpy as np
import pickle
from tensorflow.keras.models import load_model

# Constants
MODEL_PATH = 'A2SL\isl_model_Engtlish_Guesture.h5'
LABELS_PATH = 'A2SL\English_labels.pkl'
MAX_FRAMES = 60
FRAME_SIZE = (64, 64)

# Load model and labels
model = load_model(MODEL_PATH)
with open(LABELS_PATH, 'rb') as f:
    labels = pickle.load(f)

def extract_frames(video_path):
    cap = cv2.VideoCapture(video_path)
    frames = []
    while len(frames) < MAX_FRAMES:
        ret, frame = cap.read()
        if not ret:
            break
        frame = cv2.resize(frame, FRAME_SIZE)
        frame = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
        frames.append(frame)
    cap.release()
    frames += [np.zeros(FRAME_SIZE)] * (MAX_FRAMES - len(frames))
    return np.array(frames).reshape(1, MAX_FRAMES, FRAME_SIZE[0], FRAME_SIZE[1], 1) / 255.0

def predict_gesture(frames):
    prediction = model.predict(frames)
    return labels[np.argmax(prediction)]

def test_video_file():
    file_path = filedialog.askopenfilename(filetypes=[("Video files", "*.mp4 *.avi")])
    if not file_path:
        return
    frames = extract_frames(file_path)
    gesture = predict_gesture(frames)
    result_label.config(text=f"🧠 Predicted Gesture: {gesture}")

def test_webcam():
    cap = cv2.VideoCapture(0)
    frames = []
    messagebox.showinfo("Webcam", "Capturing gesture... Press 'q' to finish.")
    while True:
        ret, frame = cap.read()
        if not ret:
            break
        frame_resized = cv2.resize(frame, FRAME_SIZE)
        gray = cv2.cvtColor(frame_resized, cv2.COLOR_BGR2GRAY)
        frames.append(gray)
        cv2.imshow("Webcam Feed", frame)
        if cv2.waitKey(1) & 0xFF == ord('q') or len(frames) >= MAX_FRAMES:
            break
    cap.release()
    cv2.destroyAllWindows()
    frames += [np.zeros(FRAME_SIZE)] * (MAX_FRAMES - len(frames))
    frames = np.array(frames).reshape(1, MAX_FRAMES, FRAME_SIZE[0], FRAME_SIZE[1], 1) / 255.0
    gesture = predict_gesture(frames)
    result_label.config(text=f"🧠 Predicted Gesture: {gesture}")

# GUI Setup
root = tk.Tk()
root.title("Indian Sign Language Gesture Recognition")
root.geometry("400x250")
root.configure(bg="#f0f0f0")

title_label = tk.Label(root, text="ISL Gesture Recognition", font=("Helvetica", 16, "bold"), bg="#f0f0f0")
title_label.pack(pady=10)

btn_video = tk.Button(root, text="Test from Video File", command=test_video_file, width=25, bg="#4CAF50", fg="white")
btn_video.pack(pady=10)

btn_webcam = tk.Button(root, text="Test from Webcam", command=test_webcam, width=25, bg="#2196F3", fg="white")
btn_webcam.pack(pady=10)

result_label = tk.Label(root, text="🧠 Predicted Gesture: ", font=("Helvetica", 14), bg="#f0f0f0")
result_label.pack(pady=20)

root.mainloop()