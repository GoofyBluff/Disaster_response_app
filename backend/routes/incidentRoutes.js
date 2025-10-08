import express from 'express';
import { createIncident, getIncidents } from '../controllers/incidentController.js';

const router = express.Router();

router.post('/', createIncident);
router.get('/', getIncidents)

export default router;