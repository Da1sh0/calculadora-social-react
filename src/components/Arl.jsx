import React, { useState, useEffect } from 'react';

function Arl() {
  const [nivelRiesgo, setNivelRiesgo] = useState();
  const [salario, setSalario] = useState();
  const [cotizacionARL, setCotizacionARL] = useState(0);

  const tarifasARL = {
    I: 0.5,
    II: 1,
    III: 2,
    IV: 4,
    V: 6,
    VI: 8
  };

  const nivelRiesgoCambio = (e) => {
    setNivelRiesgo(e.target.value);
  };

  const salarioCambio = (e) => {
    setSalario(e.target.value);
  };

  const calcularCotizacionARL = () => {
    if (nivelRiesgo && salario) {
      const tarifa = tarifasARL[nivelRiesgo];
      const cotizacion = (salario * tarifa) / 100;
      setCotizacionARL(cotizacion);
    } else {
      alert('Por favor ingresa el nivel de riesgo y los ingresos del trabajador.');
    }
  };
  useEffect(() => {
    document.title = 'ARL';
}, []);

  return (
    <>
    <div className="fondo-boroso"></div>
    <div className='contenedor'>
      <h1>Calculadora de ARL</h1>
      <div>
        <label>Nivel de riesgo:</label>
        <select value={nivelRiesgo} onChange={nivelRiesgoCambio}>
          <option value="">Seleccionar</option>
          <option value="I">I</option>
          <option value="II">II</option>
          <option value="III">III</option>
          <option value="IV">IV</option>
          <option value="V">V</option>
          <option value="VI">VI</option>
        </select>
      </div>
      <div>
        <label>Ingrese su salario Base:</label>
        <input type="number" value={salario} onChange={salarioCambio} />
      </div>
      <button className='boton' onClick={calcularCotizacionARL}>Calcular</button>
      <p>Cotización a la ARL: ${cotizacionARL}</p>
    </div>
    </>
  );
};

export default Arl;
