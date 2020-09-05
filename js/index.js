$('.tooltip').on('mouseover, touchstart', function () {
    var mouse = event.pageX;
    $(this).append("<style>.tooltip::after { left: " + mouse + "px; }</style>");
});

$('.tooltip').on('mouseout touchend', function () {
    $('.tooltip style').remove();
});


$('button, #img-barn').on('click', function () {
    let next = $(this).next().attr('id')

    sound = document.getElementById(next);

    sound.play();
});

Mousetrap.bind('a', function () { document.getElementById('a').play(); });
Mousetrap.bind('w', function () { document.getElementById('w').play(); });
Mousetrap.bind('y', function () { document.getElementById('y').play(); });
Mousetrap.bind('v', function () { document.getElementById('v').play(); });
Mousetrap.bind('f', function () { document.getElementById('f').play(); });
Mousetrap.bind('k', function () { document.getElementById('k').play(); });