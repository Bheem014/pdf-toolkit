from fastapi import APIRouter, HTTPException
from fastapi.responses import FileResponse
import os

router = APIRouter()

COMPRESSED_FOLDER = "compressed"


@router.get("/download/{filename}")
def download_file(filename: str):
    file_path = os.path.join(COMPRESSED_FOLDER, filename)

    if not os.path.exists(file_path):
        raise HTTPException(
            status_code=404,
            detail="File not found."
        )

    return FileResponse(
        path=file_path,
        filename=filename,
        media_type="application/pdf"
    )