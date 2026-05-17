import MedicineCard from '../components/MedicineCard'
import obatData from '../services/obatApi'

function Obat() {
  return (
    <div>
      <h1>💊 Daftar Obat</h1>

      <div className="card-grid">
        {obatData.map((obat) => (
          <MedicineCard
            key={obat.id}
            nama={obat.nama}
            harga={obat.harga}
            stok={obat.stok}
          />
        ))}
      </div>
    </div>
  )
}

export default Obat