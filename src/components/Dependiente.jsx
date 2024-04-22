import React, { useState, useEffect  } from 'react';

function Dependiente() {

    const [salario, setSalario] = useState();

    const [salarioRestante, setSalarioRestante] = useState();

    const [salud, setSalud] = useState();
    const [saludEmple, setSaludEmple] = useState();
    const [saludEmpre, setSaludEmpre] = useState();

    const [pension, setPension] = useState();
    const [pensionEmple, setPensionEmple] = useState();
    const [pensionEmpre, setPensionEmpre] = useState();

    const salarioCambio = (e) => {setSalario(e.target.value);};
    
    const calcularSeguridad = (e) => {
        e.preventDefault();
        const salarioPorcentaje = salario * 0.40;

        const saludCalculada = salarioPorcentaje * 0.125;
        const saludEmpleado = salarioPorcentaje * 0.04;
        const saludEmpresa = salarioPorcentaje * 0.085;

        const pensionCalculada = salarioPorcentaje * 0.16;
        const pensionEmpleado = salarioPorcentaje * 0.04;
        const pensionEmpresa = salarioPorcentaje * 0.12;

        const salarioRestanteCalculada =  salario - (pensionEmpleado + saludEmpleado);

        setSalud(saludCalculada);
        setSaludEmple(saludEmpleado);
        setSaludEmpre(saludEmpresa);
        console.log(saludEmpleado+saludEmpresa);

        setPension(pensionCalculada);
        setPensionEmple(pensionEmpleado);
        setPensionEmpre(pensionEmpresa);
        console.log(pensionEmpleado+pensionEmpresa);

        setSalarioRestante(salarioRestanteCalculada);
        

    };
    useEffect(() => {
        document.title = 'Dependiente';
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
            <p>Seguridad Social Salud que paga el empleado: ${saludEmple}</p>
            <p>Seguridad Social Salud que paga la empresa: ${saludEmpre}</p>
            <p>Seguridad Social Pension Total: ${pension}</p>
            <p>Seguridad Social Pension que paga el empleado: ${pensionEmple}</p>
            <p>Seguridad Social Pension que paga la empresa: ${pensionEmpre}</p>
            <p>El empleado le queda libre es de: ${salarioRestante}</p>
        </div>
        </>
     );
    
};

export default Dependiente;
