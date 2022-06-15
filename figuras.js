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

// TRIANGULO //
console.group("Triángulo");

function perimetroTriangulo(lado1, lado2, base){
    return parseInt(lado1) + parseInt(lado2) + parseInt(base); 
}

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}

function alturaIsosceles(lados, base){
    return Math.sqrt((Math.pow(lados, 2) - (Math.pow(base, 2) / 4)));
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

// CIRCULO //
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


//Aquí interactuamos con el HTML

//tomar el valor del input del cuadrado y calcularlo usando la función anterior ya creada

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value)
    document.getElementById("resultadoCuadrado").innerHTML = "El perímetro es: " + perimetro + " cm";
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    document.getElementById("resultadoCuadrado").innerHTML = "El área es: " + area + " cm2";
}


//tomar el valores del input del triangulo y resolver

function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("InputTrianguloLado1");
    const value1 = input1.value;

    const input2 = document.getElementById("InputTrianguloLado2");
    const value2 = input2.value;

    const inputBase = document.getElementById("InputTrianguloBase");
    const valueBase = inputBase.value;

    const perimetro = perimetroTriangulo(value1, value2, valueBase)

    //validar que se ha entrado los datos
    if (!isNaN(perimetro)) {
        document.getElementById("resultadoTriangulo").innerHTML = "El perímetro es: " + perimetro + " cm";
    } else {
        document.getElementById("resultadoTriangulo").innerHTML = "Introduce todos los valores";
    }
    
    console.log("El perímetro del triá¡ngulo es: " + perimetro + "cm");
}
//función para calcular la altura h=sqrt(pow(a, 2)-pow(b/2, 2))
function alturaIsosceles(lados, base){
    return Math.sqrt((Math.pow(lados, 2) - (Math.pow(base, 2) / 4)));
}

//función para tomar los lados del formulario e imprimir el resultado
function calcularAlturaTriangulo() {
    const input1 = document.getElementById("InputAlturaTrianguloLado1");
    const value1 = input1.value;

    const input2 = document.getElementById("InputAlturaTrianguloLado2");
    const value2 = input2.value;

    const inputBase = document.getElementById("InputAlturaTrianguloBase");
    const valueBase = inputBase.value;

    if (value1 === value2){
        
        const altura = alturaIsosceles(value1, valueBase);

        if (altura != 0) {
            document.getElementById("resultadoAlturaTriangulo").innerHTML = "El triángulo es isosceles y su altura es : " + altura.toFixed(2); + " cm";
        } else {
            document.getElementById("resultadoAlturaTriangulo").innerHTML = "Por favor, introduce todos los valores";
        }
        
    } else {
        document.getElementById("resultadoAlturaTriangulo").innerHTML = "El triángulo no es isosceles, prueba con otros datos";
    }

}
