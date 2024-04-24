import React, { useState, useEffect } from 'react';

function Vacaciones() {
  const [salario, setSalario] = useState('');
  const [diasTrabajados, setDiasTrabajados] = useState('');
  const [vacaciones, setVacaciones] = useState(0);

  const salarioCambio = (e) => {
    setSalario(e.target.value);
  };

  const diasTrabajadosSemestre = (e) => {
    setDiasTrabajados(e.target.value);
  };

  const calcularVacaciones = (e) => {
    e.preventDefault();
    const vacaciones = (salario * diasTrabajados) / 720;
    setVacaciones(Math.round(vacaciones)); 
  };
  useEffect(() => {
    document.title = 'Vacaciones';
  }, []);

  return (
    <>
      <div className="fondo-boroso"></div>
      <div className="contenedor">
        <h1>Calcular Vacaciones</h1>
        <div>
          <label>Ingrese su salario Base: </label>
          <input type="number" value={salario} onChange={salarioCambio} />
        </div>
        <div>
          <label>Ingrese los días trabajados: </label>
          <input type="number" value={diasTrabajados} onChange={diasTrabajadosSemestre} />
        </div>
        <button className="boton" onClick={calcularVacaciones}>
          Calcular
        </button>
        <p>Sus vacaciones son de: ${vacaciones}</p>
      </div>
    </>
  );
}

export default Vacaciones;
