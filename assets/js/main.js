// aos enable
document.addEventListener('DOMContentLoaded', () => {
    AOS.init();
});

const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')


if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

const navLink = document.querySelectorAll('.nav__link')
const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        } else {
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') :
        scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

const scrollHeader = () => {
    const header = document.getElementById('header')
    this.scrollY >= 0 ? header.classList.add('bg-header') :
        header.classList.remove('bg-header')
}
window.addEventListener('resize', scrollHeader)
scrollHeader();

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})
sr.reveal(`home__data .projects__container`)
sr.reveal(`home__info div`, {
    delay: 600,
    origin: 'bottom',
    interval: 100
})

window.addEventListener("resize", () => {
    const body = document.querySelector("body");
    body.style.overflowX = "hidden";
});

// our added js 

// navbar section js 

// const header = document.getElementById('header');

// window.addEventListener('scroll', function() {
//     if (window.innerWidth > 1024) {
//         if (window.scrollY > 50) {
//             header.classList.add('scrolled');
//         } else {
//             header.classList.remove('scrolled');
//         }
//     }
// });

// vape animation 
window.addEventListener('scroll', function () {
    const container = document.getElementById('container');
    const buttonMenu = document.getElementById('buttonmenu');
    const innerWidth = window.innerWidth;
    const scrollY = window.scrollY;

    const ranges = [
        { minWidth: 1441, scrollRange: [3800, 10900] },
        { minWidth: 1025, maxWidth: 1440, scrollRange: [3600, 12900] },
        { minWidth: 769, maxWidth: 1024, scrollRange: [3700, 13100] },
        { minWidth: 577, maxWidth: 768, scrollRange: [4000, 13000] },
        { minWidth: 401, maxWidth: 576, scrollRange: [4100, 13200] },
        { maxWidth: 400, scrollRange: [4300, 13400] },
    ];

    const matchedRange = ranges.find(({ minWidth = 0, maxWidth = Infinity }) =>
        innerWidth >= minWidth && innerWidth <= maxWidth
    );

    if (matchedRange) {
        const [start, end] = matchedRange.scrollRange;

        if (scrollY > start && scrollY <= end) {
            container.style.visibility = 'visible';
            container.style.opacity = '1';
            buttonMenu.style.display = 'block';
        } else {
            container.style.visibility = 'hidden';
            container.style.opacity = '0';
            buttonMenu.style.display = 'none';
        }
    }
});



// blob
// var cursor = document.querySelector('.blob');

// document.addEventListener('mousemove', function (e) {
//     var x = e.clientX;
//     var y = e.clientY;
//     cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
// });

// counter header
let count = 0;
let count2 = 0;
let count3 = 0;

const counterElement = document.getElementById("counter");
const counterElement2 = document.getElementById("counter2");
const counterElement3 = document.getElementById("counter3");

function updateCounter() {
    if (count <= 100) {
        counterElement.textContent = `${count}+`;
        count++;
    } else {
        clearInterval(intervalId1);
    }
}

function updateCounter2() {
    if (count2 <= 95) {
        counterElement2.textContent = `${count2}+`;
        count2++;
    } else {
        clearInterval(intervalId2);
    }
}

function updateCounter3() {
    if (count3 <= 90) {
        counterElement3.textContent = `${count3}+`;
        count3++;
    } else {
        clearInterval(intervalId3);
    }
}

const intervalId1 = setInterval(updateCounter, 10);
const intervalId2 = setInterval(updateCounter2, 15);
const intervalId3 = setInterval(updateCounter3, 20);


// video play
const video = document.getElementById('GuideMainVideo');
const playButton = document.getElementById('customPlayButton');

video.play().catch(error => {
    console.log('Autoplay failed:', error);
});

playButton.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playButton.innerHTML =
            `<ion-icon style="font-size: 40px; color: #fff;" name="pause-circle-outline"></ion-icon>`;
    } else {
        video.pause();
        playButton.innerHTML =
            `<ion-icon style="font-size: 40px; color: #fff;" name="play-circle-outline"></ion-icon>`;
    }
});

video.removeAttribute('controls');

document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        if (video.paused) {
            video.play();
            playButton.innerHTML =
                `<ion-icon style="font-size: 40px; color: #fff;" name="pause-circle-outline"></ion-icon>`;
        } else {
            video.pause();
            playButton.innerHTML =
                `<ion-icon style="font-size: 40px; color: #fff;" name="play-circle-outline"></ion-icon>`;
        }
        event.preventDefault(); 
    }
});


// other sections 
setTimeout(function () {

    const closeButtons = document.querySelectorAll(".faqsMainContentDivClose");

    closeButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const content = button.nextElementSibling;
            const icon = button.querySelector(".toggle-icon");


            if (content.classList.contains("active")) {
                content.classList.remove("active");
                content.style.maxHeight = null;
                icon.setAttribute("name", "remove-outline");
            } else {
                document.querySelectorAll(".faqsMainContentDivOpen.active").forEach((
                    openContent) => {
                    openContent.classList.remove("active");
                    openContent.style.maxHeight = null;
                    const openIcon = openContent.previousElementSibling
                        .querySelector(
                            ".toggle-icon");
                    openIcon.setAttribute("name", "remove-outline");
                });

                content.classList.add("active");
                content.style.maxHeight = content.scrollHeight + "px";
                icon.setAttribute("name", "add-outline");
            }
        });
    });

    document.querySelectorAll('.OurProductsHeadingButton').forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');

            document.querySelectorAll('.OurProductsHeadingButton').forEach(btn => {
                btn.classList.remove('ProductsHeadingButtonActive');
            });

            button.classList.add('ProductsHeadingButtonActive');

            document.querySelectorAll('.OurProductsCard').forEach(card => {
                const category = card.getAttribute('data-category');

                if (filter === 'all' || category === filter) {
                    card.style.display = "flex";
                    card.style.visibility = 'visible';
                    card.style.opacity = 1;
                } else {
                    card.style.display = "none";
                    card.style.visibility = 'hidden';
                    card.style.opacity = 0;
                }
            });
        });
    });

}, 3000);   