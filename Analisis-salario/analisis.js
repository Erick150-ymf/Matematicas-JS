// Analisis salarial de Juanita

function encontrarPersona(personaEnBusqueda) {
    return salarios.find(persona => persona.name == personaEnBusqueda);
    
    // const persona = salarios.find((persona) => {
        //     return persona.name == personaEnBusqueda;
        // });
        // return persona;
}

function medianaPorPersona(nombrePersona) {
    const trabajos = encontrarPersona(nombrePersona).trabajos;
    
    const salarios = trabajos.map(function (element) {
        return element.salario;
    });
    
    const medianaSalarios = ErickMath.calcularMedia(salarios);
    
    console.log(medianaSalarios)
    return medianaSalarios;
}

function proyeccionPorPersona(nombrePersona) {
    // Declaramos una constante trabajos y extraemos el nombre de la persona y su trabajo
    const trabajos = encontrarPersona(nombrePersona).trabajos;
    
    // Inicializamos los porcentajesCrecimiento como un array. vacio
    let porcentajesCrecimiento = [];

    // Dentro del ciclo for manipularemos los datos
    for (let i = 1; i < trabajos.length; i++) {
        // Declaramos el salario: Pasado, Actual, crecimiento, porcentaje de Crecimiento.
        const salarioActual = trabajos[i].salario;

        // Dentro de salarioPasado extraemos el segundo salario.
        const salarioPasado = trabajos[i - 1].salario;

        // Evualuamos el crecimiento y el porcentajeCrecimiento en relacion al salarioPasado
        const crecimiento = salarioActual - salarioPasado;
        const porcentajeCrecimiento = crecimiento / salarioPasado;

        // Luego en el objeto porcentajeCrecimiento ingresamos cada porcentajeCrecimiento dependiendo de la persona y salimos del ciclo for.
        porcentajesCrecimiento.push(porcentajeCrecimiento);
    }

    // Calculamos la mediadaCrecimientoPorPersona usando la funcion calcularMedia del archivo promedio.
    const medianaCrecimientoPorPersona = ErickMath.calcularMedia(porcentajesCrecimiento);

    // Calculamos el nuevoSalario y retornamos el salario que podria ganar segun los datos propocionados en salarios.js
    const ultimoSalario = trabajos[trabajos.length - 1].salario;
    const aumento = ultimoSalario * medianaCrecimientoPorPersona;
    const nuevoSalario = ultimoSalario + aumento;

    return nuevoSalario;
}
