// Código de cuadrado 
console.group("Cuadrado");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden:" + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perímetro del cuadrado es:" + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado es:" + areaCuadrado + "cm2");

console.groupEnd();

// Código del triángulo
console.group("Triángulo");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;


console.log(
    "Los lados del triángulo miden: " 
    + ladoTriangulo1
    + "cm "
    + ladoTriangulo2
    + "cm "
    + baseTriangulo
    + "cm "

    );

    console.log("La altura del triángulo es de: " + alturaTriangulo + "cm ");
    
    const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
    console.log("El perímetro del triángulo es:" + perimetroTriangulo + "cm");

    const areaTriangulo = (baseTriangulo * alturaTriangulo);
    console.log("El área del triángulo es:" + areaTriangulo + "cm2");

console.groupEnd();

// Código del círculo
console.group("Círculo");



//Radio
const radioCirculo = 4;

//Diámetro
const diametroCirculo = radioCirculo * 2;
console.log("El diámetro del círculo es: " + diametroCirculo + "cm");

//PI
const PI = Math.PI;
console.log("PI es: " + PI);

//Circunsferencia 
const perimetroCirculo = diametroCirculo * PI;
console.log("El perímetro del círculo es: " + perimetroCirculo + "cm");

//Área
const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El área del círculo es: " + areaCirculo + "cm2");

console.groupEnd();

