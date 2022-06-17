function calcularModa() {
    // extraer campos de input 
    const inputListaModa = document.getElementById("InputModaList");
    const lista = inputListaModa.value;

    //convertir en un array con el separador ","
    const arrayModa = lista.split(',').map(Number);;

    //convertir en un array en objeto para saber(contar) la cantidad de veces que se repite
    const lista1Count = {};

    arrayModa.map(
        function(elemento){
            if(lista1Count[elemento]){
                lista1Count[elemento]+=1;
            }else{
                lista1Count[elemento]=1;
            }
        }
    );
    
    //reconvertir objeto en array y ordenar
    const lista1Array = Object.entries(lista1Count).sort(
        function (elementoA,elementoB){
        return elementoA[1] - elementoB[1];
    });
    
    //Último pasa para calcular la moda
    const moda = lista1Array[lista1Array.length - 1];


    // para ordenar el listado a mostrar: 

    const modaList = lista.split(',').map(Number);

    parseInt(modaList.value);

    const modaSort = modaList.sort(
        function (a,b){
        return a - b;
    });

    
    // Mostrar Resultado en el HTML
    const ListadoModa = document.getElementById("ListadoModa");
    ListadoModa.innerText = "El listado tiene " + arrayModa.length + " elementos y su orden es: " + modaSort;  

    const ResultModa = document.getElementById("ResultModa");
    ResultModa.innerText = "La moda es:" + moda[0];

}