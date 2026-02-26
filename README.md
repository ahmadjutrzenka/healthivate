# 🏋️ Healthiv8 - Workout and Health Tracker

Sebuah website aplikasi monitoring kesehatan dan kebugaran yang membantu user untuk menghitung BMI, mendapatkan rekomendasi plan workout, dan mencatat progres workout harian, serta menawarkan produk penunjang workout dan kesehatan.

## ✨ Fitur Utama

### 📊 BMI Calculator
- Menghitung BMI (Body Mass Index) berdasarkan berat dan tinggi badan
- Kategori secara otomatis: Underweight, Normal, Overweight, Obese
- Validasi input secara otomatis

### 💪 Workout Recommendation
- Rekomendasi workout plan berdasarkan kategori BMI
- Workout plan telah disesuaikan dengan kondisi tubuh user
- Panduan workout yang aman dan efektif

### 📝 Workout Log (CRUD)
- **Create** - Mencatat workout yang dilakukan
- **Read** - Menampilkan list workout yang sudah dilakukan
- **Update** - Mengubah data workout yang sudah tercatat
- **Delete** - Menghapus workout dari workout log

### 🛒 Supplement Shop (CRUD)
- **Create** - Menambahkan produk baru ke katalog
- **Read** - Menampilkan daftar rekomendasi suplemen penunjang workout
- **Update** - Mengubah data produk suplemen yang sudah ada
- **Delete** - Menghapus produk suplemen dari katalog atau keranjang belanja
- **Add to Cart** - Menambah produk ke keranjang belanja dengan quantity selector
- **Cart** - Review produk, harga, stok, subtotal, dan hapus item produk
- **Checkout** - Proses pembelian produk dari keranjang belanja

## 🚀 Quick Start

### Cara Menjalankan

1. **Clone repository**
   ```bash
   git clone https://github.com/ahmadjutrzenka/healthivate.git
   ```

2. **Masuk ke folder project**
   ```bash
   cd healthivate
   ```

3. **Buka di browser**
   - Buka `index.html` langsung di browser, atau
   - Gunakan **Live Server Extension** di VS Code:
     - Install extension "Live Server"
     - Klik kanan di `index.html`
     - Pilih "Open with Live Server"
     - Browser akan membuka `http://localhost:5500`

## 📂 Struktur Project
```
healthivate/
├── assets/                     # Assets (icons, logo, dll)
├── image/                      # Gambar produk & konten
├── containerBMI.js             # Logic BMI calculator & rekomendasi
├── crudPlannerForm.js          # Logic CRUD workout planner/log
├── crudSupplementCheckout.js   # Logic CRUD suplemen & checkout
├── function.js                 # Helper functions
├── index.html                  # Halaman utama
├── style.css                   # Styling dan responsive design
├── LICENSE                     # MIT License
└── README.md                   # File ini               
```

## ⚙️ Tech Stack
- **Javascript (vanilla)** - Logic aplikasi dan DOM manipulation
- **HTML** - Struktur home page
- **CSS** - Styling dan responsive design

## 📲 User Guide

### 1. Kalkulasi BMI
```



