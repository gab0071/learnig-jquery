'use strict'
/**
 * Selectores de etiquetas => Son muy parecidos a los selecctores de clases
 * EL $ => Siempre se refiere al objeto jquery
 * una clase es cuando necesitamos añadirle una propiedad,estilo,etc.. en comun a muchos elementos
 */

window.addEventListener('load', () => {
    // probando que la integracion de jquery quedo perfecta!
    $(document).ready(() => {
        console.log('WE ARE READY TO WORK W/ CLASS SELECTOR!')
    })

    //  ID Selector
    $('#rojo').css('color', 'red').css('background', 'beige')

    $('#amarillo').css('color', 'yellow').css('background', 'orange')

    $('#verde').css('color', 'green').css('background', 'pink')

    // class selector
    let my_class = $('.zebra')
    console.log(my_class)

    $('.none_border').click(function () {
        console.log('click dado')
        $(this).addClass('zebra')
    })

    // selectores de etiquetas
    // css('cursor', 'pointer') para que el usuario sepa que puede dar click
    let parrafo = $('p').css('cursor', 'pointer')
    parrafo.click(function () {
        let that = $(this)
        if (!that.hasClass('big')) {
            that.addClass('big')
        } else {
            that.removeClass('big')
        }
    })

})
