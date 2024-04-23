import React, { useState, useEffect } from 'react';

function VacacionesSalario() {
    const [salario, setSalario] = useState();
    const [diasTrabajados, setDiasTrabajados] = useState();
    const [mesesVinculado, setMesesVinculado] = useState();
    
    const [cesantias, setCesantias] = useState();
    const [interesCesantias, setInteresCesantias] = useState();

    const salarioCambio = (e) => {setSalario(e.target.value);};
    const diasTrabajadosSemestre = (e) => {setDiasTrabajados(e.target.value);};

    const calcularCesantias = (e) => {e.preventDefault();

        const cesantias = (salario * diasTrabajados) / 360;
        const interesCesantias = (cesantias * diasTrabajados * 0.12) / 360
        setCesantias(parseInt(cesantias))
        setInteresCesantias(parseInt(interesCesantias))
    };

    useEffect(() => {
        document.title = 'Cesantias';
    }, []);
    
    return( 
        <>
        <div className="fondo-boroso"></div>
        <div className='contenedor'>
            <h1>Calcular Vacaciones</h1>
            <div>
                <label>Ingrese su salario Base: </label>
                <input type="number" value={salario} onChange={salarioCambio}/>
            </div>
            <div>
                <label>Ingrese los dias trabajados: </label>
                <input type="number" value={diasTrabajados} onChange={diasTrabajadosSemestre}/>
            </div>
            <button className='boton' onClick={calcularCesantias}>Calcular</button>
            <p>Sus Cesantias son: ${cesantias}</p>
            <p>El interes de sus Cesantias son: ${interesCesantias}</p>
        </div>
        </>
     );
}

export default VacacionesSalario;