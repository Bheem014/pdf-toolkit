from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.upload import router as upload_router

app = FastAPI(
    title="PDF Toolkit API",
    description="Backend API for PDF Toolkit",
    version="1.0.0"
)

# CORS Configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # React frontend
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register API Routes
app.include_router(upload_router)


@app.get("/")
async def root():
    return {
        "message": "Welcome to PDF Toolkit API"
    }


@app.get("/health")
async def health():
    return {
        "status": "healthy",
        "message": "PDF Toolkit API is running"
    }