(function () {

    var doc = document.documentElement;
    var w = window;

    var prevScroll = w.scrollY || doc.scrollTop;
    var curScroll;
    var direction = 0;
    var prevDirection = 0;

    var header = document.getElementById('site-header');

    var checkScroll = function () {

        /*
        ** Find the direction of scroll
        ** 0 - initial, 1 - up, 2 - down
        */

        curScroll = w.scrollY || doc.scrollTop;
        if (curScroll > prevScroll) {
            //scrolled up
            direction = 2;
        }
        else if (curScroll < prevScroll) {
            //scrolled down
            direction = 1;
        }

        if (direction !== prevDirection) {
            toggleHeader(direction, curScroll);
        }

        prevScroll = curScroll;
    };

    var toggleHeader = function (direction, curScroll) {
        if (direction === 2 && curScroll > 70) {

            header.classList.add('hide');
            prevDirection = direction;
        }
        else if (direction === 1) {
            header.classList.remove('hide');
            prevDirection = direction;
        }
    };

    window.addEventListener('scroll', checkScroll);

})();

let theme = localStorage.getItem('theme')

if (theme === null) {

    setTheme('light')

} else {

    setTheme(theme)

}

// Theme colors
let themeDots = document.getElementsByClassName('theme-dot');

for (let i = 0; themeDots.length > i; i++) {
    themeDots[i].addEventListener('click', function () {
        let mode = this.dataset.mode;
        setTheme(mode)
    })
}
function setTheme(mode) {
    if (mode === 'light') {
        document.getElementById('theme-style').href = 'style.css'
    } else if (mode === 'blue') {
        document.getElementById('theme-style').href = 'blue.css'
    }
    else if (mode === 'green') {
        document.getElementById('theme-style').href = 'green.css'

    } else {
        document.getElementById('theme-style').href = 'purple.css'
    }

    localStorage.setItem('theme', mode)

}