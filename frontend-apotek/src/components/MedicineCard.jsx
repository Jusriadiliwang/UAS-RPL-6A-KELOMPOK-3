function MedicineCard({ nama, harga, stok }) {
  return (
    <div className="card">
      <h3>💊 {nama}</h3>

      <p>{harga}</p>

      <p>Stok: {stok}</p>

      <button>Beli Sekarang</button>
    </div>
  )
}

export default MedicineCard