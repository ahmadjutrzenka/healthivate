# 🏋️ Healthiv8 - Workout and Health Tracker

Healthiv8 atau Healthivate adalah sebuah website aplikasi monitoring kesehatan dan kebugaran yang membantu user untuk menghitung BMI, mendapatkan rekomendasi plan workout, dan mencatat progres workout harian, serta menawarkan produk penunjang workout dan kesehatan.

## ✨ *Fitur Utama*

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
- **Tambah Produk** - Menambahkan produk baru ke katalog
- **Lihat Katalog** - Menampilkan daftar rekomendasi suplemen penunjang workout
- **Edit Produk** - Mengubah data produk suplemen yang sudah ada
- **Hapus Produk** - Menghapus produk suplemen dari katalog atau keranjang belanja
- **Add to Cart** - Menambah produk ke keranjang belanja dengan quantity selector
- **Cart** - Review produk, harga, stok, subtotal, dan hapus item produk
- **Checkout** - Proses pembelian produk dari keranjang belanja

## 🚀 *Quick Start*

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

## 📂 *Struktur Project*
```
healthivate/
├── assets/                     # Assets (icons, logo, dll)
├── containerBMI.js             # Logic BMI calculator & rekomendasi
├── crudPlannerForm.js          # Logic CRUD workout planner/log
├── crudSupplementCheckout.js   # Logic CRUD suplemen & checkout
├── function.js                 # Helper functions
├── index.html                  # Halaman utama
├── style.css                   # Styling dan responsive design
├── LICENSE                     # MIT License
└── README.md                   # File ini               
```

## ⚙️ *Tech Stack*
- **JavaScript (vanilla)** - Logic aplikasi dan DOM manipulation
- **HTML5** - Struktur homepage
- **CSS3** - Styling dan responsive design

## 📲 *User Guide*

### 1. Kalkulasi BMI
```
1. Masukkan berat badan (kg)
2. Masukkan tinggi badan (cm)
3. Klik tombol "Calculate BMI"
4. Lihat hasil BMI beserta kategorinya
```
### 2. Rekomendasi Workout
```
1. Setelah BMI dihitung, sistem akan menampilkan kategori BMI
2. Rekomendasi workout akan otomatis muncul sesuai kategori
3. Ikuti panduan workout plan yang diberikan
```
### 3. Workout Log
```
1. Isi form workout planner
2. Klik "Add Workout" untuk menyimpan ke log workout tracker
3. Lihat list workout di tabel log workout tracker
4. Edit atau hapus workout sesuai kebutuhan
```
### 4. Product Shopping
```
1. Scroll ke bagian "Rekomendasi Suplemen"
2. Tambah, edit, atau hapus produk suplemen
3. Atur jumlah produk dengan tombol ( - / + )
4. Klik "Buy" untuk memasukkan produk ke keranjang
5. Pada halaman keranjang, review pesanan produk atau hapus item
6. Klik "Checkout" untuk menyelesaikan pembelian
```

## Kategori BMI

| Kategori | Rentang BMI |
|----------|-------------|
| Underweight | < 18.5 |
| Normal | 18.5 - 24.9 |
| Overweight | 25.0 - 29.9 |
| Obese | ≥ 30.0 |

## ⚠️ *Notes*

- Website aplikasi ini dibuat menggunakan **Vanilla JavaScript** tanpa framework
- Data workout log masih bersifat sementara (tersimpan selama browser session aktif)
- Untuk tahap production, perlu menggunakan backend database untuk penyimpanan data permanen
- Kalkulasi BMI menggunakan formula standar: 'berat (kg) / tinggi (cm)'

## ⏭️ *Pengembangan Selanjutnya*

- [ ] Backend API untuk penyimpanan data permanen
- [ ] Database (MySQL/MongoDB)
- [ ] Fitur autentikasi user (Login/Register)
- [ ] Fitur tracking progress mingguan/bulanan
- [ ] Fitur grafik statistik workout
- [ ] Fitur reminder/notifikasi workout plan harian
- [ ] Fitur kalori tracker
- [ ] Peningkatan responsive design

## 🧑‍💻 Developer Team

- Abi Salihin
- Ahmad Jutrzenka Ilyas
- Ahmad Luthfi Hanif
- Rama Atha Bahy Musyafa
- Mohammad Conan Surya Agung
- Muhammad Akbar Noersal

## 📄 License

MIT License - Feel free to use and modify

---

### **Stay Healthy, Stay Active! 💪🔥**
