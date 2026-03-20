import sys
from collections import Counter
try:
    from PIL import Image
except ImportError:
    import subprocess
    subprocess.check_call([sys.executable, "-m", "pip", "install", "Pillow"])
    from PIL import Image

def get_dominant_colors(image_path, num_colors=5):
    img = Image.open(image_path)
    img = img.convert("RGBA")
    img = img.resize((50, 50))
    pixels = list(img.getdata())
    
    # Filter out transparent or near-transparent pixels
    pixels = [p[:3] for p in pixels if p[3] > 200]
    
    counts = Counter(pixels)
    most_common = counts.most_common(num_colors)
    
    for color, count in most_common:
        hex_color = "#{:02x}{:02x}{:02x}".format(color[0], color[1], color[2])
        print(f"Color: {hex_color} - RGB: {color} - Aprox {count} pixels")

if __name__ == "__main__":
    get_dominant_colors(r"C:\Users\Pantufla\Documents\carali\paleta colores.png")
