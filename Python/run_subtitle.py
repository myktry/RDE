import os
from auto_subtitle.cli import main

input_path = "C:/Users/Troy/Desktop/Acads/Lab1.mov"
output_path = "C:/Users/Troy/subtitled/Lab1_subtitled.mp4"

main([
    "C:/Users/Troy/Desktop/Acads/Lab1.mov",
    "-o", "C:/Users/Troy/subtitled/"
])

os.makedirs(os.path.dirname(output_path), exist_ok=True)

auto_subtitle(input_path, output_path)
