CREATE DATABASE IF NOT EXISTS apotek_pengantaran;
USE apotek_pengantaran;

CREATE TABLE IF NOT EXISTS pengantaran (
    id INT AUTO_INCREMENT PRIMARY KEY,
    kode_pesanan VARCHAR(20) NOT NULL,
    nama_obat VARCHAR(100) NOT NULL,
    alamat TEXT NOT NULL,
    kurir VARCHAR(100) NOT NULL,
    status_pengantaran VARCHAR(50) NOT NULL,
    tanggal_pengantaran TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO pengantaran 
(kode_pesanan, nama_obat, alamat, kurir, status_pengantaran)
VALUES
('ORD-001', 'Paracetamol', 'Jl. Sultan Alauddin, Makassar', 'Kurir ApotekCare', 'Diproses'),
('ORD-002', 'Vitamin C', 'Jl. Perintis Kemerdekaan, Makassar', 'GoSend', 'Dalam Pengantaran'),
('ORD-003', 'Amoxicillin', 'Jl. Hertasning, Makassar', 'JNE ApotekCare', 'Selesai');

SELECT * FROM pengantaran;