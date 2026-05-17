import DeliveryStatus from '../components/DeliveryStatus'

function Pengantaran() {
  const pengantaranData = [
    {
      id: 1,
      kode: '#001',
      status: 'Sedang Dikirim',
    },
    {
      id: 2,
      kode: '#002',
      status: 'Sampai Tujuan',
    },
    {
      id: 3,
      kode: '#003',
      status: 'Menunggu Kurir',
    },
  ]

  return (
    <div>
      <h1>🚚 Pengantaran</h1>

      <div className="card-grid">
        {pengantaranData.map((item) => (
          <DeliveryStatus
            key={item.id}
            kode={item.kode}
            status={item.status}
          />
        ))}
      </div>
    </div>
  )
}

export default Pengantaran