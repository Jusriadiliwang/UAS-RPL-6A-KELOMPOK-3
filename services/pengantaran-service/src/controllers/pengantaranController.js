const pengantaranModel = require("../models/pengantaranModel");

function getAllPengantaran(req, res) {
  res.json({
    service: "pengantaran-service",
    message: "Daftar pengantaran berhasil ditampilkan",
    data: pengantaranModel.getAllPengantaran()
  });
}

function getPengantaranById(req, res) {
  const pengantaran = pengantaranModel.getPengantaranById(req.params.id);

  if (!pengantaran) {
    return res.status(404).json({
      message: "Pengantaran tidak ditemukan"
    });
  }

  res.json({
    service: "pengantaran-service",
    message: "Detail pengantaran berhasil ditampilkan",
    data: pengantaran
  });
}

function createPengantaran(req, res) {
  const { kode, status } = req.body;

  if (!kode) {
    return res.status(400).json({
      message: "kode wajib diisi"
    });
  }

  const pengantaran = pengantaranModel.createPengantaran({
    kode,
    status: status || "Menunggu Kurir"
  });

  res.status(201).json({
    service: "pengantaran-service",
    message: "Pengantaran berhasil ditambahkan",
    data: pengantaran
  });
}

function updatePengantaran(req, res) {
  const pengantaran = pengantaranModel.updatePengantaran(req.params.id, req.body);

  if (!pengantaran) {
    return res.status(404).json({
      message: "Pengantaran tidak ditemukan"
    });
  }

  res.json({
    service: "pengantaran-service",
    message: "Data pengantaran berhasil diperbarui",
    data: pengantaran
  });
}

function updateStatus(req, res) {
  const { status } = req.body;

  if (!status) {
    return res.status(400).json({
      message: "status wajib diisi"
    });
  }

  const pengantaran = pengantaranModel.updateStatus(req.params.id, status);

  if (!pengantaran) {
    return res.status(404).json({
      message: "Pengantaran tidak ditemukan"
    });
  }

  res.json({
    service: "pengantaran-service",
    message: "Status pengantaran berhasil diperbarui",
    data: pengantaran
  });
}

function deletePengantaran(req, res) {
  const pengantaran = pengantaranModel.deletePengantaran(req.params.id);

  if (!pengantaran) {
    return res.status(404).json({
      message: "Pengantaran tidak ditemukan"
    });
  }

  res.json({
    service: "pengantaran-service",
    message: "Pengantaran berhasil dihapus",
    data: pengantaran
  });
}

module.exports = {
  getAllPengantaran,
  getPengantaranById,
  createPengantaran,
  updatePengantaran,
  updateStatus,
  deletePengantaran
};
