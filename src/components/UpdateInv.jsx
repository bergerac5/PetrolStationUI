import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import '../styles/CreateInv.css';

function UpdateInv() {
    const { fuelId } = useParams();
    const [data, setData] = useState({
        fuelId: '',
        fuelType: '',
        fuel_quantity: '',
        fuel_pricePerUnity: ''
    });
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8081/auth/inventory/${fuelId}`)
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, [fuelId]);

    function handleSubmit(e) {
        e.preventDefault();
        axios.put('http://localhost:8081/auth/updateInventory', data)
            .then(res => {
                alert('Inventory Updated Successfully');
                navigate('/inventory');
            })
            .catch(err => console.log(err));
        
    }

    return (
        <div>
            <form className="fuel-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="fuelId">Fuel ID</label>
                    <input
                        type="text"
                        id="fuelId"
                        value={data.fuelId}
                        disabled
                        onChange={e => setData({ ...data, fuelId: e.target.value })}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="fuelType">Fuel Type</label>
                    <input
                        type="text"
                        id="fuelType"
                        value={data.fuelType}
                        onChange={e => setData({ ...data, fuelType: e.target.value })}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="fuelQuantity">Fuel Quantity</label>
                    <input
                        type="text"
                        id="fuelQuantity"
                        value={data.fuel_quantity}
                        onChange={e => setData({ ...data, fuel_quantity: e.target.value })}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="fuelPricePerUnit">Fuel Price Per Unit</label>
                    <input
                        type="text"
                        id="fuelPricePerUnit"
                        value={data.fuel_pricePerUnity}
                        onChange={e => setData({ ...data, fuel_pricePerUnity: e.target.value })}
                        required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default UpdateInv;
