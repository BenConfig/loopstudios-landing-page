let isAnimating = false;

$('.nav__toggle').on('click', function() {
    // User cannot toggle navigation menu while animation is running
    if (isAnimating) return;

    isAnimating = true;

    // Toggle true/false for aria-expanded attribute
    $(this).attr('aria-expanded', (_, attr) => attr === 'false');

    // Toggle 'open-nav' class on body element
    $('body').toggleClass('open-nav');

    // After 700ms, user may toggle the navigation menu again
    setTimeout( () => isAnimating = false, 700);
});

// Prevents navigation menu animation triggering on window resize
let resizeTimer;
$(window).on('resize', function() {
    $('body').addClass('resize-animation-stopper');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
        $('body').removeClass('resize-animation-stopper');
      }, 400);
});


// Get current year and insert in .footer__copyright HTML element 
const currentYear = new Date().getFullYear();
$('.current-year').html(currentYear);