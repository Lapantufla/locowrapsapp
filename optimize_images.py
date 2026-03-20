import os
from PIL import Image

def optimize_images(directory, max_size=(1200, 1200), quality=85):
    for filename in os.listdir(directory):
        if filename.lower().endswith(('.png', '.jpg', '.jpeg', '.webp')):
            filepath = os.path.join(directory, filename)
            try:
                with Image.open(filepath) as img:
                    # Resize while maintaining aspect ratio
                    img.thumbnail(max_size, Image.Resampling.LANCZOS)
                    
                    # Convert to RGB if necessary (e.g. for RGBA PNGs being saved as JPEG)
                    if img.mode in ("RGBA", "P"):
                        img = img.convert("RGB")
                    
                    # Save with optimization and quality
                    img.save(filepath, optimize=True, quality=quality)
                    print(f"Optimized {filename}: {os.path.getsize(filepath) / 1024:.2f} KB")
            except Exception as e:
                print(f"Error optimizing {filename}: {e}")

if __name__ == "__main__":
    img_dir = r"locowraps-react/public/images"
    optimize_images(img_dir)
