CREATE DATABASE IF NOT EXISTS apotek_obat;
USE apotek_obat;

CREATE TABLE IF NOT EXISTS obat (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama_obat VARCHAR(100) NOT NULL,
    kategori VARCHAR(100) NOT NULL,
    harga INT NOT NULL,
    stok INT NOT NULL,
    deskripsi TEXT
);

INSERT INTO obat 
(nama_obat, kategori, harga, stok, deskripsi)
VALUES
('Paracetamol', 'Obat Demam', 15000, 40, 'Membantu meredakan demam dan nyeri ringan.'),
('Vitamin C', 'Suplemen', 25000, 20, 'Membantu menjaga daya tahan tubuh.'),
('Amoxicillin', 'Antibiotik', 35000, 15, 'Digunakan sesuai anjuran dokter.');

SELECT * FROM obat;