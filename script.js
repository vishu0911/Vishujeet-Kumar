function myMenuFunction() {
    let menuBth = document.getElementById("myNavMenu");
    

    if (menuBth.className === "nav-menu") {
        menuBth.className += "responsive";
    }else {
        menuBth.className = "nav-menu";
    }
}

/*------------------Mobile menu toggle function-------------------------*/
function myMenuFunction() {
    const menu = document.getElementById("myNavMenu");
    menu.classList.toggle("active");
    
    // Optional: Close menu when clicking outside
    if (menu.classList.contains("active")) {
        document.addEventListener('click', closeMenuOnClickOutside);
    } else {
        document.removeEventListener('click', closeMenuOnClickOutside);
    }
}

// Close menu when clicking outside
function closeMenuOnClickOutside(event) {
    const menu = document.getElementById("myNavMenu");
    const hamburger = document.querySelector(".nav-menu-btn i");
    
    if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
        menu.classList.remove("active");
        document.removeEventListener('click', closeMenuOnClickOutside);
    }
}

// Close menu when clicking a link (optional)
document.querySelectorAll('.nav_link').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById("myNavMenu").classList.remove("active");
    });
});

/*------------------Dark mode--------------*/

const body = document.querySelector("body"),
    toggleSwitch = document.getElementById("toggle-switch");

// ✅ Load theme from localStorage on page load
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
    body.classList.add("dark");
} else {
    body.classList.remove("dark"); // make sure it's clean
}

// ✅ Toggle dark/light mode and save in localStorage
toggleSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});


/*----------Typing effects---------*/

var typingEffect = new Typed(".typedText", {
    strings: ["Designer", "Coder", "Developer"],

    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000,

})

/*------------Scroll animation----------*/

const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true,
});

sr.reveal(".featured-name",{delay: 100 });
sr.reveal(".text-info", {delay: 200});
sr.reveal(".text-btn", {delay: 200});
sr.reveal(".socical_icon", {delay: 200});
sr.reveal(".featured-image", {delay: 320});


sr.reveal(".project-box",{interval: 200});

sr.reveal(".top-header", {});


const srLeft = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: "2000",
    reset: true,
})

srLeft.reveal(".about-info", {delay: 100})
srLeft.reveal(".contact-info", {delay: 100});

const srRigth = ScrollReveal({
    origin: "right",
    distance: "80px",
    duration: "2000",
    reset: false,
})

srRigth.reveal(".skill", {delay: 100});
srRigth.reveal(".skill-box", {delay: 100})


/*---------active link---------*/

const sections = document.querySelectorAll(".section[id]");

function scrollActive(){
    const scrollY = window.scrollY;

    sections.forEach((current) => {

        const sectionHeight = current.offsetHeight,

            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document
                .querySelector(".nav-menu a[href='#" + sectionId + "']")
                .classList.add("active-link");
        } else {
            document
                .querySelector(".nav-menu a[href='#" + sectionId + "']")
                .classList.remove("active-link");
        }
    });
}

/*---------nav menu--------*/
const navLinks = document.querySelectorAll(".nav_list");
const navCursor = document.querySelector("hover-indicator");

navLinks.forEach((link) => {
    link.addEventListener("mouseenter", () => {
        const linkRect = link.getBoundingClientRect();
        const navRect = link.parentElement.getBoundingClientRect();
        const offsetLeft = linkRect.left - navRect.left;

        navCursor.style.left = offsetLeft + "px";
        navCursor.style.width = linkRect.width + "px";
    });
});

/*---Custom cursor---*/
// Elements that should trigger cursor hover effect
const hoverElements = document.querySelectorAll('a, button, .hover-target');

hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.classList.add('hover');
    });
    el.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover');
    });
});



window.addEventListener("scroll", scrollActive);