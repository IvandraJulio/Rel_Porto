# Rel Portofolio - versi lokal

Project ini adalah versi lokal dari website portfolio di:
https://relportofolio.netlify.app/

## Isi project
- `index.html` → halaman utama
- `about.html` → halaman about
- `all-projects.html` → halaman semua project
- `style.css` dan `styleabout.css` → styling
- `script.js` → animasi scroll sederhana
- `Assets/` → gambar dan file PDF resume
- `server.py` → server lokal sederhana

## Cara menjalankan di lokal

### Opsi 1 - Python script
```bash
python server.py
```

### Opsi 2 - Linux / macOS
```bash
./start-local.sh
```

### Opsi 3 - Windows
Klik dua kali file `start-local.bat`

Setelah itu buka:
```text
http://localhost:5500
```

## Catatan
Kalau port `5500` sedang dipakai, ubah angka `PORT = 5500` di file `server.py`.
