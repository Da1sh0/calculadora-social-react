import './styles/estilos.css';
import React, { useState } from 'react';
import Dependiente from './components/Dependiente';
import Independiente from './components/Independiente';
import HorasExtras from './components/HorasExtras';
import Arl from './components/Arl';
//import Recargo from './components/Recargo';
import Cesantias from './components/Cesantias'
import Vacaciones from './components/Vaciones'

function App() {
  const [currentPage, setCurrentPage] = useState('Dependiente');

  const handlePageChange = (e) => {
    setCurrentPage(e.target.value);
  };

  return (
    <div>
      <select value={currentPage} onChange={handlePageChange}>
        <option value="Dependiente">Dependiente</option>
        <option value="Independiente">Independiente</option>
        <option value="Arl">ARL</option>
        <option value="HorasExtras">Horas Extras</option>
        <option value="Cesantias">Cesantias</option>
        <option value="Vacaciones">Vacaciones</option>
      </select>

      <div>
        {currentPage === 'Dependiente' && <Dependiente />}
        {currentPage === 'Independiente' && <Independiente />}
        {currentPage === 'Arl' && <Arl />}
        {currentPage === 'HorasExtras' && <HorasExtras />}
        {currentPage == 'Cesantias' && <Cesantias/>}
        {currentPage == 'Vacaciones' && <Vacaciones/>}
      </div>
    </div>
  );
}

export default App;
