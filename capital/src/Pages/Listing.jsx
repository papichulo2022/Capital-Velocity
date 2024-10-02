// src/Pages/Listing.jsx
import React from 'react';
import Navbar from '../Components/Navbar';
import Card from '../Components/Card';
import Footer from '../Components/Footer';

function Listing() {
  const items = [
    { title: 'Item 1', description: 'Description for Item 1' },
    { title: 'Item 2', description: 'Description for Item 2' },
    { title: 'Item 3', description: 'Description for Item 3' },
  ];

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div>
        <Navbar />
        <h1>Listing Page</h1>
        <div>
          {items.map((item, index) => (
            <Card key={index} title={item.title} description={item.description} />
          ))}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Listing;
