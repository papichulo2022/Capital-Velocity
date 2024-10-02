import React, { useState } from 'react';
import BussinesLocation from './BussinesLocation';
import Marketplace from './Marketplace';

const MainComponent = () => {
  const [selectedState, setSelectedState] = useState('');

  return (
    <div>
      <BussinesLocation setSelectedState={setSelectedState} />
      <Marketplace selectedState={selectedState} />
    </div>
  );
};

export default MainComponent;
