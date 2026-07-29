from fastapi import APIRouter, HTTPException
from app.services.pdf_service import compress_pdf
import os

router = APIRouter()

UPLOAD_FOLDER = "uploads"
COMPRESSED_FOLDER = "compressed"


@router.post("/compress")
def compress(
    filename: str,
    level: str = "medium"
):
    input_path = os.path.join(UPLOAD_FOLDER, filename)

    if not os.path.exists(input_path):
        raise HTTPException(
            status_code=404,
            detail="File not found."
        )

    output_filename = f"compressed_{filename}"
    output_path = os.path.join(COMPRESSED_FOLDER, output_filename)

    result = compress_pdf(
    input_path,
    output_path,
    level
)

    return {
        "message": "PDF compressed successfully.",
        "filename": output_filename,
        "original_size": result["original_size"],
        "compressed_size": result["compressed_size"],
    }