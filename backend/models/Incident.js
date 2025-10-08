import mongoose from 'mongoose';

const IncidentSchema = new mongoose.Schema({
  reporterName: {
    type: String,
    required: true,
  },
  reporterRole: {
    type: String,
    enum: ['citizen', 'responder', 'admin'],
    default: 'citizen',
  },
  type: {
    type: String,
    required: true,
    enum: ['flood', 'earthquake', 'wildfire', 'other'],
  },
  description: {
    type: String,
    required: true,
  },
  location: {
    latitude: {
      type: Number,
      required: true,
    },
    longitude: {
      type: Number,
      required: true,
    }
  },
  mediaUrls: {
    // Array of strings: links to photos/videos stored in cloud or file storage
    type: [String],
    default: [],
  },
  severity: {
    type: String,
    enum: ['low', 'medium', 'high', 'critical'],
    default: 'low',
  },
  status: {
    type: String,
    enum: ['reported', 'in_progress', 'resolved'],
    default: 'reported',
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Incident = mongoose.model('Incident', IncidentSchema);

export default Incident;