window.onload = function() {
    var anchors = document.getElementsByClassName('present');
    for(var i = 0; i < anchors.length; i++) {
        var anchor = anchors[i];
        // anchor.onclick = function() {
            // alert('ho ho ho');
        // }
    }
}

$(document).ready(function() {
    $('.present').click(function() {
        $('#second').show();
        $('html,body').animate({
            scrollTop: $("#second").offset().top},
            'slow');
    });

    $('#up').click(function() {
        $('html,body').animate({
            scrollTop: $("body").offset().top},
            'slow');
    });


    $('#p1').click(function() {
        $('.minipage').hide();
        $('#up').hide();
        $('#up').show();
        $('#second').css('background-color', 'black');
        $('#one .description').css('color', '#fcf7ed');
        $("#second").get(0).style.setProperty("--accent-color", "#B53F21");
        $('#one').show();
    });

    $('#p3').click(function() {
        $('.minipage').hide();
        $('#up').hide();
        $('#up').show();
        $('#second').css('background-color', '#989e96');
        $('#two .description').css('color', '#fcf7ed');
        $("#second").get(0).style.setProperty("--accent-color", "#555");
        $('#two').show();
    });

    $('#p4').click(function() {
        $('.minipage').hide();
        $('.up').hide();
        $('.up').show();
        $('#second').css('background-color', '#e5defa');
        $('#three .description').css('color', 'black');
        $("#second").get(0).style.setProperty("--accent-color", "#584299");
        $('#three').show();
    });

    $('#p2').click(function() {
        $('.minipage').hide();
        $('#up').hide();
        $('#up').show();
        $('#second').css('background-color', 'white');
        $('#four .description').css('color', 'black');
        $("#second").get(0).style.setProperty("--accent-color", "#fcd46f");
        $('#four').show();
    });

    $('#p5').click(function() {
        $('.minipage').hide();
        $('#up').hide();
        $('#up').show();
        $('#second').css('background-color', '#316935');
        $('#five .description').css('color', 'white');
        $("#second").get(0).style.setProperty("--accent-color", "#9DDFEA");
        $('#five').show();
    });
});
