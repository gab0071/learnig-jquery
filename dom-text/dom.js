'use strict'
/**
 *
 */

window.addEventListener('load', () => {
    // probando que la integracion de jquery quedo perfecta!
    $(document).ready(function () {
        console.log('Jquery is ready baby!')
    })

    reloadLinks()

    $('#add_btn').click(function () {
        $('#menu').append('<li><a href=' + $('#add_text').val() + '></a></li>')
        // para una vez que ingresemos lo que queramos nos quede vacio el input
        $('#add_text').val('')
        reloadLinks()
    })

    function reloadLinks() {
        $('a').each(function (index) {
            let that = $(this)
            let enlaces = that.attr('href')
            that.attr('target', '_blank')
            // con esta linea de codigo nos aperece directamente los enlances en pantalla ⬇️
            that.text(enlaces)
        })
    }
})
