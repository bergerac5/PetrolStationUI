import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Inventory.css';  // Import the CSS file

function Inventory() {
  const [columns, setColumns] = useState([]);
  const [records, setRecords] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8081/auth/displayInventory')
      .then(res => {
        setColumns(Object.keys(res.data[0]));
        setRecords(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  const handleDelete = (fuelId) => {
    axios.delete(`http://localhost:8081/auth/deleteInventory/${fuelId}`)
      .then(res => {
        alert("Inventory deleted successfully");
        setRecords(records.filter(record => record.fuelId !== fuelId)); // Update state to remove deleted item
        navigate('/inventory');
      })
      .catch(err => console.log(err));
  };

  return (
    <div className='container mt-5'>
      <h1 className='text-center'>Inventory</h1>
      <div className="text-end mb-3">
        <Link to='/createInventory' className='btn btn-primary'>Add +</Link>
      </div>
      <table className='table'>
        <thead>
          <tr>
            {columns.map((c, i) => (
              <th key={i}>{c}</th>
            ))}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {records.map((d, i) => (
            <tr key={i}>
              <td>{d.fuelId}</td>
              <td>{d.fuelType}</td>
              <td>{d.fuel_quantity}</td>
              <td>{d.last_Updated}</td>
              <td>{d.fuel_pricePerUnity}</td>
              <td>
                <Link to={`/updateInv/${d.fuelId}`} className='btn btn-secondary me-2'>Update</Link>
                <button onClick={() => handleDelete(d.fuelId)} className='btn btn-danger'>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Inventory;

