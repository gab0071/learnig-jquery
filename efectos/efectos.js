'use strict'
/**
 *
 */

window.addEventListener('load', () => {
    // probando que la integracion de jquery quedo perfecta!
    $(document).ready(function () {
        console.log('Jquery is ready baby!')
    })

    let caja = $('#caja')

    // para que venga oculto el boton ya que el div esta por defecto
    $('#mostrar').hide()

    // mostrar
    $('#mostrar').click(function () {
        $(this).hide()
        $('#esconder').show()
        //$('#caja').show('slow') // agregando la velocidad slow, tambien tenemos fast,normal,etc
        caja.fadeIn('slow') // tambien le podemos añadir el fadeIn y el fadeOut

        // podemos usar tambien el metodo fadeTo, para jugar con la opacidad del elemento
    })

    // esconder
    $('#esconder').click(function () {
        $(this).hide()
        $('#mostrar').show()
        //$('#caja').hide('slow')
        caja.fadeOut('slow', function () { // Añadimos como segundo parametro una funcion de callback para mostar el console.log despues de que realmente se nos oculte el elemento.
            console.log('cartel ocultado')
        })
    })

    // Animaciones personalizadas
    $('#animar').click(function () {
        caja.animate({ marginLeft: '500px', fontSize: '25px' }, 'slow')
            .animate({ borderRadius: '900px', marginTop: '80px' }, 'fast')
            .animate({ borderRadius: '0px', marginLeft: '0px' }, 'slow')
            .animate({ borderRadius: '100px', marginTop: '0px' }, 'slow')
            .animate({ marginLeft: '500px', fontSize: '25px' }, 'slow')
    })
})
