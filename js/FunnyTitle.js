var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        $('[rel="icon"]').attr('href', );
        document.title = '回望灯如旧';
        clearTimeout(titleTime);
    }
    else {
        $('[rel="icon"]').attr('href', );
        document.title = '侯君久矣' ;
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});
