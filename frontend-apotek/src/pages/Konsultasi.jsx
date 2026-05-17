import DoctorCard from '../components/DoctorCard'
import dokterData from '../services/dokterApi'

function Konsultasi() {
  return (
    <div>
      <h1>👨‍⚕️ Konsultasi Dokter</h1>

      <div className="card-grid">
        {dokterData.map((dokter) => (
          <DoctorCard
            key={dokter.id}
            nama={dokter.nama}
            spesialis={dokter.spesialis}
          />
        ))}
      </div>
    </div>
  )
}

export default Konsultasi