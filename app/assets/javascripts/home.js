$(document).ready(function () {
    setInterval(function () {
        document.getElementById('video').currentTime = 3
    }, 3000)

    $('body').removeClass('no-cursor')
    $('#reloader').css('transform', 'translate(0,0)').css('opacity', '0.7')
    $('#gif').addClass('opaque')
    $('#scene').parallax()
    $('#fadecover').addClass('off')
    $('#huge-logo').removeClass('initial-pos')
    logoGame()
    setTimeout(function () {
        $('#containment, #social').removeClass('initial-pos')

        $('.fa:eq(0)').addClass('glow').removeClass('initial-pos')

        setTimeout(function () {

            setTimeout(function () {
                $('.fa:eq(0)').removeClass('glow')
            }, 100)
            $('.fa:eq(1)').addClass('glow').removeClass('initial-pos')

            setTimeout(function () {
                setTimeout(function () {
                    $('.fa:eq(1)').removeClass('glow')
                }, 200)
                $('.fa:eq(2)').addClass('glow').removeClass('initial-pos')

                setTimeout(function () {
                    setTimeout(function () {
                        $('.fa:eq(2)').removeClass('glow')
                    }, 200)
                    $('.fa:eq(3)').addClass('glow').removeClass('initial-pos')

                    setTimeout(function () {
                        setTimeout(function () {
                            $('.fa:eq(3)').removeClass('glow')
                        }, 100)
                        $('.fa:eq(4)').addClass('glow').removeClass('initial-pos')

                        setTimeout(function () {
                            $('.fa:eq(4)').removeClass('glow')
                        }, 250)

                    }, 100)
                }, 100)
            }, 100)
        }, 100)

    }, 2500)

    setTimeout(function () {
        $('#reloader').removeClass('no-point')
    }, 3400)


    $('#reloader').on('click', function () {
        $('body').addClass('no-cursor')
        $(this).css('transform', 'translate(0,25px)').css('opacity', '0.5').addClass('no-point')
        $('#gif').css('z-index', '1')
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
