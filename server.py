from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
import webbrowser
from pathlib import Path
import os

PORT = 5500
ROOT = Path(__file__).resolve().parent
os.chdir(ROOT)

url = f"http://localhost:{PORT}"
print(f"Menjalankan server lokal di {url}")
print("Tekan Ctrl+C untuk menghentikan server.")

try:
    webbrowser.open(url)
except Exception:
    pass

server = ThreadingHTTPServer(("0.0.0.0", PORT), SimpleHTTPRequestHandler)
server.serve_forever()
