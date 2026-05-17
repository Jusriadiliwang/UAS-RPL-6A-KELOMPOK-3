function DeliveryStatus({ kode, status }) {
  return (
    <div className="card">
      <h3>🚚 Pesanan {kode}</h3>

      <p>Status: {status}</p>
    </div>
  )
}

export default DeliveryStatus