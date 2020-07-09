let operandoa;
let operandob;
let operacion;

function init() {
    //buttons declared as a variables
    let resultado = document.getElementById("resultado"); //El método getElementById permite, como su nombre indica, seleccionar un elemento del documento por medio del valor del atributo id que se le haya asignado. 
    //Se inicializan las variables y al darle el getElementbyid, se logra que lo que esta en texto en la casilla de html se guarde en el js para su posterior ejecución lógica
    let limpiar = document.getElementById("limpiar");
    let suma = document.getElementById("suma");
    let resta = document.getElementById("resta");
    let multiplicacion = document.getElementById("multiplicacion");
    let division = document.getElementById("division");
    let uno = document.getElementById("uno");
    let dos = document.getElementById("dos");
    let tres = document.getElementById("tres");
    let cuatro = document.getElementById("cuatro");
    let cinco = document.getElementById("cinco");
    let seis = document.getElementById("seis");
    let siete = document.getElementById("siete");
    let ocho = document.getElementById("ocho");
    let nueve = document.getElementById("nueve");
    let cero = document.getElementById("cero");

    //Events

    //ONCLICK -- Se ejecuta cuando damos click a un elemento del DOM en nuestro sitio, no necesariamente este debe ser un boton, puede ser un <div> u otro tag de html. Para incorporarlo en HTML basta con utilizar el atributo “onclick” en un elemento HTML y especificar el codigo o funcion de javascript a ejecutar.
    //Cuando se da un click en el id="cualquiercosa" se llama la function (e), donde "e" es el evento que el click ha pulsado. y se guardo asignado a dicha variable
    uno.onclick = function(e) {
            resultado.textContent = resultado.textContent + "1";
            //La propiedad textContent de la interfaz Node representa el contenido de texto de un nodo y sus dencendientes. 
            // nodeValue is a little more confusing to use, but faster than innerHTML.
            // innerHTML parses content as HTML and takes longer.
            // textContent uses straight text, does not parse HTML, and is faster.
            // innerText is IE specific and also takes styles into consideration. It won't get hidden text for instance.
        }
        //71 The e is short for event. The simplest way to create an event is to click somewhere on the page.When you click, a click event is triggered. This event is actually an object containing information about the action that just happened. 

    dos.onclick = function(e) {
        resultado.textContent = resultado.textContent + "2";
    }
    tres.onclick = function(e) {
        resultado.textContent = resultado.textContent + "3";
    }
    cuatro.onclick = function(e) {
        resultado.textContent = resultado.textContent + "4";
    }
    cinco.onclick = function(e) {
        resultado.textContent = resultado.textContent + "5";
    }
    seis.onclick = function(e) {
        resultado.textContent = resultado.textContent + "6";
    }
    siete.onclick = function(e) {
        resultado.textContent = resultado.textContent + "7";
    }
    ocho.onclick = function(e) {
        resultado.textContent = resultado.textContent + "8";
    }
    nueve.onclick = function(e) {
        resultado.textContent = resultado.textContent + "9";
    }
    cero.onclick = function(e) {
        resultado.textContent = resultado.textContent + "0";
    }

    reset.onclick = function(e) {
        resetear();
    }

    suma.onclick = function(e) {
        operandoa = resultado.textContent;
        operacion = "+";
        limpiar();

    }

    resta.onclick = function(e) {
        operandoa = resultado.textContent;
        operacion = "-";
        limpiar();

    }

    multiplicacion.onclick = function(e) {
        operandoa = resultado.textContent;
        operacion = "*";
        limpiar();

    }

    division.onclick = function(e) {
        operandoa = resultado.textContent;
        operacion = "/";
        limpiar();
    }

    igual.onclick = function(e) {
        operandob = resultado.textContent;
        limpiar();
    }

}

function limpiar() {
    resultado.textContent = ""
}

function resetear() {
    resultado.textContent = "";
    operandoa = 0;
    operandob = 0;
    operacion = "";
}

function resolver() {
    var res = 0;
    switch (operacion) {
        case "+":
            res = parseInt(operandoa) + parseInt(operandob)
            break;
        case "-":
            res = parseInt(operandoa) - parseInt(operandob)
            break;
        case "*":
            res = parseInt(operandoa) * parseInt(operandob)
            break;
        case "/":
            res = parseInt(operandoa) / parseInt(operandob)
            break;
    }
    resetear();
    resultado.textContent = res;
}