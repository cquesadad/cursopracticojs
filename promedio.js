const lista1 = [
    100,
    200,
    300,
    500,
];




//Crear array de lista a partir del input

function calcularMediaAritmetica() {

    const inputLista = document.getElementById("InputPromedioList");
    const lista = inputLista.value;
    const arrayDeCadenas = lista.split(',').map(Number);

    parseInt(arrayDeCadenas.value);

    console.log(arrayDeCadenas);

    //Método de Listas
    const sumaLista = arrayDeCadenas.reduce(
        function (valorAcumulado = 0, nuevoElemento){
           return valorAcumulado + nuevoElemento; 
        }
    );

    const promedioLista = sumaLista / arrayDeCadenas.length;

    console.log(promedioLista);

    const ListadoPromedio = document.getElementById("ListadoPromedio");
    ListadoPromedio.innerText = "El listado tiene " + arrayDeCadenas.length + " números: " + lista;  

     

    const ResultPromedio = document.getElementById("ResultPromedio");
    ResultPromedio.innerText = "El promedio es " + promedioLista.toFixed(2);
}

//Calcular promedio

/*

function calcularMediaAritmetica(lista) {

    const inputLista = document.getElementById("InputPromedioList");
    const lista = inputLista.value;
    const arrayDeCadenas = lista.split(",");

    console.log

    // Ciclo FOR

    //let sumaLista = 0;
    //for (let i = 0; i < lista.length; i ++) {
    //    sumaLista = sumaLista + lista[i];
    //}

    //Método de Listas
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
           return valorAcumulado + nuevoElemento; 
        }
    );

    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}*/