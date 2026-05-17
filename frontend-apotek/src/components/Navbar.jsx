function Navbar({ setActivePage }) {
  return (
    <div className="sidebar">
      <h2>💊 ApotekCare</h2>

      <button onClick={() => setActivePage('home')}>
        🏠 Home
      </button>

      <button onClick={() => setActivePage('dashboard')}>
        📊 Dashboard
      </button>

      <button onClick={() => setActivePage('obat')}>
        💊 Obat
      </button>

      <button onClick={() => setActivePage('konsultasi')}>
        👨‍⚕️ Konsultasi
      </button>

      <button onClick={() => setActivePage('pengantaran')}>
        🚚 Pengantaran
      </button>
    </div>
  )
}

export default Navbar