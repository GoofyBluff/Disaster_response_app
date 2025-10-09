import React, { useState } from 'react'

function IncidentForm() {

  const [formData, setFormData] = useState({
    reporterName: '',
    reporterRole: 'citizen',
    type: 'flood',
    description: '',
    latitude: '',
    longitude: '',
    severity: 'low',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
  e.preventDefault();

  const dataToSend = {
    reporterName: formData.reporterName,
    reporterRole: formData.reporterRole,
    type: formData.type,
    description: formData.description,
    location: {
      latitude: parseFloat(formData.latitude),
      longitude: parseFloat(formData.longitude),
    },
    severity: formData.severity,
  };

  try {
    const response = await fetch('http://localhost:5000/api/incidents', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dataToSend),
    });

    if (response.ok) {
      alert('Incident reported successfully!');
      setFormData({
        reporterName: '',
        reporterRole: 'citizen',
        type: 'flood',
        description: '',
        latitude: '',
        longitude: '',
        severity: 'low',
      });
    } else {
      alert('Failed to report incident');
    }
  } catch (error) {
    alert('Error: ' + error.message);
  }
};


  return (
    <form onSubmit={handleSubmit} className='max-w-xl mx-auto p-4 bg-white shadow rounded'>
      <h2 className='text-2xl font-bold mb-4'>Report An Incident</h2>
      <label className="block mb-2 font-semibold" htmlFor="reporterName">Your Name</label>
      <input type="text" id='reporterName' name='reporterName' value={formData.reporterName} onChange={handleChange} className='w-full border border-gray-300 rounded px-3 py-2 mb-4' required />

      <label className="block mb-2 font-semibold" htmlFor="reporterRole">Your Role</label>
      <select name="reporterRole" id="reporterRole" onChange={handleChange} value={formData.reporterRole} className='w-full border border-gray-300 rounded px-3 py-2 mb-4'>
        <option value="citizen">Citizen</option>
        <option value="responder">responder</option>
        <option value="admin">Admin</option>
      </select>

      <label className="block mb-2 font-semibold" htmlFor="type">Incident Type</label>
  <select
    id="type"
    name="type"
    value={formData.type}
    onChange={handleChange}
    className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
  >
    <option value="flood">Flood</option>
    <option value="earthquake">Earthquake</option>
    <option value="wildfire">Wildfire</option>
    <option value="other">Other</option>
  </select>

  <label className="block mb-2 font-semibold" htmlFor="description">Description</label>
  <textarea
    id="description"
    name="description"
    value={formData.description}
    onChange={handleChange}
    className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
    required
  />

  <label className="block mb-2 font-semibold" htmlFor="latitude">Latitude</label>
  <input
    id="latitude"
    name="latitude"
    type="number"
    step="any"
    value={formData.latitude}
    onChange={handleChange}
    className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
    required
  />

  <label className="block mb-2 font-semibold" htmlFor="longitude">Longitude</label>
  <input
    id="longitude"
    name="longitude"
    type="number"
    step="any"
    value={formData.longitude}
    onChange={handleChange}
    className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
    required
  />

  <label className="block mb-2 font-semibold" htmlFor="severity">Severity</label>
  <select
    id="severity"
    name="severity"
    value={formData.severity}
    onChange={handleChange}
    className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
  >
    <option value="low">Low</option>
    <option value="medium">Medium</option>
    <option value="high">High</option>
    <option value="critical">Critical</option>
  </select>

      <button type="submit" className='bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700'> Submit incident</button>
    </form>
  )
}

export default IncidentForm
