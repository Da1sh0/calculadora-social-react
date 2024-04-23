import React, { useState } from 'react';
import VacacionesSalario from './VacacionesSalario';
import Independiente from './Independiente';

function Vacaciones() {
  const [currentPage, setCurrentPage] = useState('Dependiente');

  const handlePageChange = (e) => {
    setCurrentPage(e.target.value);
  };

  return (
    <>
      <select value={currentPage} onChange={handlePageChange}>
        <option value="VacacionesSalario">VacacionesSalario</option>
        <option value="Independiente">Independiente</option>
      </select>

        {currentPage === 'VacacionesSalario' && <VacacionesSalario />}
        {currentPage === 'Independiente' && <Independiente />}
    
    </>
  );
}

export default Vacaciones;