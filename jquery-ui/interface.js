'use strict'
/**
 * 
 */

window.addEventListener('load', () => {
    $(document).ready(() => {
        console.log('hola')
    })

    let element = $('.element')
    // move elements through the page
    // draggable
    element.draggable()

    // resizable 
    element.resizable()

    // selectable
    //$('.sport_list').selectable()

    // sortable
    $('.sport_list').sortable({
        update: function (event, ui) {
            console.log('you already change me!')
        }
    })

    // droppable
    $('#box-one').draggable()

    $('#box-two').droppable({
        drop: function () {
            console.log('what you put on me?')
        }
    })

    // show
    $('#show').click(function () {
        $('.box_efects').toggle('fade', 'slow') // Mirar mas efectos en la documentacion

    })

    // Plugins y Widgets
    // Tooltips

    $(document).tooltip()

    // Cuadros de dialogos
    // Dialog
    $('#showme-popup').click(function () {
        $('#pop-up').dialog()
    })

    // Calendario
    $('#date_picker').datepicker()

    // Tabs
    $('#tabs_ui').tabs()


})

