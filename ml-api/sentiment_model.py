from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class PostData(BaseModel):
    body: str

@app.post("/analyze")
def analyze_post(data: PostData):
    word_count = len(data.body.split())
    sentiment = "Positive" if "good" in data.body else "Neutral"
    return {
        "wordCount": word_count,
        "titleLength": len(data.body),
        "sentiment": sentiment
    }
