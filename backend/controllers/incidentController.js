import Incident from "../models/Incident.js";

// POST /api/incidents - create a new incident report
export const createIncident = async (req, res) => {
  try {
    const newIncident = new Incident(req.body);
    const savedIncident = await newIncident.save();
    res.status(201).json(savedIncident);
  } catch (error) {
    res.status(500).json({ message: "Server error: " + error.message});
  }
};

export const getIncidents = async (req, res) => {
  try {
    const incidents = await Incident.find();
    res.status(200).json(incidents)
  } catch (error) {
    res.status(500).json({ message: "Server error: " + error.message });
  }
};