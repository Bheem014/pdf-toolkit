from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.upload import router as upload_router
from app.api.compress import router as compress_router

from app.api.download import router as download_router

app = FastAPI(
    title="PDF Toolkit API",
    version="1.0.0"
)

# Allow React frontend to access the backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Root endpoint
@app.get("/")
def root():
    return {
        "status": "healthy",
        "message": "PDF Toolkit API is running"
    }

# Register routers
app.include_router(upload_router)
app.include_router(compress_router)
app.include_router(download_router)