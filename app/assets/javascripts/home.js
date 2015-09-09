$(document).ready(function () {
    $('#scene').parallax()
    $('#fadecover').addClass('off')
    $('#huge-logo').removeClass('initial-pos')
    logoGame()
    setTimeout(function () {$('#containment, #social').removeClass('initial-pos')}, 500)

    $('#video').play()
})

function logoGame() {
    $('#huge-logo').on('click', function () {
        $(this).css('opacity', '+=' + .2)
        setTimeout(function () {$('#huge-logo').css('opacity', '0')}, 1800)
    })
}
