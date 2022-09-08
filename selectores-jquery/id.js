'use strict'
/**
 * Selectores de ID => Seleccionando ids de los html $('#[LA_ID_QUE_QUEREMOS_LLAMAR]')
 * EL $ => Siempre se refiere al objeto jquery
 */

window.addEventListener('load', () => {
    // probando que la integracion de jquery quedo perfecta!
    $(document).ready(() => {
        console.log('WE ARE READY TO WORK W/ JQUERY!')
    })

    // Selector ID
    $('#rojo')
        .css('color', 'red')
        .css('fontSize', '20px')
        .css('background', 'beige')

    $('#amarillo')
        .css('color', 'yellow')
        .css('fontSize', '20px')
        .css('background', 'black')

    $('#verde')
        .css('color', 'green')
        .css('fontSize', '20px')
        .css('background', 'pink')
})
