function calcularMediaAritmetica(lista) {    
    //Método de Listas
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
           return valorAcumulado + nuevoElemento; 
        }
    );

    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}

const lista1 = [
    100,
    200,
    300,
    500,
];





function calcularMediana() {

    const inputListaMediana = document.getElementById("InputMedianaList");
    const lista = inputListaMediana.value;

    const arrayMediana = lista.split(',').map(Number)

    parseInt(arrayMediana.value);

    arrayMediana.sort(function(a, b){return a - b}); // --> 3, 12, 23


    console.log(arrayMediana);

    const mitadLista1 =  parseInt(lista1.length / 2);

    function esPar(numerito) {
        if (numerito % 2 === 0) {
            return true;
        } else {
            return false
        }
    }

    let mediana;

    if (esPar(lista1.length)) {
        const elemento1 = lista1[mitadLista1 - 1] ;
        const elemento2 = lista1[mitadLista1];

        const promedioElemento1y2 = calcularMediaAritmetica([
            elemento1,
            elemento2,
        ]);

        mediana = promedioElemento1y2;

    } else {
        mediana = lista1[mitadLista1];
    }

    const ListadoMediana = document.getElementById("ListadoMediana");
    ListadoMediana.innerText = "El listado tiene " + arrayMediana.length + " números y su orden es: " + arrayMediana.join(' | ');  

    const ResultMediana = document.getElementById("ResultMediana");
    ResultMediana.innerText = "La mediana es " + mediana;
}