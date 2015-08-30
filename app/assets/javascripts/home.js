$(document).ready(function(){

    var listItemDelay = 50;

    $('#bottom-left .title').removeClass('initial-pos').addClass('final-pos')


    $('#top-right li').each(function(){
        var that = $(this)
        setTimeout(function(){
            that.removeClass('initial-pos').addClass('final-pos')
            listItemDelay += 100
        }, listItemDelay, that)
    })

    $('#home-container').removeClass('initial-pos').addClass('final-pos')

    setTimeout(function(){
        $('#health').addClass('health-bar-animate')
    }, 1000)

})
