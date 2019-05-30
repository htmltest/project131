var html = document.documentElement;

if (sessionStorage.fontsLoaded) {
    html.classList.add('fonts-loaded');
} else {
    var script = document.createElement('script');
    script.src = 'js/fontfaceobserver.js';
    script.async = true;

    script.onload = function () {
        var font300 = new FontFaceObserver('Open Sans', {
            weight: '300'
        });
        var font400 = new FontFaceObserver('Open Sans', {
            weight: '400'
        });
        var font600 = new FontFaceObserver('Open Sans', {
            weight: '600'
        });
        var font700 = new FontFaceObserver('Open Sans', {
            weight: '700'
        });

        Promise.all([
            font300.load(),
            font400.load(),
            font600.load(),
            font700.load()
        ]).then(function () {
            html.classList.add('fonts-loaded');
            sessionStorage.fontsLoaded = true;
        });
    };
    document.head.appendChild(script);
}