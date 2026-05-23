require("dotenv").config();

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const pengantaranRoutes = require("./routes/pengantaranRoutes");

const app = express();
const PORT = process.env.PORT || 8003;

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.json({
    service: process.env.SERVICE_NAME || "Pengantaran Service",
    message: "Service pengantaran apotek berjalan",
    endpoints: {
      daftar_pengantaran: "GET /api/pengantaran",
      detail_pengantaran: "GET /api/pengantaran/:id",
      tambah_pengantaran: "POST /api/pengantaran",
      update_pengantaran: "PUT /api/pengantaran/:id",
      update_status: "PATCH /api/pengantaran/:id/status",
      hapus_pengantaran: "DELETE /api/pengantaran/:id",
      health_check: "GET /api/pengantaran/health"
    }
  });
});

app.use("/api/pengantaran", pengantaranRoutes);

app.use((req, res) => {
  res.status(404).json({
    message: "Endpoint tidak ditemukan di pengantaran-service"
  });
});

app.listen(PORT, () => {
  console.log(`Pengantaran Service berjalan di http://localhost:${PORT}`);
});
