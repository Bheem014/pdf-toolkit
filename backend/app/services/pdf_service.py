import fitz
import os


def compress_pdf(
    input_path,
    output_path,
    level="medium"
):
    """
    Compress a PDF and save it to the output path.
    """

    # Open the uploaded PDF
    document = fitz.open(input_path)

    # Save using garbage collection and compression
    document.save(
        output_path,
        garbage=4,
        deflate=True,
        clean=True,
    )

    document.close()

    # Calculate file sizes
    original_size = os.path.getsize(input_path)
    compressed_size = os.path.getsize(output_path)

    return {
        "original_size": original_size,
        "compressed_size": compressed_size,
    }