$(function () {
    $('.carousel').carousel({
        interval:2000
    })

    $('[data-toggle="tooltip"]').tooltip()
    $('[data-toggle="popover"]').popover()
    $('.mipopover').popover({
        container: 'body'
    })

    $('#miModal').on('show.bs.modal', function(e){

        console.log('el modal se esta mostrando')

        $('#miBtnReserva').removeClass('btn-primary')
        $('#miBtnReserva').addClass('btn-outline-light')
        $('#miBtnReserva').prop('disabled', true)
    })

    $('#miModal').on('hidden.bs.modal', function(e){

        console.log('el modal se oculto')

        $('#miBtnReserva').prop('disabled', false)
        $('#miBtnReserva').removeClass('btn-outline-light')
        $('#miBtnReserva').addClass('btn-primary')
        
    })
})