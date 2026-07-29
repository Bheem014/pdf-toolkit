from fastapi import APIRouter

router = APIRouter(
    prefix="/pdf",
    tags=["PDF"]
)


@router.get("/")
def pdf_info():
    return {
        "message": "PDF API is ready"
    }