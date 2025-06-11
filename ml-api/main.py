from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
class PostInput(BaseModel):
    title: str
    body: str

@app.post("/analyze")
async def analyze_post(data: PostInput):
   
    return {
        "word_count": len(data.body.split()),
        "sentiment": "positive",
        "keywords": data.title.split()
    }
