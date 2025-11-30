import speech_recognition as sr
from googletrans import Translator

# pip install SpeechRecognition pyaudio googletrans==4.0.0-rc1

# Initialize recognizer and translator
recognizer = sr.Recognizer()
translator = Translator()

# Use microphone as source
with sr.Microphone() as source:
    print("Say something in Hindi...")
    recognizer.adjust_for_ambient_noise(source)
    audio = recognizer.listen(source)

    try:
        # Recognize Hindi speech
        hindi_text = recognizer.recognize_google(audio, language='hi-IN')
        print("Hindi Text:", hindi_text)

        # Translate to English
        translation = translator.translate(hindi_text, src='hi', dest='en')
        print("Translated to English:", translation.text)

    except sr.UnknownValueError:
        print("Could not understand the audio")
    except sr.RequestError:
        print("Could not request results; check your internet connection")
