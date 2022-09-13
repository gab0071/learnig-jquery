'use strict'
/**
 *
 */

window.addEventListener('load', () => {
    // trying the jquery integration its working perfetly!
    $(document).ready(function () {
        console.log('Jquery is ready baby!')
    })

    // load method in jquery
    let box = $('#data')
    //box.load('https://reqres.in/')

    // GET method in jquery
    $.get('https://reqres.in/api/users', { page: 2 }, function (response) {
        console.log(response)
        response.data.forEach((element, index) => {
            box.append(`<p> ${element.first_name} ${element.last_name} </p>`)
        });
    })



    let register = $('#register_form')

    register.submit((event) => { // e => event parameter
        event.preventDefault()  // this is to prevent the page from redirecting
        event.stopPropagation()
        let user = {
            'name': $('input[name="name"]').val(),
            'web': $('input[name="web"]').val()
        }
        // POST method in jquery
        // $.post($(this).attr('action'), user, function (response) {
        //     console.log(response)
        // }).done(() =>{
        //     alert('the user added successfully')
        // })

        $.ajax({
            type: "POST",
            url: $(this).attr('action'),
            data: "user",
            beforeSend: function () {
                console.log('sending user...')
            },
            success: function (response) {
                console.log(response)
            },
            error: function () {
                console.log('ups try again...')
            },
            timeout: 2000

        });
        return false

    })

})