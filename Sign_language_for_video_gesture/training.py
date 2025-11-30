# train_isl_model.py

import os
import cv2
import numpy as np
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Conv2D, MaxPooling2D, Flatten, Dense, LSTM, TimeDistributed
from tensorflow.keras.utils import to_categorical
from sklearn.model_selection import train_test_split
import pickle

# Parameters
DATASET_PATH = 'dataset'
MODEL_PATH = 'isl_model.h5'
LABELS_PATH = 'labels.pkl'
MAX_FRAMES = 30
FRAME_SIZE = (64, 64)

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
    return np.array(frames)

def load_dataset():
    X, y, labels = [], [], []
    for label_idx, label in enumerate(sorted(os.listdir(DATASET_PATH))):
        labels.append(label)
        class_path = os.path.join(DATASET_PATH, label)
        for video_file in os.listdir(class_path):
            video_path = os.path.join(class_path, video_file)
            frames = extract_frames(video_path)
            X.append(frames)
            y.append(label_idx)
    X = np.array(X).reshape(-1, MAX_FRAMES, FRAME_SIZE[0], FRAME_SIZE[1], 1) / 255.0
    y = to_categorical(y)
    return X, y, labels

def build_model(num_classes):
    model = Sequential([
        TimeDistributed(Conv2D(32, (3, 3), activation='relu'), input_shape=(MAX_FRAMES, FRAME_SIZE[0], FRAME_SIZE[1], 1)),
        TimeDistributed(MaxPooling2D((2, 2))),
        TimeDistributed(Conv2D(64, (3, 3), activation='relu')),
        TimeDistributed(MaxPooling2D((2, 2))),
        TimeDistributed(Flatten()),
        LSTM(64),
        Dense(64, activation='relu'),
        Dense(num_classes, activation='softmax')
    ])
    model.compile(optimizer='adam', loss='categorical_crossentropy', metrics=['accuracy'])
    return model

# Main training flow
X, y, labels = load_dataset()
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

model = build_model(num_classes=len(labels))
model.fit(X_train, y_train, epochs=30, batch_size=8, validation_data=(X_test, y_test))

model.save(MODEL_PATH)
with open(LABELS_PATH, 'wb') as f:
    pickle.dump(labels, f)

print("✅ Model and labels saved!")