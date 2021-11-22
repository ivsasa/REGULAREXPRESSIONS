"use strict";

const select = document.querySelector("#select");
//
//Funciones
//
/**
* Validaremos una palabra de 5 letras que empiece y termine con "A"
* Pista: string.prototype.test() Devuelve true o false según el patrón buscado coincide con la cadena
*/
const validarPalabra = () => {
    const pattern = /^[Aa].{3}a$/;
    const texto = prompt("Texto (patrón.\"axxxa\")")
    if (pattern.test(texto)) {//Cumple con el patron

    } else {
        alerta(`${texto} no cumple con  el patrón "axxxa"`);
    }
}

/**
 * 
 * @param {string} mensaje 
 */
const alerta = (mensaje) => {
    const msgEl = document.querySelector(".mensajes");
    msgEl.innerHTML = `<strong style = "color:red">${mensaje}</strong>`;
}

/**
 * 
 * @returns (Array) devuelve un array con numeros o vacío si no hay numeros
 */
const buscarNumeros = () =>{
    let resultado = [];
    //Buscamos números
    const patron = /\d+/g;
    const cadena = prompt("Dame mucho texto alfanumerico");
    resultado = cadena.match(patron);
    //Nulo si no hay coincidencias
    if(resultado===null){
        return[];
    }
    return resultado;
    
}


/**
 * Solicita el ingreso de la cordenada de un punto. El formato a ingresar por teclado es (999,999) Los números pueden tener entre 1 y 3 dígitos.
 */
const validaCoordenada = () => {
    const patron = /^\d{1,3},[0,9]{1,3}$/;
    const texto = prompt("Coordenada(\"999,999\")");
    if (!patron.test(texto)) {// No cumple con el patron
        alerta(`${texto} No cumple con el patron "999,999"`);
    }

}


/**
 * Confecciona una expresión regular que valide el ingreso del nombre de un día de la semana y un número de mes de 1 o 2 dígitos: Ej: "Lunes, 31"
 */

/**
 * @param {object} pattern Patron a comparar con el String
 * @param {String} msgPrompt Mensaje del prompt para que el usuario sepa lo que hacer
 */
const validarExpresionRegular = (pattern, msgPrompt) => {

    const texto = prompt(msgPrompt);

    //console.log(texto)
    if (!pattern.test(texto)) {// No cumple con el patron
        alerta(`${texto} No cumple patron:${msgPrompt}`);
    }
}



//
//Eventos
//
/**
 * 
 * @param {Object} e Evento del selector 
 */
select.onchange = (e) => {
    switch (e.target.value) {
        case "0":
            break;
        case "1":
            //Validaremos una palabra de 5 letras que empiece y termine con "A"
            validarExpresionRegular(
                /^[Aa].{3}a$/,
                `Texto (patrón.\"axxxa\")`
            );
            break;
        case "2":
            //Solicita el ingreso de la cordenada de un punto. El formato a ingresar por teclado es (999,999) Los números pueden tener entre 1 y 3 dígitos.
            // validaCoordenada();
            validarExpresionRegular(
                /^\d{1,3},[0-9]{1,3}$/,
                "Coordenada: 999,999"
            );

            break;
        case "3":
            //Confecciona una expresión regular que valide el ingreso del nombre de un día de la semana y un número de mes de 1 o 2 dígitos: Ej: "Lunes, 31"
            validarExpresionRegular(
                /^(Lunes|Martes|Miercoles|Jueves|Viernes|Sabado|Domingo), [ ]?\d{1,2}$/,
                `Fecha:"Miercoles, 31"`

            );

            break;

        case "4":
           
            //dd/mm/aaaa
            validarExpresionRegular(
                /^[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{4}$/,
                "Fecha: dd/mm/aaaa. Ej: 1/1/2001"
            );

            break;
        

        case "5":
            //Valida un número si es entero, se admiten los símbolos + ó -. Ejemplo: -3
            validarExpresionRegular(
                /^[+-]?\d+$/,
                "Número (Formatos válidos: 1, -18, +23)"
            );

            break;

        case "6":
            //Comprobar por un promp si una palabra empieza por "hiper" o "hipo"
            validarExpresionRegular(
                /^(hiper|hipo)/,
                "Palabra que empiece por hiper o hipo"

            );


        case "7": 
            //Oración con alguna palabra de al menos 6 caracteres
            validarExpresionRegular(
                /^.{6,}$/,
                "Mínimo 6 caracteres"
            )
            break;

        case "8":
            //Validar la capital de España
            validarExpresionRegular(
                /Madrid/i, //i es un flag que no distingue mayusculas de minusculas
                "Capital de España"
            )
            break;

        case "9":
            //Validar una cadena en blanco
            validarExpresionRegular(
                /^\s?$/,
                "Cadena en blanco"
            )


            break;

        case "match":
            //Buscar numeros
            const msgEl = document.querySelector(".mensajes");
            let numeros = buscarNumeros();
            msgEl.innerHTML = `<div>${numeros.join("<br>")}</div>`;
            console.log(numeros)

            break;


        default:
            break;
    }
}



