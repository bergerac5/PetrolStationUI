import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/CreateInv.css'

function CreateInv() {
    const [inputData, setInputData] = useState({ fuelType: '', fuel_quantity: '', fuel_pricePerUnity: '' });
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8081/auth/saveInventory', inputData)
            .then(res => {
                alert('Inventory Added Successfully');
                navigate('/inventory');
            }).catch(err => console.log(err));
    };

    return (
        <div>
            <form className="fuel-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="fuelType">Fuel Type</label>
                    <input
                        type="text"
                        id="fuelType"
                        value={inputData.fuelType}
                        onChange={(e) => setInputData({ ...inputData, fuelType: e.target.value })}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="fuelQuantity">Fuel Quantity</label>
                    <input
                        type="text"
                        id="fuelQuantity"
                        value={inputData.fuel_quantity}
                        onChange={(e) => setInputData({ ...inputData, fuel_quantity: e.target.value })}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="fuelPricePerUnit">Fuel Price Per Unit</label>
                    <input
                        type="text"
                        id="fuelPricePerUnit"
                        value={inputData.fuel_pricePerUnity}
                        onChange={(e) => setInputData({ ...inputData, fuel_pricePerUnity: e.target.value })}
                        required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default CreateInv;
