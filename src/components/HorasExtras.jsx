import React, { useState, useEffect } from 'react';

function HorasExtras() {
    const [salario, setSalario] = useState();

    const [horasDiurnas, setHorasDiurnas] = useState();
    const [horasNocturnas, setHorasNocturnass] = useState();
    const [horasDiurnasDominicales, setHorasDiurnasDominicales] = useState();   
    const [horasNocturnasDominicales, setHorasNocturnasDominicales] = useState();


    const [calcularDiurna, setCalcularDiurna] = useState(false);
    const [calcularNocturna, setCalcularNocturna] = useState(false);
    const [calcularDiurnaDominical, setCalcularDiurnaDominical] = useState(false);
    const [calcularNocturnaDominical, setCalcularNocturnaDominical] = useState(false);

    const [diurna, setDiurna] = useState(0);
    const [diurnaTotal, setDiurnaTotal] = useState(0);

    const [nocturna, setNocturna] = useState(0);    
    const [nocturnaTotal, setNocturnaTotal] = useState(0);

    const [diurnaDominical, setDiurnaDominical] = useState(0);
    const [diurnaDominicalTotal, setDiurnaDominicalTotal] = useState(0);

    const [nocturnaDominical, setNocturnaDominical] = useState(0);
    const [nocturnaDominicalTotal, setNocturnaDominicalTotal] = useState(0);


    const salarioCambio = (e) => {setSalario(e.target.value);};
    const horasDiurnasCambio = (e) => {setHorasDiurnas(e.target.value);};
    const horasNocturnasCambio = (e) => {setHorasNocturnass(e.target.value);};
    const horasDiurnasDominicalesCambio = (e) => {setHorasDiurnasDominicales(e.target.value);};
    const horasNocturnasDominicalesCambio = (e) => {setHorasNocturnasDominicales(e.target.value);};

    const calcularExtras = (e) => {e.preventDefault();

        const salarioHora = salario / ((47 / 6)*30);

        if (calcularDiurna) {
            const diurnaCalculada = Math.round((salarioHora * 0.25) + salarioHora);
            const diurnaTotalCal = Math.round(diurnaCalculada*horasDiurnas);
            setDiurna(diurnaCalculada);
            setDiurnaTotal(diurnaTotalCal);
        } else {
            setDiurna(null);
            setHorasDiurnas(null)
        }

        if (calcularNocturna) {
            const nocturnaCalculada = Math.round((salarioHora * 0.75)  + salarioHora);
            const nocturnaTotalCal = Math.round(nocturnaCalculada*horasNocturnas);
            setNocturna(nocturnaCalculada);
            setNocturnaTotal(nocturnaTotalCal);
        } else {
            setNocturna(null);
        }

        if (calcularDiurnaDominical) {
            const diurnaDominicalCalculada = Math.round((salarioHora * 1)  + salarioHora);
            const diurnaDominicalTotalCal = Math.round(diurnaDominicalCalculada*horasDiurnasDominicales);
            setDiurnaDominical(diurnaDominicalCalculada);
            setDiurnaDominicalTotal(diurnaDominicalTotalCal);
        } else {
            setDiurnaDominical(null);
        }

        if (calcularNocturnaDominical) {
            const nocturnaDominicalCalculada = Math.round(salarioHora * 1.5 + salarioHora);
            const nocturnaDominicalTotalCal = Math.round(nocturnaDominicalCalculada*horasNocturnasDominicales);
            setNocturnaDominical(nocturnaDominicalCalculada);
            setNocturnaDominicalTotal(nocturnaDominicalTotalCal);
        } else {
            setNocturnaDominical(null);
        }
    };

    const total = () => {
        const sumaTotal = Math.round(salario) + Math.round(diurnaTotal) + Math.round(nocturnaTotal) + Math.round(diurnaDominicalTotal) + Math.round(nocturnaDominicalTotal);
        alert(`La suma total de su salario es: ${sumaTotal}`);
    };

    useEffect(() => {
        document.title = 'Horas Extras';
    }, []);
    
    return( 
        <>
        <div className="fondo-boroso"></div>
        <div className='contenedor'>
            <h1>Calcular Valor de Horas Extras</h1>
            <div>
                <label>Ingrese su salario Base: </label>
                <input type="number" value={salario} onChange={salarioCambio} onFocus={() => console.log('Input en foco')}  onBlur={() => console.log('Input fuera de foco')}/>
                <div>
                    <label>
                        <input type="checkbox" checked={calcularDiurna} onChange={() => setCalcularDiurna(!calcularDiurna)} />
                        Calcular hora Diurna
                        {calcularDiurna && (<input type="number" value={horasDiurnas} onChange={horasDiurnasCambio}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                calcularExtras(e);
                            }
                        }}/>)}
                    </label>
                </div>
                <div>
                    <label>
                        <input type="checkbox" checked={calcularNocturna} onChange={() => setCalcularNocturna(!calcularNocturna)} />
                        Calcular hora Nocturna
                        {calcularNocturna && (<input type="number" value={horasNocturnas} onChange={horasNocturnasCambio}
                        onKeyUp={(e) => {
                            if (e.key === 'Enter') {
                                calcularExtras(e);
                            }
                        }}/>)}   
                    </label>
                </div>
                <div>
                    <label>
                        <input type="checkbox" checked={calcularDiurnaDominical} onChange={() => setCalcularDiurnaDominical(!calcularDiurnaDominical)} />
                        Calcular hora Diurna Dominical
                        {calcularDiurnaDominical && (<input type="number" value={horasDiurnasDominicales} onChange={horasDiurnasDominicalesCambio}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                calcularExtras(e);
                            }
                        }}/>)}
                    </label>
                </div>
                <div>
                    <label>
                        <input type="checkbox" checked={calcularNocturnaDominical} onChange={() => setCalcularNocturnaDominical(!calcularNocturnaDominical)} />
                        Calcular hora Nocturna Dominical
                        {calcularNocturnaDominical && (<input type="number" value={horasNocturnasDominicales} onChange={horasNocturnasDominicalesCambio}
                        onKeyUp={(e) => {
                            if (e.key === 'Enter') {
                                calcularExtras(e);
                            }
                        }}/>)}
                    </label>
                </div>
                <button className='boton' onClick={calcularExtras}>Calcular</button>
                <button className='boton' onDoubleClick={total}>Calcular la suma total</button>
            </div>
            {diurna !== null && <p>Valor de la hora Diurna: ${diurna} para un total de: ${diurnaTotal}</p>}
            {nocturna !== null && <p>Valor de la hora Nocturna: ${nocturna} para un total de: ${nocturnaTotal}</p>}
            {diurnaDominical !== null && <p>Valor de la hora Diurna Dominical: ${diurnaDominical} para un total de: ${diurnaDominicalTotal}</p>}
            {nocturnaDominical !== null && <p>Valor de la hora Nocturna Dominical: ${nocturnaDominical} para un total de: ${nocturnaDominicalTotal}</p>}
        </div>
        </>
     );
}

export default HorasExtras;
