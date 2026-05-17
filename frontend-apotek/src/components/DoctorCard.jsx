function DoctorCard({ nama, spesialis }) {
  return (
    <div className="card">
      <h3>👨‍⚕️ {nama}</h3>
      <p>{spesialis}</p>

      <button>Konsultasi</button>
    </div>
  )
}

export default DoctorCard