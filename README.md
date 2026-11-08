# Profil &amp; Pengantar Perkuliahan

> Slide presentasi akademik interaktif untuk perkenalan dosen dan kontrak perkuliahan Program Studi Teknik Informatika, Institut Teknologi Sumatera (ITERA).

🌐 **Live URL**: [https://iwawiwi.github.io/profile/](https://iwawiwi.github.io/profile/)

---

## 👨‍🏫 Profil Dosen

- **Nama**: I Wayan Wiprayoga Wisesa, S.Kom., M.Kom.
- **Panggilan**: Pak Wayan / Pak Yoga
- **Kode Dosen**: `IWW`
- **Program Studi**: Teknik Informatika, Institut Teknologi Sumatera (ITERA)
- **Ruang Kerja**: Lab IoT &amp; Jaringan Komputer, Gedung Labtek 3 Lt. 3, Kampus ITERA
- **Surel Resmi**: [wayan.wisesa@if.itera.ac.id](mailto:wayan.wisesa@if.itera.ac.id)
- **Fokus Riset**: Machine Learning &amp; Multimedia (Multimodal AI, Music Information Retrieval, Gesture Recognition &amp; HCI)

---

## ✨ Fitur &amp; Arsitektur Desain

- **React 19 + TypeScript + Vite 8**: Arsitektur komponen modular dengan build instan (&lt;300ms) dan performa tinggi.
- **Reveal.js 6 Core**: Engine presentasi mulus dengan transisi sinematik *Fade* antar slide.
- **Google Material 3 Expressive**: Sistem bento card modern, kontras tinggi, hierarki tipografi tegas, dan tanpa ikon/badge yang berlebihan.
- **Gruvbox Authentic Dual-Theme**:
  - **Mode Terang (*Light Mode*)**: Default Gruvbox Light yang hangat dan nyaman di mata proyektor.
  - **Mode Gelap (*Dark Mode*)**: Gruvbox Dark elegan dengan konversi logo institusional otomatis menjadi putih murni.
  - **Mode Otomatis**: Mendeteksi dan sinkron secara reaktif dengan preferensi tema sistem operasi (`prefers-color-scheme`).
- **Latar Belakang Atmosferik**: Foto arsitektural Gedung Laboratorium Teknik 2 ITERA dengan teknik *Gruvbox Duotone &amp; Radial Vignette*.
- **Integrated Navigation Dock**: Panel kontrol navigasi presisi `[ Panah Kiri ]` `[ 01 / 15 ]` `[ Panah Kanan ]` dengan proteksi tumpang tindih (*bottom clearance*).
- **Anti-Scroll Enforcement**: Seluruh 15 slide dirancang fit dalam satu viewport proyektor (`100vw x 100vh`) tanpa scrollbar vertikal maupun horizontal.

---

## 📑 Struktur Slide (15 Slide Tersegmentasi)

1. **Cover**: Identitas resmi, logo ITERA, logo Prodi IF, dan 3 bento card pembuka.
2. **Perkenalan**: Nama lengkap, sapaan, domisili, dan kode dosen.
3. **Riwayat Pendidikan**: Jenjang S1 dan S2 Ilmu Komputer di Universitas Indonesia.
4. **Pengalaman Kerja &amp; Riset**: Jejak karir dari industri software engineer, asisten riset, hingga dosen tetap ITERA.
5. **Fokus Penelitian &amp; Riset**: Tiga pilar riset (Machine Learning, Music Information Retrieval, dan Gesture Recognition).
6. **Mata Kuliah yang Diampu**: 6 kartu mata kuliah simetris dengan judul satu baris.
7. **Aturan Kehadiran**: Ketentuan toleransi keterlambatan 20 menit (hadir &le; 20 menit vs &gt; 20 menit).
8. **Aturan Dosen**: Kesetaraan waktu dua arah dan syarat minimal 80% kehadiran UAS.
9. **Prosedur Izin Tidak Hadir**: Ketentuan pemberitahuan maksimal H-1 beserta format identitas rapi.
10. **Ketentuan Ujian Susulan**: Batas pengajuan susulan H+7 dan ketiadaan tugas katrol nilai ad-hoc.
11. **Integritas &amp; Batasan Mutlak**: Nol toleransi plagiarisme dan manipulasi presensi (*titip absen*).
12. **Ekspektasi Perkuliahan**: Ketertiban LMS E-Learning, format tugas, dan anjuran aktif berdiskusi.
13. **Saluran Komunikasi**: Alamat email resmi, ruang kerja lab, dan jam kerja konsultasi.
14. **Format Wajib Subjek Surel**: Panduan format subjek `[Nama MK] - [NIM] - [Keperluan]` agar pesan tidak tersaring spam.
15. **Penutup &amp; Nilai Dasar**: Kutipan penutup dan 5 pilar karakter belajar mahasiswa.

---

## 🚀 Menjalankan Secara Lokal

Pastikan Anda telah memasang [Node.js](https://nodejs.org/) (&gt;= 18) dan [pnpm](https://pnpm.io/).

```bash
# 1. Pasang dependensi
pnpm install

# 2. Jalankan server pengembangan lokal (http://localhost:3000)
pnpm run dev

# 3. Kompilasi bundle produksi
pnpm run build

# 4. Pratinjau hasil build produksi
pnpm run preview
```

---

## 🚢 Alur Deployment GitHub Pages

Repositori ini dikonfigurasi dengan alur **GitHub Actions Workflow** otomatis (`.github/workflows/deploy.yml`):
- Setiap `git push` ke branch `main` secara otomatis memicu proses kompilasi TypeScript dan bundler Vite.
- Output produksi (`build_output`) diunggah dan dideploy langsung ke GitHub Pages di [https://iwawiwi.github.io/profile/](https://iwawiwi.github.io/profile/).

---

## 📄 Lisensi

Konten presentasi &copy; 2026 I Wayan Wiprayoga Wisesa. Dirilis di bawah lisensi [MIT](LICENSE).
