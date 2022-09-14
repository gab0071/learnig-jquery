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
    element.draggable()

    // resizable 
    element.resizable()

    // selectable
    //$('.sport_list').selectable()

    // sortable
    $('.sport_list').sortable({
        update: function(event, ui) {
           console.log('you already change me!')
        }
    })

    // droppable
    $('#box-one').draggable()

    $('#box-two').droppable({
        drop: function(){
            console.log('what you put on me?')
        }
    })

})

