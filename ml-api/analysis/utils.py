from textblob import TextBlob

def analyze_post(title: str, body: str):
    word_count = len(body.split())
    title_length = len(title)
    sentiment = TextBlob(body).sentiment.polarity

    sentiment_label = (
        "Positive" if sentiment > 0.1 else
        "Negative" if sentiment < -0.1 else
        "Neutral"
    )

    return {
        "wordCount": word_count,
        "titleLength": title_length,
        "sentiment": sentiment_label
    }
