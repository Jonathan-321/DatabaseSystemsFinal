const express = require('express');
const router = express.Router();
const doctorService = require('../services/doctorService');

// GET /api/doctors - Get all doctors
router.get('/', async (req, res) => {
  try {
    const doctors = await doctorService.getAllDoctors();
    res.json(doctors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET /api/doctors/:id - Get doctor by ID
router.get('/:id', async (req, res) => {
  try {
    const doctor = await doctorService.getDoctorById(req.params.id);
    if (!doctor) {
      return res.status(404).json({ error: 'Doctor not found' });
    }
    res.json(doctor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST /api/doctors - Create new doctor
router.post('/', async (req, res) => {
  try {
    const doctor = await doctorService.createDoctor(req.body);
    res.status(201).json(doctor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// PUT /api/doctors/:id - Update doctor
router.put('/:id', async (req, res) => {
  try {
    const doctor = await doctorService.updateDoctor(req.params.id, req.body);
    res.json(doctor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE /api/doctors/:id - Delete doctor
router.delete('/:id', async (req, res) => {
  try {
    await doctorService.deleteDoctor(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;

