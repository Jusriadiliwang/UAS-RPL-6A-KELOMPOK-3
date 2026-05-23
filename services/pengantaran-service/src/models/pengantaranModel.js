let pengantaran = [
  {
    id: 1,
    kode: "#001",
    status: "Sedang Dikirim"
  },
  {
    id: 2,
    kode: "#002",
    status: "Sampai Tujuan"
  },
  {
    id: 3,
    kode: "#003",
    status: "Menunggu Kurir"
  }
];

let nextId = 4;

function getAllPengantaran() {
  return pengantaran;
}

function getPengantaranById(id) {
  return pengantaran.find((item) => item.id === Number(id));
}

function createPengantaran(data) {
  const newPengantaran = {
    id: nextId++,
    kode: data.kode,
    status: data.status || "Menunggu Kurir"
  };

  pengantaran.push(newPengantaran);
  return newPengantaran;
}

function updatePengantaran(id, data) {
  const item = getPengantaranById(id);

  if (!item) {
    return null;
  }

  item.kode = data.kode ?? item.kode;
  item.status = data.status ?? item.status;

  return item;
}

function updateStatus(id, status) {
  const item = getPengantaranById(id);

  if (!item) {
    return null;
  }

  item.status = status;
  return item;
}

function deletePengantaran(id) {
  const index = pengantaran.findIndex((item) => item.id === Number(id));

  if (index === -1) {
    return null;
  }

  const deleted = pengantaran.splice(index, 1);
  return deleted[0];
}

module.exports = {
  getAllPengantaran,
  getPengantaranById,
  createPengantaran,
  updatePengantaran,
  updateStatus,
  deletePengantaran
};
