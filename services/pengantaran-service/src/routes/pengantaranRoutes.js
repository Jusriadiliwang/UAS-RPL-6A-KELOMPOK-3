const express = require("express");
const router = express.Router();
const pengantaranController = require("../controllers/pengantaranController");

router.get("/health", (req, res) => {
  res.json({
    service: "pengantaran-service",
    status: "running",
    port: process.env.PORT || 8003
  });
});

router.get("/", pengantaranController.getAllPengantaran);
router.get("/:id", pengantaranController.getPengantaranById);
router.post("/", pengantaranController.createPengantaran);
router.put("/:id", pengantaranController.updatePengantaran);
router.patch("/:id/status", pengantaranController.updateStatus);
router.delete("/:id", pengantaranController.deletePengantaran);

module.exports = router;
