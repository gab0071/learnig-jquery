'use strict'
/**
 *
 */

window.addEventListener('load', () => {
    $(document).ready(function () {
        console.log('ready to work with events')
    })

    // MouseOver and MouseOut
    let caja = $('#box')
    // caja.mouseover(function () {
    //     $(this).css('background', '#afc0fa')
    // })
    // caja.mouseout(function () {
    //     $(this).css('background', '#ebf562')
    // })

    // hover
    // es una manera mas sencilla de escribir lo de arriba
    function cambiaA() {
        $(this).css('background', '#afc0fa')
    }

    function cambiaB() {
        $(this).css('background', '#ebf562')
    }

    caja.hover(cambiaA, cambiaB)

    // click & doble click
    // click
    caja.click(function () {
        $(this)
            .css('border', '4px solid yellow')
            .css('cursor', 'pointer')
            .css('color', 'brown')
    })
    // doble click
    caja.dblclick(function () {
        $(this)
            .css('border', '4px solid pink')
            .css('cursor', 'pointer')
            .css('color', 'white')
    })

    // focus and blur
    let nombre = $('#name')
    let datos = $('#datos')
    nombre.focus(function () {
        $(this).css('border-color', '2px solid #ccc')
    })

    // blur
    nombre.blur(function () {
        $(this).css('border', '2px solid pink')

        datos
            .text($(this).val())
            .show()
            .css('font-size', '25px')
            .css('color', 'white')
    })

    // mousedown and mouseup
    datos.mousedown(function () {
        $(this).css('border-color', 'yellow')
    })
    datos.mouseup(function () {
        $(this).css('border-color', 'green')
    })

    // mousemove
    $(document).mousemove(function () {
        $('body').css('cursor', 'none')
        console.log('en X:' + event.clientX) // horizontal / ancho
        console.log('en Y:' + event.clientY) // vertical / altura

        $('#sigueme').css('left', event.clientX).css('top', event.clientY)
    })
})
