import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Plane, Trash2, MapPin, DollarSign } from 'lucide-react';
import './App.css';

const API_URL = 'http://localhost:5000/api/trips';

function App() {
    const [trips, setTrips] = useState([]);
    const [form, setForm] = useState({ destination: '', date: '', budget: '' });

    useEffect(() => {
        axios.get(API_URL).then(res => setTrips(res.data));
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.post(API_URL, form);
        setTrips([...trips, res.data]);
        setForm({ destination: '', date: '', budget: '' });
    };

   const deleteTrip = async (id) => {
    await axios.delete(`http://localhost:5000/api/trips/${id}`);
    setTrips(trips.filter(trip => trip._id !== id)); // Updates UI instantly
};



    const totalBudget = trips.reduce((sum, trip) => sum + Number(trip.budget || 0), 0);

    return (
        <div className="app-container">
            <header>
                <h1><Plane /> Smart Travel Dashboard</h1>
                <div className="budget-badge">Total Budget: ${totalBudget}</div>
            </header>

            <form onSubmit={handleSubmit} className="trip-form">
                <input placeholder="Destination" value={form.destination} onChange={e => setForm({...form, destination: e.target.value})} required />
                <input type="date" value={form.date} onChange={e => setForm({...form, date: e.target.value})} required />
                <input type="number" placeholder="Budget" value={form.budget} onChange={e => setForm({...form, budget: e.target.value})} required />
                <button type="submit">Add Trip</button>
            </form>

            <div className="grid">
                {trips.map(trip => (
                    <div key={trip._id} className="card">
                        <h3><MapPin size={18} /> {trip.destination}</h3>
                        <p>Date: {trip.date}</p>
                        <p>Cost: ${trip.budget}</p>
                        <button onClick={() => deleteTrip(trip._id)} className="delete-btn"><Trash2 size={16}/>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;