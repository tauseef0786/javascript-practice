import React, { useEffect, useState } from 'react';
import './Product.css'; // Import the CSS file

const Product = () => {

    const [data, setData] = useState(0); 
    const [apiData, setApiData] = useState([]); 
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    let api = `https://mock-1-9e37e-default-rtdb.europe-west1.firebasedatabase.app/data.json`;

    const handleCount = () => {
        setData((pre) => pre + 1); 
    };

    useEffect(() => {

        const getData = async () => {
            try {
                setLoading(true);
                let res = await fetch(api);
                let ans = await res.json();
                setApiData(ans);
                setLoading(false);
            } catch (error) {
                setError(true);
                setLoading(false);
                console.log('some error');
            }
        };

        getData();
    }, []);

    return (
        <div className="product-container">
            {/* <h1 className="counter">{data}</h1> */}
            {/* <button onClick={handleCount} className="inc-button">Increment</button> */}

            {loading && <h1 className="loading">Loading...</h1>}

            {error && <h1 className="error">Error fetching data!</h1>}

            <div className="product-grid">
                {apiData.map((el) => {
                    return (
                        <div key={el.id} className="product-card">
                            <img src={el.image} alt={el.name} className="product-image" />
                            <h2 className="product-price">{el.price}</h2>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Product;
