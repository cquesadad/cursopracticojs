// CÓDIGO CUADRADO

console.group("Cuadrado");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden:" + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}

//const perimetroCuadrado = ladoCuadrado * 4;
//console.log("El perímetro del cuadrado es:" + perimetroCuadrado + "cm");
//const areaCuadrado = ladoCuadrado * ladoCuadrado;
//console.log("El área del cuadrado es:" + areaCuadrado + "cm2");

console.groupEnd();

// Código del triángulo
console.group("Triángulo");

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base; 
}

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}

//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;
//const alturaTriangulo = 5.5;


//console.log("Los lados del triángulo miden: " + ladoTriangulo1 + "cm "+ ladoTriangulo2+ "cm "+ baseTriangulo+ "cm ");

//console.log("La altura del triángulo es de: " + alturaTriangulo + "cm ");
    
//const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
//    console.log("El perímetro del triángulo es:" + perimetroTriangulo + "cm");

//    const areaTriangulo = (baseTriangulo * alturaTriangulo);
//    console.log("El área del triángulo es:" + areaTriangulo + "cm2");

console.groupEnd();

// Código del círculo
console.group("Círculo");


//Radio
const radioCirculo = 4;

//PI
const PI = Math.PI;

//Diámetro
function diametroCirculo(radio){
    return radio * 2;
}

//Circunsferencia 
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI
}

//Circunsferencia 
function areaCirculo(radio){
    return radio * radio;
}


//const diametroCirculo = radioCirculo * 2;
//console.log("El diámetro del círculo es: " + diametroCirculo + "cm");

//PI//console.log("PI es: " + PI);


//const perimetroCirculo = diametroCirculo * PI;
//console.log("El perímetro del círculo es: " + perimetroCirculo + "cm");

//Área
//const areaCirculo = (radioCirculo * radioCirculo) * PI;
//console.log("El área del círculo es: " + areaCirculo + "cm2");

console.groupEnd();

