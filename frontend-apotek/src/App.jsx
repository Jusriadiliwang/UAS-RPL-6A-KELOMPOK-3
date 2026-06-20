import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import "./index.css";

const nomorAdminWA = "6281234567890";

const dokterData = [
  {
    nama: "Jusriadi Liwang",
    email: "105841117023@student.unismuh.ac.id",
    password: "12345",
    role: "dokter",
    spesialis: "Dokter Mata",
    jadwal: "Senin - Jumat, 09.00 - 15.00",
    status: "Online",
    wa: "6281234567890",
    isVerified: true,
  },
  {
    nama: "MUH. YAHYA AL-QADRI",
    email: "105841102923@student.unismuh.ac.id",
    password: "12345",
    role: "dokter",
    spesialis: "Dokter Umum",
    jadwal: "Senin - Jumat, 08.00 - 14.00",
    status: "Online",
    wa: "6281234567890",
    isVerified: true,
  },
  {
    nama: "YUSUF SEWANG",
    email: "105841120523@student.unismuh.ac.id",
    password: "12345",
    role: "dokter",
    spesialis: "Dokter Jantung",
    jadwal: "Selasa - Kamis, 10.00 - 15.00",
    status: "Online",
    wa: "6281234567890",
    isVerified: true,
  },
  {
    nama: "Muh Khaidir Nur",
    email: "105841122523@student.unismuh.ac.id",
    password: "12345",
    role: "dokter",
    spesialis: "Dokter Psikolog",
    jadwal: "Senin - Rabu, 13.00 - 17.00",
    status: "Online",
    wa: "6281234567890",
    isVerified: true,
  },
  {
    nama: "M Arfan Maulana Irwansyah",
    email: "105841119323@student.unismuh.ac.id",
    password: "12345",
    role: "dokter",
    spesialis: "Dokter Gigi",
    jadwal: "Rabu - Sabtu, 09.00 - 13.00",
    status: "Online",
    wa: "6281234567890",
    isVerified: true,
  },
];

const pasienAwal = [
  {
    nama: "Gushryanto Libels",
    email: "pasien@apotekcare.com",
    password: "12345",
    role: "pasien",
    status: "Pasien Terdaftar",
    kebutuhan: "Konsultasi dan pemesanan obat",
    dokterTujuanEmail: "105841117023@student.unismuh.ac.id",
    dokterTujuanNama: "Jusriadi Liwang",
    isVerified: true,
  },
];

const obatData = [
  {
    nama: "Tetes Mata Steril",
    kategori: "Obat Mata",
    dokterEmail: "105841117023@student.unismuh.ac.id",
    dokter: "Jusriadi Liwang",
    spesialis: "Dokter Mata",
    harga: "Rp 18.000",
    stok: 25,
    resep: "Tanpa Resep",
  },
  {
    nama: "Eye Vitamin",
    kategori: "Vitamin Mata",
    dokterEmail: "105841117023@student.unismuh.ac.id",
    dokter: "Jusriadi Liwang",
    spesialis: "Dokter Mata",
    harga: "Rp 35.000",
    stok: 18,
    resep: "Tanpa Resep",
  },
  {
    nama: "Paracetamol",
    kategori: "Obat Demam",
    dokterEmail: "105841102923@student.unismuh.ac.id",
    dokter: "MUH. YAHYA AL-QADRI",
    spesialis: "Dokter Umum",
    harga: "Rp 15.000",
    stok: 40,
    resep: "Tanpa Resep",
  },
  {
    nama: "Vitamin C",
    kategori: "Suplemen",
    dokterEmail: "105841102923@student.unismuh.ac.id",
    dokter: "MUH. YAHYA AL-QADRI",
    spesialis: "Dokter Umum",
    harga: "Rp 25.000",
    stok: 20,
    resep: "Tanpa Resep",
  },
  {
    nama: "Oralit",
    kategori: "Cairan Rehidrasi",
    dokterEmail: "105841102923@student.unismuh.ac.id",
    dokter: "MUH. YAHYA AL-QADRI",
    spesialis: "Dokter Umum",
    harga: "Rp 8.000",
    stok: 35,
    resep: "Tanpa Resep",
  },
  {
    nama: "Amlodipine",
    kategori: "Obat Jantung",
    dokterEmail: "105841120523@student.unismuh.ac.id",
    dokter: "YUSUF SEWANG",
    spesialis: "Dokter Jantung",
    harga: "Rp 45.000",
    stok: 15,
    resep: "Perlu Resep Dokter",
  },
  {
    nama: "Aspirin Cardio",
    kategori: "Obat Jantung",
    dokterEmail: "105841120523@student.unismuh.ac.id",
    dokter: "YUSUF SEWANG",
    spesialis: "Dokter Jantung",
    harga: "Rp 38.000",
    stok: 12,
    resep: "Perlu Resep Dokter",
  },
  {
    nama: "Vitamin B Complex",
    kategori: "Vitamin Saraf",
    dokterEmail: "105841122523@student.unismuh.ac.id",
    dokter: "Muh Khaidir Nur",
    spesialis: "Dokter Psikolog",
    harga: "Rp 30.000",
    stok: 22,
    resep: "Tanpa Resep",
  },
  {
    nama: "Suplemen Relaksasi",
    kategori: "Suplemen Psikolog",
    dokterEmail: "105841122523@student.unismuh.ac.id",
    dokter: "Muh Khaidir Nur",
    spesialis: "Dokter Psikolog",
    harga: "Rp 42.000",
    stok: 10,
    resep: "Konsultasi Dianjurkan",
  },
  {
    nama: "Obat Kumur Antiseptik",
    kategori: "Obat Gigi",
    dokterEmail: "105841119323@student.unismuh.ac.id",
    dokter: "M Arfan Maulana Irwansyah",
    spesialis: "Dokter Gigi",
    harga: "Rp 28.000",
    stok: 30,
    resep: "Tanpa Resep",
  },
  {
    nama: "Ibuprofen",
    kategori: "Obat Nyeri Gigi",
    dokterEmail: "105841119323@student.unismuh.ac.id",
    dokter: "M Arfan Maulana Irwansyah",
    spesialis: "Dokter Gigi",
    harga: "Rp 20.000",
    stok: 24,
    resep: "Gunakan Sesuai Aturan",
  },
];

const pengantaranData = [
  {
    kode: "ORD-001",
    obat: "Tetes Mata Steril",
    pasien: "Gushryanto Libels",
    alamat: "Jl. Sultan Alauddin, Makassar",
    kurir: "Kurir ApotekCare",
    status: "Diproses",
  },
  {
    kode: "ORD-002",
    obat: "Paracetamol",
    pasien: "Gushryanto Libels",
    alamat: "Jl. Perintis Kemerdekaan, Makassar",
    kurir: "GoSend",
    status: "Dikirim",
  },
  {
    kode: "ORD-003",
    obat: "Obat Kumur Antiseptik",
    pasien: "Gushryanto Libels",
    alamat: "Jl. Hertasning, Makassar",
    kurir: "JNE ApotekCare",
    status: "Selesai",
  },
];

function App() {
  const [page, setPage] = useState("home");
  const [authMode, setAuthMode] = useState("login");
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [pemeriksaanData, setPemeriksaanData] = useState({});

  const [pendingUser, setPendingUser] = useState(null);
  const [verificationCode, setVerificationCode] = useState("");
  const [inputCode, setInputCode] = useState("");

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    role: "pasien",
  });

  const [registerData, setRegisterData] = useState({
    nama: "",
    email: "",
    password: "",
    role: "pasien",
    spesialis: "",
    dokterTujuanEmail: "105841117023@student.unismuh.ac.id",
  });

  useEffect(() => {
    const savedUsers = JSON.parse(localStorage.getItem("apotekcare_users"));
    const savedLogin = JSON.parse(localStorage.getItem("apotekcare_login"));
    const savedPemeriksaan = JSON.parse(
      localStorage.getItem("apotekcare_pemeriksaan") || "{}"
    );

    if (savedUsers && savedUsers.length > 0) {
      const userRegistrasi = savedUsers.filter(
        (user) =>
          !dokterData.some((dokter) => dokter.email === user.email) &&
          !pasienAwal.some((pasien) => pasien.email === user.email)
      );

      const semuaUser = [...dokterData, ...pasienAwal, ...userRegistrasi];
      setUsers(semuaUser);
      localStorage.setItem("apotekcare_users", JSON.stringify(semuaUser));
    } else {
      const defaultUsers = [...dokterData, ...pasienAwal];
      setUsers(defaultUsers);
      localStorage.setItem("apotekcare_users", JSON.stringify(defaultUsers));
    }

    if (savedLogin) {
      setCurrentUser(savedLogin);
    }

    setPemeriksaanData(savedPemeriksaan);
  }, []);

  const isDokter = currentUser?.role === "dokter";
  const isPasien = currentUser?.role === "pasien";

  const pasienData = users.filter((user) => user.role === "pasien");
  const dokterLoginData = users.filter((user) => user.role === "dokter");

  const pasienUntukDokter = pasienData.filter(
    (pasien) => pasien.dokterTujuanEmail === currentUser?.email
  );

  const obatUntukDokter = obatData.filter(
    (obat) =>
      obat.dokterEmail === currentUser?.email ||
      obat.dokter?.toLowerCase() === currentUser?.nama?.toLowerCase() ||
      obat.spesialis === currentUser?.spesialis
  );

  const hasilPemeriksaanPasien = currentUser
    ? pemeriksaanData[currentUser.email]
    : null;

  const totalStokObat = obatData.reduce((total, item) => total + item.stok, 0);

  const konsultasiMasukDokter = pasienUntukDokter.map((pasien, index) => {
    const pemeriksaan = pemeriksaanData[pasien.email] || {};

    return {
      id: index + 1,
      pasien: pasien.nama,
      email: pasien.email,
      keluhan:
        currentUser?.spesialis === "Dokter Mata"
          ? "Mata terasa perih dan berair"
          : currentUser?.spesialis === "Dokter Jantung"
          ? "Dada terasa nyeri dan mudah lelah"
          : currentUser?.spesialis === "Dokter Gigi"
          ? "Gigi terasa sakit saat makan"
          : currentUser?.spesialis === "Dokter Psikolog"
          ? "Sulit tidur dan sering cemas"
          : "Demam dan badan terasa lemas",
      status: pemeriksaan.status || "Menunggu Pemeriksaan",
    };
  });

  const handleLogin = (e) => {
    e.preventDefault();

    const user = users.find(
      (item) =>
        item.email === loginData.email &&
        item.password === loginData.password &&
        item.role === loginData.role
    );

    if (!user) {
      alert("Login gagal. Email, password, atau role tidak sesuai.");
      return;
    }

    if (user.isVerified === false) {
      alert("Akun belum diverifikasi. Silakan verifikasi email terlebih dahulu.");
      return;
    }

    setCurrentUser(user);
    setPage("home");
    localStorage.setItem("apotekcare_login", JSON.stringify(user));
  };

  const kirimEmailVerifikasi = async (newUser, kode) => {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      alert(`Mode demo: kode verifikasi kamu adalah ${kode}`);
      return;
    }

    await emailjs.send(
      serviceId,
      templateId,
      {
        to_name: newUser.nama,
        to_email: newUser.email,
        verification_code: kode,
      },
      {
        publicKey,
      }
    );
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!registerData.nama || !registerData.email || !registerData.password) {
      alert("Nama, email, dan password wajib diisi.");
      return;
    }

    if (registerData.role === "pasien" && !registerData.dokterTujuanEmail) {
      alert("Pasien wajib memilih dokter tujuan.");
      return;
    }

    const emailSudahAda = users.some(
      (item) => item.email === registerData.email
    );

    if (emailSudahAda) {
      alert("Email sudah terdaftar. Gunakan email lain.");
      return;
    }

    const dokterTujuan = dokterData.find(
      (dokter) => dokter.email === registerData.dokterTujuanEmail
    );

    const newUser = {
      nama: registerData.nama,
      email: registerData.email,
      password: registerData.password,
      role: registerData.role,
      spesialis:
        registerData.role === "dokter"
          ? registerData.spesialis || "Dokter Umum"
          : "",
      jadwal:
        registerData.role === "dokter"
          ? "Senin - Jumat, 09.00 - 15.00"
          : "",
      status: registerData.role === "dokter" ? "Online" : "Pasien Terdaftar",
      kebutuhan:
        registerData.role === "pasien"
          ? "Konsultasi dan pemesanan obat"
          : "",
      dokterTujuanEmail:
        registerData.role === "pasien" ? dokterTujuan?.email : "",
      dokterTujuanNama:
        registerData.role === "pasien" ? dokterTujuan?.nama : "",
      wa: nomorAdminWA,
      isVerified: false,
    };

    const kode = Math.floor(100000 + Math.random() * 900000).toString();

    try {
      await kirimEmailVerifikasi(newUser, kode);

      setPendingUser(newUser);
      setVerificationCode(kode);
      setInputCode("");
      setAuthMode("verify");

      alert("Kode verifikasi sudah dikirim. Silakan cek email atau pesan demo.");
    } catch (error) {
      console.error(error);
      alert("Gagal mengirim email verifikasi. Periksa konfigurasi EmailJS.");
    }
  };

  const handleVerifyEmail = (e) => {
    e.preventDefault();

    if (!pendingUser) {
      alert("Data registrasi tidak ditemukan. Silakan registrasi ulang.");
      setAuthMode("register");
      return;
    }

    if (inputCode !== verificationCode) {
      alert("Kode verifikasi salah.");
      return;
    }

    const verifiedUser = {
      ...pendingUser,
      isVerified: true,
    };

    const updatedUsers = [...users, verifiedUser];

    setUsers(updatedUsers);
    localStorage.setItem("apotekcare_users", JSON.stringify(updatedUsers));

    alert("Verifikasi berhasil. Akun sudah aktif dan bisa digunakan login.");

    setPendingUser(null);
    setVerificationCode("");
    setInputCode("");

    setRegisterData({
      nama: "",
      email: "",
      password: "",
      role: "pasien",
      spesialis: "",
      dokterTujuanEmail: "105841117023@student.unismuh.ac.id",
    });

    setAuthMode("login");
  };

  const handleLogout = () => {
    localStorage.removeItem("apotekcare_login");
    setCurrentUser(null);
    setPage("home");
  };

  const handleUbahPemeriksaan = (emailPasien, field, value) => {
    setPemeriksaanData((prev) => ({
      ...prev,
      [emailPasien]: {
        ...prev[emailPasien],
        [field]: value,
      },
    }));
  };

  const handleKirimKeAkunPasien = (pasien) => {
    const data = pemeriksaanData[pasien.email] || {};

    if (!data.hasil || !data.obat) {
      alert("Hasil pemeriksaan dan obat harus diisi.");
      return;
    }

    const hasilUntukPasien = {
      ...data,
      pasien: pasien.pasien,
      email: pasien.email,
      dokter: currentUser.nama,
      dokterEmail: currentUser.email,
      spesialis: currentUser.spesialis,
      status: "Sudah Diperiksa",
      tanggal: new Date().toLocaleString("id-ID"),
    };

    const updatedData = {
      ...pemeriksaanData,
      [pasien.email]: hasilUntukPasien,
    };

    setPemeriksaanData(updatedData);
    localStorage.setItem("apotekcare_pemeriksaan", JSON.stringify(updatedData));

    alert("Hasil pemeriksaan berhasil dikirim ke akun pasien.");
  };

  const bukaWhatsAppKonsultasi = (dokter) => {
    const pesan = `Halo ${dokter.nama}, saya ingin melakukan konsultasi dengan ${dokter.spesialis}. Apakah dokter tersedia?`;
    const url = `https://wa.me/${dokter.wa}?text=${encodeURIComponent(pesan)}`;
    window.open(url, "_blank");
  };

  const bukaWhatsAppObat = (obat) => {
    const pesan = `Halo ApotekCare, saya ingin membeli obat berikut:

Nama Obat: ${obat.nama}
Kategori: ${obat.kategori}
Dokter Terkait: ${obat.dokter}
Spesialis: ${obat.spesialis}
Harga: ${obat.harga}
Stok: ${obat.stok}
Status Resep: ${obat.resep}

Apakah obat ini masih tersedia?`;

    const url = `https://wa.me/${nomorAdminWA}?text=${encodeURIComponent(
      pesan
    )}`;

    window.open(url, "_blank");
  };

  if (!currentUser) {
    return (
      <div className="auth-wrapper">
        <div className="auth-card auth-card-modern">
          <div className="auth-logo">💊</div>

          <h1>ApotekCare</h1>

          <p className="auth-desc">
            Masuk sebagai dokter atau pasien untuk menggunakan layanan
            ApotekCare.
          </p>

          <div className="auth-tabs">
            <button
              className={authMode === "login" ? "active" : ""}
              onClick={() => setAuthMode("login")}
            >
              Login
            </button>

            <button
              className={authMode === "register" ? "active" : ""}
              onClick={() => setAuthMode("register")}
            >
              Registrasi
            </button>
          </div>

          {authMode === "login" && (
            <form onSubmit={handleLogin} className="auth-form">
              <label>Login Sebagai</label>
              <select
                value={loginData.role}
                onChange={(e) =>
                  setLoginData({ ...loginData, role: e.target.value })
                }
              >
                <option value="pasien">Pasien</option>
                <option value="dokter">Dokter</option>
              </select>

              <label>Email</label>
              <input
                type="email"
                placeholder="Masukkan email"
                value={loginData.email}
                onChange={(e) =>
                  setLoginData({ ...loginData, email: e.target.value })
                }
              />

              <label>Password</label>
              <input
                type="password"
                placeholder="Masukkan password"
                value={loginData.password}
                onChange={(e) =>
                  setLoginData({ ...loginData, password: e.target.value })
                }
              />

              <button type="submit">Masuk ke Aplikasi</button>
            </form>
          )}

          {authMode === "register" && (
            <form onSubmit={handleRegister} className="auth-form">
              <label>Daftar Sebagai</label>
              <select
                value={registerData.role}
                onChange={(e) =>
                  setRegisterData({
                    ...registerData,
                    role: e.target.value,
                  })
                }
              >
                <option value="pasien">Pasien</option>
                <option value="dokter">Dokter</option>
              </select>

              <label>Nama Lengkap</label>
              <input
                type="text"
                placeholder="Masukkan nama lengkap"
                value={registerData.nama}
                onChange={(e) =>
                  setRegisterData({ ...registerData, nama: e.target.value })
                }
              />

              <label>Email</label>
              <input
                type="email"
                placeholder="Masukkan email aktif"
                value={registerData.email}
                onChange={(e) =>
                  setRegisterData({ ...registerData, email: e.target.value })
                }
              />

              <label>Password</label>
              <input
                type="password"
                placeholder="Buat password"
                value={registerData.password}
                onChange={(e) =>
                  setRegisterData({
                    ...registerData,
                    password: e.target.value,
                  })
                }
              />

              {registerData.role === "pasien" && (
                <>
                  <label>Pilih Dokter Tujuan</label>
                  <select
                    value={registerData.dokterTujuanEmail}
                    onChange={(e) =>
                      setRegisterData({
                        ...registerData,
                        dokterTujuanEmail: e.target.value,
                      })
                    }
                  >
                    {dokterData.map((dokter) => (
                      <option key={dokter.email} value={dokter.email}>
                        {dokter.nama} - {dokter.spesialis}
                      </option>
                    ))}
                  </select>
                </>
              )}

              {registerData.role === "dokter" && (
                <>
                  <label>Spesialis</label>
                  <select
                    value={registerData.spesialis}
                    onChange={(e) =>
                      setRegisterData({
                        ...registerData,
                        spesialis: e.target.value,
                      })
                    }
                  >
                    <option value="">Pilih Spesialis</option>
                    <option value="Dokter Mata">Dokter Mata</option>
                    <option value="Dokter Umum">Dokter Umum</option>
                    <option value="Dokter Jantung">Dokter Jantung</option>
                    <option value="Dokter Psikolog">Dokter Psikolog</option>
                    <option value="Dokter Gigi">Dokter Gigi</option>
                  </select>
                </>
              )}

              <button type="submit">Daftar dan Kirim Kode Verifikasi</button>

              <div className="auth-info">
                Setelah registrasi, kode verifikasi akan dikirim ke email.
              </div>
            </form>
          )}

          {authMode === "verify" && (
            <form onSubmit={handleVerifyEmail} className="auth-form">
              <label>Kode Verifikasi Email</label>

              <input
                type="text"
                placeholder="Masukkan kode 6 digit"
                value={inputCode}
                onChange={(e) => setInputCode(e.target.value)}
              />

              <button type="submit">Verifikasi Akun</button>

              <div className="auth-info">
                Setelah verifikasi berhasil, akun bisa digunakan untuk login.
              </div>
            </form>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="apx-app">
      <aside className="apx-sidebar">
        <div className="apx-logo">
          <span>{isDokter ? "🩺" : "💊"}</span>
          <h1>{isDokter ? "DokterCare" : "ApotekCare"}</h1>
        </div>

        <div className="user-box">
          <p>Login sebagai:</p>
          <h4>{currentUser.nama}</h4>
          <span>{currentUser.role.toUpperCase()}</span>
        </div>

        <button
          onClick={() => setPage("home")}
          className={page === "home" ? "active" : ""}
        >
          🏠 {isDokter ? "Home Dokter" : "Home"}
        </button>

        <button
          onClick={() => setPage("dashboard")}
          className={page === "dashboard" ? "active" : ""}
        >
          📊 {isDokter ? "Dashboard Dokter" : "Dashboard"}
        </button>

        {isDokter && (
          <>
            <button
              onClick={() => setPage("jadwal")}
              className={page === "jadwal" ? "active" : ""}
            >
              📅 Jadwal Praktik
            </button>

            <button
              onClick={() => setPage("pasien")}
              className={page === "pasien" ? "active" : ""}
            >
              🧑‍🦱 Pasien Saya
            </button>

            <button
              onClick={() => setPage("obat")}
              className={page === "obat" ? "active" : ""}
            >
              💊 Obat Saya
            </button>

            <button
              onClick={() => setPage("konsultasi")}
              className={page === "konsultasi" ? "active" : ""}
            >
              🩺 Konsultasi Masuk
            </button>
          </>
        )}

        {isPasien && (
          <>
            <button
              onClick={() => setPage("obat")}
              className={page === "obat" ? "active" : ""}
            >
              💊 Obat
            </button>

            <button
              onClick={() => setPage("konsultasi")}
              className={page === "konsultasi" ? "active" : ""}
            >
              👨‍⚕️ Konsultasi
            </button>

            <button
              onClick={() => setPage("hasil")}
              className={page === "hasil" ? "active" : ""}
            >
              📋 Hasil Pemeriksaan
            </button>

            <button
              onClick={() => setPage("pengantaran")}
              className={page === "pengantaran" ? "active" : ""}
            >
              🚚 Pengantaran
            </button>
          </>
        )}

        <button className="logout-btn" onClick={handleLogout}>
          🚪 Keluar
        </button>
      </aside>

      <main className="apx-content">
        {page === "home" && (
          <section className="apx-hero">
            <div>
              <span className="apx-badge">
                {isDokter
                  ? "Panel Khusus Dokter"
                  : "Aplikasi Apotek Berbasis Microservices"}
              </span>

              <h2>
                {isDokter
                  ? `Selamat Datang, ${currentUser.nama}`
                  : "Selamat Datang di ApotekCare"}
              </h2>

              <p>
                {isDokter
                  ? "Kelola jadwal, pasien, konsultasi masuk, hasil pemeriksaan, dan obat sesuai spesialis."
                  : "Sistem layanan apotek modern untuk pemesanan obat, konsultasi dokter online, dan pengantaran obat secara cepat."}
              </p>

              <button onClick={() => setPage(isDokter ? "dashboard" : "obat")}>
                {isDokter ? "Buka Dashboard Dokter" : "Pesan Sekarang"}
              </button>
            </div>
          </section>
        )}

        {page === "dashboard" && (
          <section>
            <h2 className="apx-title">
              📊 {isDokter ? "Dashboard Dokter" : "Dashboard Pasien"}
            </h2>

            <div className="apx-stats">
              {isDokter ? (
                <>
                  <div className="apx-stat">
                    <h3>{obatUntukDokter.length}</h3>
                    <p>Obat Sesuai Spesialis</p>
                  </div>

                  <div className="apx-stat">
                    <h3>{pasienUntukDokter.length}</h3>
                    <p>Pasien Saya</p>
                  </div>

                  <div className="apx-stat">
                    <h3>{konsultasiMasukDokter.length}</h3>
                    <p>Konsultasi Masuk</p>
                  </div>

                  <div className="apx-stat">
                    <h3>1</h3>
                    <p>Jadwal Aktif</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="apx-stat">
                    <h3>{totalStokObat}</h3>
                    <p>Total Stok Obat</p>
                  </div>

                  <div className="apx-stat">
                    <h3>{dokterLoginData.length}</h3>
                    <p>Dokter Tersedia</p>
                  </div>

                  <div className="apx-stat">
                    <h3>{pengantaranData.length}</h3>
                    <p>Data Pengantaran</p>
                  </div>

                  <div className="apx-stat">
                    <h3>{pasienData.length}</h3>
                    <p>Pasien Terdaftar</p>
                  </div>
                </>
              )}
            </div>

            <div className="apx-info">
              <h3>
                {isDokter
                  ? "Keterangan Akun Dokter"
                  : "Konsep Microservices"}
              </h3>
              <p>
                {isDokter
                  ? "Dokter hanya melihat pasien yang memilih dokter tersebut. Setelah hasil pemeriksaan dikirim, pasien dapat melihatnya pada akun pasien."
                  : "Aplikasi ini memisahkan fitur utama menjadi layanan Obat, Dokter, Pengantaran, dan API Gateway."}
              </p>
            </div>
          </section>
        )}

        {page === "jadwal" && isDokter && (
          <section>
            <h2 className="apx-title">📅 Jadwal Praktik</h2>

            <div className="apx-card">
              <h3>{currentUser.nama}</h3>
              <p className="apx-category">{currentUser.spesialis}</p>
              <p>
                <strong>Jadwal:</strong> {currentUser.jadwal}
              </p>
              <p>
                <strong>Status:</strong> {currentUser.status}
              </p>
              <span className="apx-status online">Aktif Praktik</span>
            </div>
          </section>
        )}

        {page === "pasien" && isDokter && (
          <section>
            <h2 className="apx-title">🧑‍🦱 Pasien Saya</h2>

            {pasienUntukDokter.length === 0 ? (
              <div className="apx-info">
                <h3>Belum Ada Pasien</h3>
                <p>Pasien akan muncul jika memilih dokter ini saat registrasi.</p>
              </div>
            ) : (
              <div className="apx-grid">
                {pasienUntukDokter.map((item, index) => {
                  const pemeriksaan = pemeriksaanData[item.email] || {};

                  return (
                    <div className="apx-card" key={index}>
                      <h3>{item.nama}</h3>
                      <p className="apx-category">{item.status}</p>
                      <p>
                        <strong>Email:</strong> {item.email}
                      </p>
                      <p>
                        <strong>Dokter Tujuan:</strong> {item.dokterTujuanNama}
                      </p>
                      <span
                        className={
                          pemeriksaan.status === "Sudah Diperiksa"
                            ? "apx-status done"
                            : "apx-status process"
                        }
                      >
                        {pemeriksaan.status || "Menunggu Pemeriksaan"}
                      </span>
                    </div>
                  );
                })}
              </div>
            )}
          </section>
        )}

        {page === "obat" && (
          <section>
            <h2 className="apx-title">
              💊 {isDokter ? "Obat Saya" : "Daftar Obat"}
            </h2>

            <div className="apx-grid">
              {(isDokter ? obatUntukDokter : obatData).map((item, index) => (
                <div className="apx-card" key={index}>
                  <h3>{item.nama}</h3>
                  <p className="apx-category">{item.kategori}</p>
                  <p>
                    <strong>Spesialis:</strong> {item.spesialis}
                  </p>
                  <p>
                    <strong>Dokter:</strong> {item.dokter}
                  </p>
                  <p>
                    <strong>Harga:</strong> {item.harga}
                  </p>
                  <p>
                    <strong>Stok:</strong> {item.stok}
                  </p>

                  <span
                    className={
                      item.resep === "Perlu Resep Dokter"
                        ? "apx-status process"
                        : "apx-status done"
                    }
                  >
                    {item.resep}
                  </span>

                  {isPasien && (
                    <button onClick={() => bukaWhatsAppObat(item)}>
                      Beli via WhatsApp
                    </button>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {page === "konsultasi" && (
          <section>
            <h2 className="apx-title">
              {isDokter ? "🩺 Konsultasi Masuk" : "👨‍⚕️ Konsultasi Dokter"}
            </h2>

            {isDokter ? (
              konsultasiMasukDokter.length === 0 ? (
                <div className="apx-info">
                  <h3>Belum Ada Konsultasi</h3>
                  <p>Konsultasi muncul jika pasien memilih dokter ini.</p>
                </div>
              ) : (
                <div className="apx-grid">
                  {konsultasiMasukDokter.map((item) => {
                    const pemeriksaan = pemeriksaanData[item.email] || {};

                    return (
                      <div className="apx-card" key={item.id}>
                        <h3>{item.pasien}</h3>
                        <p className="apx-category">{item.keluhan}</p>

                        <p>
                          <strong>Email:</strong> {item.email}
                        </p>
                        <p>
                          <strong>Dokter:</strong> {currentUser.nama}
                        </p>
                        <p>
                          <strong>Spesialis:</strong> {currentUser.spesialis}
                        </p>

                        <span
                          className={
                            pemeriksaan.status === "Sudah Diperiksa"
                              ? "apx-status done"
                              : "apx-status process"
                          }
                        >
                          {pemeriksaan.status || "Menunggu Pemeriksaan"}
                        </span>

                        <div className="doctor-form">
                          <label>Hasil Pemeriksaan</label>
                          <textarea
                            placeholder="Isi hasil pemeriksaan pasien..."
                            value={pemeriksaan.hasil || ""}
                            onChange={(e) =>
                              handleUbahPemeriksaan(
                                item.email,
                                "hasil",
                                e.target.value
                              )
                            }
                          />

                          <label>Obat yang Diberikan</label>
                          <select
                            value={pemeriksaan.obat || ""}
                            onChange={(e) =>
                              handleUbahPemeriksaan(
                                item.email,
                                "obat",
                                e.target.value
                              )
                            }
                          >
                            <option value="">Pilih obat</option>
                            {obatUntukDokter.map((obat) => (
                              <option key={obat.nama} value={obat.nama}>
                                {obat.nama} - {obat.kategori}
                              </option>
                            ))}
                          </select>

                          <label>Catatan Dokter</label>
                          <textarea
                            placeholder="Isi catatan dokter..."
                            value={pemeriksaan.catatan || ""}
                            onChange={(e) =>
                              handleUbahPemeriksaan(
                                item.email,
                                "catatan",
                                e.target.value
                              )
                            }
                          />

                          <button onClick={() => handleKirimKeAkunPasien(item)}>
                            Kirim ke Akun Pasien
                          </button>
                        </div>

                        {pemeriksaan.status === "Sudah Diperiksa" && (
                          <div className="exam-result">
                            <h4>✅ Sudah Dikirim ke Akun Pasien</h4>
                            <p>
                              <strong>Hasil:</strong> {pemeriksaan.hasil}
                            </p>
                            <p>
                              <strong>Obat:</strong> {pemeriksaan.obat}
                            </p>
                            <p>
                              <strong>Catatan:</strong>{" "}
                              {pemeriksaan.catatan || "-"}
                            </p>
                            <p>
                              <strong>Tanggal:</strong> {pemeriksaan.tanggal}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )
            ) : (
              <div className="apx-grid">
                {dokterLoginData.map((item, index) => (
                  <div className="apx-card" key={index}>
                    <h3>{item.nama}</h3>
                    <p className="apx-category">{item.spesialis}</p>
                    <p>{item.jadwal}</p>
                    <span className="apx-status online">{item.status}</span>
                    <button onClick={() => bukaWhatsAppKonsultasi(item)}>
                      Konsultasi via WhatsApp
                    </button>
                  </div>
                ))}
              </div>
            )}
          </section>
        )}

        {page === "hasil" && isPasien && (
          <section>
            <h2 className="apx-title">📋 Hasil Pemeriksaan Saya</h2>

            {!hasilPemeriksaanPasien ? (
              <div className="apx-info">
                <h3>Belum Ada Hasil Pemeriksaan</h3>
                <p>
                  Hasil pemeriksaan akan muncul setelah dokter mengirim hasil ke
                  akun pasien.
                </p>
              </div>
            ) : (
              <div className="apx-card">
                <h3>{hasilPemeriksaanPasien.pasien}</h3>
                <p className="apx-category">
                  {hasilPemeriksaanPasien.status}
                </p>

                <p>
                  <strong>Dokter:</strong> {hasilPemeriksaanPasien.dokter}
                </p>
                <p>
                  <strong>Spesialis:</strong>{" "}
                  {hasilPemeriksaanPasien.spesialis}
                </p>
                <p>
                  <strong>Hasil Pemeriksaan:</strong>{" "}
                  {hasilPemeriksaanPasien.hasil}
                </p>
                <p>
                  <strong>Obat yang Diberikan:</strong>{" "}
                  {hasilPemeriksaanPasien.obat}
                </p>
                <p>
                  <strong>Catatan Dokter:</strong>{" "}
                  {hasilPemeriksaanPasien.catatan || "-"}
                </p>
                <p>
                  <strong>Tanggal:</strong> {hasilPemeriksaanPasien.tanggal}
                </p>

                <span className="apx-status done">Sudah Diperiksa</span>
              </div>
            )}
          </section>
        )}

        {page === "pengantaran" && isPasien && (
          <section>
            <h2 className="apx-title">🚚 Pengantaran Obat</h2>

            <div className="apx-table-box">
              <table>
                <thead>
                  <tr>
                    <th>Kode</th>
                    <th>Nama Obat</th>
                    <th>Pasien</th>
                    <th>Alamat</th>
                    <th>Kurir</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>
                  {pengantaranData.map((item, index) => (
                    <tr key={index}>
                      <td>{item.kode}</td>
                      <td>{item.obat}</td>
                      <td>{item.pasien}</td>
                      <td>{item.alamat}</td>
                      <td>{item.kurir}</td>
                      <td>
                        <span
                          className={
                            item.status === "Selesai"
                              ? "apx-status done"
                              : "apx-status process"
                          }
                        >
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

export default App;