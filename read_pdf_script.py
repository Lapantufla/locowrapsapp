import os
import subprocess
import sys

def install(package):
    subprocess.check_call([sys.executable, "-m", "pip", "install", package])

try:
    import fitz
except ImportError:
    install('pymupdf')
    import fitz

pdf_path = r"C:\Users\Pantufla\Documents\carali\Manual de identidad de marca y aproximacion de analisis (1).pdf"
text = ""
with fitz.open(pdf_path) as doc:
    for page in doc:
        text += page.get_text() + "\n"

with open(r"C:\Users\Pantufla\Documents\carali\manual_text.txt", "w", encoding="utf-8") as f:
    f.write(text)
print("PDF Extraction Done")
