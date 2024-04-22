import './styles/estilos.css';
import React, { useState } from 'react';
import Dependiente from './components/Dependiente';
import Independiente from './components/Independiente';
import Arl from './components/Arl';

function App() {
  const [currentPage, setCurrentPage] = useState('Dependiente');

  const handlePageChange = (event) => {
    setCurrentPage(event.target.value);
  };

  return (
    <div>
      <select value={currentPage} onChange={handlePageChange}>
        <option value="Dependiente">Dependiente</option>
        <option value="Independiente">Independiente</option>
        <option value="Arl">ARL</option>
      </select>

      <div>
        {currentPage === 'Dependiente' && <Dependiente />}
        {currentPage === 'Independiente' && <Independiente />}
        {currentPage === 'Arl' && <Arl />}
      </div>
    </div>
  );
}

export default App;
