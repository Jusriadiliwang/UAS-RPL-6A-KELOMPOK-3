const dataPengantaran = [
  {
    kode: "ORD-001",
    nama: "Paracetamol",
    alamat: "Jl. Sultan Alauddin, Makassar",
    kurir: "Kurir ApotekCare",
    status: "Diproses",
  },
  {
    kode: "ORD-002",
    nama: "Vitamin C",
    alamat: "Jl. Perintis Kemerdekaan, Makassar",
    kurir: "GoSend",
    status: "Dalam Pengantaran",
  },
  {
    kode: "ORD-003",
    nama: "Amoxicillin",
    alamat: "Jl. Hertasning, Makassar",
    kurir: "JNE ApotekCare",
    status: "Selesai",
  },
];

function Pengantaran() {
  return (
    <div className="page">
      <div className="page-header">
        <h1>🚚 Pengantaran Obat</h1>
        <p>Monitoring data pengiriman pesanan obat pelanggan.</p>
      </div>

      <div className="table-card">
        <table>
          <thead>
            <tr>
              <th>Kode Pesanan</th>
              <th>Nama Obat</th>
              <th>Alamat</th>
              <th>Kurir</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {dataPengantaran.map((item, index) => (
              <tr key={index}>
                <td>{item.kode}</td>
                <td>{item.nama}</td>
                <td>{item.alamat}</td>
                <td>{item.kurir}</td>
                <td>
                  <span
                    className={
                      item.status === "Selesai"
                        ? "status selesai"
                        : "status proses"
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
    </div>
  );
}

export default Pengantaran;