import React, { useState, useEffect } from 'react';

function Independiente() {

    const [salario, setSalario] = useState();
    const [salarioRestante, setSalarioRestante] = useState();
    const [salud, setSalud] = useState();
    const [pension, setPension] = useState();

    const salarioCambio = (e) => {setSalario(e.target.value);};
    
    const calcularSeguridad = (e) => {
        e.preventDefault();
        const salarioPorcentaje = salario * 0.40;

        const saludCalculada = Math.round(salarioPorcentaje * 0.125);
        const pensionCalculada = Math.round(salarioPorcentaje * 0.16);

        const salarioRestanteCalculada =  salario - (saludCalculada + pensionCalculada);

        setSalud(saludCalculada);
        setPension(pensionCalculada);
        setSalarioRestante(salarioRestanteCalculada);
        
    };
    useEffect(() => {
        document.title = 'Independiente';
    }, []);

    return(
        <>
        <div className="fondo-boroso"></div>
        <div className='contenedor'>
            <h1>Calcular su Seguridad Social</h1>
            <form onSubmit={calcularSeguridad}>
                <label>Ingrese su salario Base: </label>  
                <input type="number" value={salario} onChange={salarioCambio} />
                <input className='boton' type="submit" />
            </form>
            <p>Seguridad Social Salud Total: ${salud}</p>
            <p>Seguridad Social Pension Total: ${pension}</p>
            <p>El empleado le queda libre es de: ${salarioRestante}</p>
        </div>
        </>
     );
    
};

export default Independiente;
