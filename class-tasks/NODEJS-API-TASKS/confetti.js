document.addEventListener("DOMContentLoaded", function () {
    lottie.loadAnimation({
        container: document.getElementById('animationContainer'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'https://assets9.lottiefiles.com/packages/lf20_u4yrau.json' // Change this URL for another animation
    });
});