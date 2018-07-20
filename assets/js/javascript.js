// ScrollReveal
window.sr = ScrollReveal({reset: true});
sr.reveal('#ilustracao');

// Vegas
$(".ilustracao").vegas({
    timer: false,
    // shuffle: true,
    transition: 'fade',
    cover: false,
    backgroundImage: 'assets/images/615b0860876841.5a5ca4669061a.jpg',
    slides: [
        { src: 'assets/images/615b0860876841.5a5ca4669061a.jpg', color: '#33d8e8' },
        { src: 'assets/images/bbb06160876735.5a5ca3b85b443.jpg', color: '#ea65a3' },
        { src: 'assets/images/b2410760876735.5a5ca3b85b827.jpg', color: '#ea8826' },
    ]
});

// Smooth Scroll
// Select all links with hashes
$('a[href*="#"]')
// Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function() {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });