CREATE DATABASE IF NOT EXISTS apotek_dokter;
USE apotek_dokter;

CREATE TABLE IF NOT EXISTS dokter (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama_dokter VARCHAR(100) NOT NULL,
    spesialis VARCHAR(100) NOT NULL,
    jadwal VARCHAR(100) NOT NULL,
    status_dokter VARCHAR(50) NOT NULL
);

INSERT INTO dokter
(nama_dokter, spesialis, jadwal, status_dokter)
VALUES
('Dr. Andi', 'Dokter Umum', 'Senin - Jumat, 09.00 - 15.00', 'Online'),
('Dr. Sarah', 'Spesialis Anak', 'Selasa - Kamis, 10.00 - 14.00', 'Online');

SELECT * FROM dokter;