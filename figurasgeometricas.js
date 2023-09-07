var alturaCuadrado, baseCuadrado, areaCuadrado, baseTriangulo, alturaTriangulo, radio, areaCirculo;
var PI=3.1416
var figuraGeometrica;
figuraGeometrica = parseInt(prompt("Seleccione la figura geometrica a la que le desea encontrar el area: 1. Cuadrado 2. Triangulo 3. Circulo "));

switch(figuraGeometrica) {
    case 1:
        alturaCuadrado = parseFloat(prompt("Ingrese la altura del cuadrado"));
        baseCuadrado = parseFloat(prompt("Ingrese la base del Cuadrado"));
        areaCuadrado = alturaCuadrado*baseCuadrado;
        alert("El area del cuadrado es igual a " +areaCuadrado);
        break;

    case 2:

        alturaTriangulo=parseFloat(prompt("Ingrese la altura del triangulo"));
        baseTriangulo=parseFloat(prompt("Ingrese la base del triangulo"));
        areaTriangulo=alturaTriangulo*baseTriangulo/2;
        alert("El area del triangulo es igual a" +areaTriangulo);
        break;

    case 3:

        radio=parseFloat(prompt("Ingrese el radio del circulo"));
        areaCirculo=PI*radio*radio;
        alert("El area del cuadrado es igual a" +areaCirculo);
        break;

    default:
        alert("La opcion escogida no es valida");
        break;

}
