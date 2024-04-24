import React, { useState, useEffect } from 'react';

function Vacaciones() {
  const [salario, setSalario] = useState('');
  const [diasTrabajados, setDiasTrabajados] = useState('');
  const [vacaciones, setVacaciones] = useState(0);

  const salarioCambio = (e) => {
    setSalario(e.target.value);
  };

  const validarNumero = (e) => {
    const inputValue = e.target.value;
    if (inputValue < 0 || inputValue > 360) {
      alert("El número debe estar entre 0 y 360.");
      // Puedes tomar otras acciones aquí, como establecer el valor a 0 o 360
      // setDiasTrabajados(inputValue < 0 ? 0 : 360);
    } else {
      setDiasTrabajados(inputValue);
    }
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
          <input 
            type="number" 
            value={diasTrabajados} 
            onChange={validarNumero} 
            min="0" 
            max="360" 
          />
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
