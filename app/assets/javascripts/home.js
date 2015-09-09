$(document).ready(function () {
    $('#reloader').css('transform', 'translate(0,0)').css('opacity', '0.7')
    $('#gif').addClass('opaque')
    $('#scene').parallax()
    $('#fadecover').addClass('off')
    $('#huge-logo').removeClass('initial-pos')
    logoGame()
    setTimeout(function () {
        $('#containment, #social').removeClass('initial-pos')
    }, 2500)

    setTimeout(function () {
        $('#reloader').removeClass('no-point')
    }, 3400)


    $('#reloader').on('click', function () {
        $(this).css('transform', 'translate(0,25px)').css('opacity', '0.5').addClass('no-point')
        $('#gif').css('z-index','1')
        $('#fadecover').removeClass('off')
        setTimeout(function () {
                $('#containment, #social').addClass('initial-pos')

            }, 2500)
        setTimeout(function () {
            window.location = '/'

        }, 3400)
    })
})

function logoGame() {
    $('#huge-logo').on('click', function () {
        $(this).css('opacity', '+=' + .2)
        setTimeout(function () {
            $('#huge-logo').css('opacity', '0')
        }, 1800)
    })
}
