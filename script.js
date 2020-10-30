
// $( document ).ready(function() {
//     $('.resume').addClass('hide__');
//     $('.skills').addClass('hide__');
//     $('.contact').addClass('hide__');
// });

$('.about__').click( () => {
    
    $('.home').addClass('hide__');
    $('.about').addClass('show__');
    $('.resume').removeClass('show__');
    $('.skills').removeClass('show__');
    $('.contact').removeClass('show__');

});

$('.resume__').click( () => {
    $('.home').addClass('hide__');
    $('.about').removeClass('show__');
    $('.resume').addClass('show__');
    $('.skills').removeClass('show__');
    $('.contact').removeClass('show__');
})

$('.skills__').click( () => {
    $('.home').addClass('hide__');
    $('.about').removeClass('show__');
    $('.resume').removeClass('show__');
    $('.skills').addClass('show__');
    $('.contact').removeClass('show__');
})

$('.contact__').click( () => {
    $('.home').addClass('hide__');
    $('.about').removeClass('show__');
    $('.resume').removeClass('show__');
    $('.skills').removeClass('show__');
    $('.contact').addClass('show__');
})