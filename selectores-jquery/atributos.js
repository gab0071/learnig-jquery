'use strict'
/**
 * Selectores de atributos ==> Nos permiten agarrar elementos del html que tengan ciertos atributos puestos
 * 
 * $('["ATRIBUTO"="NOMBRE_ATRIBUTO"]')
 */

// selectores de atributos

window.addEventListener('load', () => {
    $('[title="twitter"]').css('color', 'pink')
    $('[title="instagram"]').css('color', 'pink')

    // para llamar a varios elementos a la vez
    $('p, a').addClass('margen-superior')
})
