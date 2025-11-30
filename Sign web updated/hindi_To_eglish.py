import speech_recognition as sr
from googletrans import Translator
from langdetect import detect

def listen_and_translate():
    recognizer = sr.Recognizer()
    translator = Translator()

    with sr.Microphone() as source:
        print("🎤 Speak something in English or Hindi...")
        recognizer.adjust_for_ambient_noise(source)
        audio = recognizer.listen(source)

    try:
        # Recognize speech
        text = recognizer.recognize_google(audio, language="hi-IN")
        #print(f"🗣 Detected Speech: {text}")

        # Detect language
        lang = detect(text)
        #print(f"🌐 Detected Language: {lang}")

        # If it's not English, translate to English
        if lang != "en":
            translated = translator.translate(text, dest="en")
            print(f"✅ Translated to English: {translated.text}")
        else:
            print(f"✅ English Text: {text}")

    except sr.UnknownValueError:
        print("❌ Sorry, could not understand the audio.")
    except sr.RequestError:
        print("⚠️ Could not request results; check your internet connection.")

if __name__ == "__main__":
    listen_and_translate()
