# Portfolio Video Editor (Static)

Website portofolio sederhana (tanpa framework) untuk video editor: header profil (nama + foto), grid video (beberapa kolom), filter kategori, search, dan modal preview video.

## Jalankan (local)

Opsi 1:

- Buka file `index.html` langsung di browser.

Opsi 2 (disarankan):

```powershell
cd portfolio-video-editor
python -m http.server 8000
```

Lalu buka `http://localhost:8000`.

## Ubah konten

- Profil dan daftar video: `app.js`
- Foto profil: taruh file di `assets/` lalu ubah `src` di `index.html` kalau perlu

