# posts-app
# 📬 Posts App with Sentiment Analysis

This full-stack application allows users to create and view blog posts with integrated sentiment analysis. The app is built using **Next.js**, **FastAPI**, **Prisma**, and **PostgreSQL**.

---
## 🔗 Live Services

| Service               | URL                                                                 |
|-----------------------|----------------------------------------------------------------------|
| Frontend (Vercel)     | [posts-eta-ashen.vercel.app](https://posts-eta-ashen.vercel.app)     |
| Node.js API           | [NodeJS Backend](https://your-node-api-url.com)                      |
| FastAPI Sentiment API | [FastAPI Backend](https://your-fastapi-url.com)                      |
| PostgreSQL DB         | [Render DB Dashboard](https://your-db-dashboard.render.com)          |

## 🛠 Tech Stack

- **Frontend:** Next.js + TailwindCSS
- **Backend 1:** Node.js API for post management (optional)
- **Backend 2:** FastAPI for text sentiment analysis
- **Database:** PostgreSQL via Render
- **ORM:** Prisma

---
## 📂 Project Setup

### 🧱 Frontend Setup

```bash
# Navigate to project root
cd posts-app

# Install dependencies
npm install

# Start development server
npm run dev

🧪 FastAPI Backend Setup
cd fastapi_backend
pip install -r requirements.txt
uvicorn main:app --reload --port 9000

🌿 Environment Variables
DATABASE_URL=postgresql://USER:PASSWORD@host:port/db
NEXT_PUBLIC_ANALYSIS_API=https://your-fastapi-url.com

📊 Features
✍️ Create blog posts with title and body
📃 View post details
🧠 Analyze post sentiment using FastAPI
🌈 Responsive UI with TailwindCSS

📦 Deployment Tips
Frontend → Vercel

Backend → Render or Railway

PostgreSQL → Render or Supabase

🙋‍♀️ Author
Developed by Sapna Rani

📃 License
