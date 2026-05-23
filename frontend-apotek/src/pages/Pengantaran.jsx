import { useEffect, useState } from 'react'
import DeliveryStatus from '../components/DeliveryStatus'
import { getPengantaran } from '../services/pengantaranApi'

function Pengantaran() {
  const [pengantaranData, setPengantaranData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let isMounted = true

    async function loadPengantaran() {
      try {
        setLoading(true)
        const data = await getPengantaran()

        if (isMounted) {
          setPengantaranData(data)
          setError('')
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message || 'Gagal memuat data pengantaran')
        }
      } finally {
        if (isMounted) {
          setLoading(false)
        }
      }
    }

    loadPengantaran()

    return () => {
      isMounted = false
    }
  }, [])

  return (
    <div>
      <h1>🚚 Pengantaran</h1>

      {loading && <p>Memuat data pengantaran...</p>}
      {error && <p>{error}</p>}

      {!loading && !error && (
        <div className="card-grid">
          {pengantaranData.map((item) => (
            <DeliveryStatus
              key={item.id}
              kode={item.kode}
              status={item.status}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Pengantaran