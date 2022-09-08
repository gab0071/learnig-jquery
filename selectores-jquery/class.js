'use strict'
/**
 * Selectores de clases => Seleccionando clases de los html $('.[LA_ID_QUE_QUEREMOS_LLAMAR]')
 * EL $ => Siempre se refiere al objeto jquery
 * una clase es cuando necesitamos añadirle una propiedad,estilo,etc.. en comun a muchos elementos
 */

window.addEventListener('load', () => {
    // probando que la integracion de jquery quedo perfecta!
    $(document).ready(() => {
        console.log('WE ARE READY TO WORK W/ CLASS SELECTOR!')
    })

    //  ID Selector
    $('#rojo')
        .css('color', 'red')
        .css('fontSize', '20px')
        .css('background', 'beige')

    $('#amarillo').css('color', 'yellow').css('background', 'orange')

    $('#verde')
        .css('color', 'green')
        .css('fontSize', '20px')
        .css('background', 'pink')

    // class selector
    let my_class = $('.zebra')
    console.log(my_class)

    $('.none_border').click(function () {
        console.log('click dado')
        $(this).addClass('zebra')
    })
})
