var carroJSON = {
    tipo:           'hatchback',
    marca:          'Toyota',
    modelo:         'Yaris',
    ano:            '2001',
    inscrito:        true,
    kilometraje:     125000,
    duenos: ['Jorge Rojas'],
    motor: {
        cilindro: "1500",
        kilometrosGalon: "222",
        peso: 1000
    }
}

carroJSON.duenos.push("Andres","Oscar", "Christian");
carroJSON['color'] = "blanco";
carroJSON.placa = 252692;

console.log(carroJSON); // fijese en la consola, tambien puede hacer alert y darle Run, pruebe con la function JSON.stringify(); https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify

/*
    Ejercicios
        1. Agregar una propiedad con nombre "motor", 
        de tipo JSON con nombre, que tenga las
        propiedades: cilindrada, kilometrosGalon,
        peso.
        
        2. agregue 3 nombres de dueños mas usando la funcion push
        http://www.w3schools.com/jsref/jsref_push.asp
        
        3. agregue una propiedad (pongle el nombre que quiera),
        usando: 
        nombreJson['propiedad'] = valor;
        nombreJson.propiedad = valor;
*/