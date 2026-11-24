# faizdzulfikar.github.io

Portofolio pribadi Faiz Dzulfikar, dibangun dengan [Astro](https://astro.build) dan dihosting di GitHub Pages.

## Mengedit isi tanpa koding (Pages CMS)

1. Buka [app.pagescms.org](https://app.pagescms.org) dan login dengan GitHub.
2. Pilih repo `faizdzulfikar.github.io`, branch `main`.
3. Di menu kiri ada: **Profile**, **About page**, **Writing**, **Projects**, **Creative**, **Experience**.
4. Edit lewat form, lalu klik **Save**. Setiap Save membuat commit, dan situs otomatis ter-update dalam 1 sampai 2 menit.

Tulisan baru di **Writing** dibuat sebagai draft. Matikan "Draft" kalau sudah siap terbit.
Gambar (foto profil, screenshot, karya desain) di-upload lewat field gambar dan tersimpan di `public/images`.

## Struktur isi

| Isi | Lokasi |
| --- | --- |
| Nama, intro beranda, daftar "Now", link kontak, foto, CV PDF | `src/data/profile.json` |
| Halaman About | `src/content/pages/about.md` |
| Proyek | `src/content/projects/*.md` |
| Pengalaman (CV) | `src/content/cv/*.md` |
| Karya desain/video | `src/content/creative/*.md` |
| Tulisan/blog | `src/content/writing/*.md` |

## Menjalankan di komputer sendiri

```sh
npm install
npm run dev      # buka http://localhost:4321
npm run build    # hasil di dist/
```

## Deploy

Setiap push ke `main` menjalankan workflow `.github/workflows/deploy.yml` yang membangun situs dan menerbitkannya ke GitHub Pages.
Pengaturan satu kali: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
