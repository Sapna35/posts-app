import ctypes
import os


lib_path = os.path.abspath("libanalysis.so")  
lib = ctypes.CDLL(lib_path)

lib.word_count.argtypes = [ctypes.c_char_p]
lib.word_count.restype = ctypes.c_int

lib.sentiment_score.argtypes = [ctypes.c_char_p]
lib.sentiment_score.restype = ctypes.c_int

def analyze_post(text: str):
    text_bytes = text.encode('utf-8')
    words = lib.word_count(text_bytes)
    sentiment_code = lib.sentiment_score(text_bytes)

    sentiment = {0: 'neutral', 1: 'positive', 2: 'negative'}.get(sentiment_code, 'unknown')

    return {
        "word_count": words,
        "sentiment": sentiment
    }
