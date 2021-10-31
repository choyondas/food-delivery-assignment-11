import React, { useEffect } from 'react';

const Dashboard = () => {
    const email = 'choyondas08@gmail.com'
    useEffect(() => {
        fetch(`http://localhost:5000/myOrders/${email}`)
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])
    return (
        <div>
            <h2>hello form dash board</h2>
        </div>
    );
};

export default Dashboard;