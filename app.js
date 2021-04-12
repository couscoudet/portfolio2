const lis = document.querySelectorAll("nav li");
const links = [...document.querySelectorAll("nav a")];
const light = document.querySelector("nav .tubelight");
let activeIndex = 0;
let cursorIndex = 0;
let increment = 1;


links.forEach((link, index) => {
    if (links[index].classList.contains("active")) {
        light.style.left = `${links[index].offsetLeft + light.offsetWidth / 4}px`;
        
    }

        link.addEventListener("click", (e) => {
            activeIndex = index;
            let t = setInterval(() => {
                if (activeIndex > cursorIndex) {increment = 1;}
                else if (activeIndex < cursorIndex) {increment = -1;}
                cursorIndex += increment;
                links[cursorIndex].classList.add("active");
                if (cursorIndex != -1) {links[cursorIndex - increment].classList.remove("active")};
                    if (cursorIndex == activeIndex) {
                        e.target.classList.add("active");
                        increment = 0;
                        clearInterval(t);
                    }
            }, 50);
            light.style.left = `${e.target.offsetLeft + light.offsetWidth / 4}px`;
        });
});


//Animation TypeWriter//
const txtAnim = document.querySelector("h2");
const phrase1 = "RESPONSIVE"
const phrase1clear = "Chef de projet digital"
const phrase2 = "HTML/CSS"
const phrase3 = "FLEXBOX, GRID"
const phrase4 = "MEDIA-QUERIES"
const phrase5 = "WEB-DESIGN"


new Typewriter(txtAnim, {
    loop: true,
    deleteSpeed: 40
})
.changeDelay(40)
.typeString(phrase1)
.pauseFor(500)
.deleteChars(phrase1.length)
.pauseFor(1000)
.typeString(phrase2)
.pauseFor(1000)
.deleteChars(phrase2.length)
.pauseFor(1000)
.typeString(phrase3)
.pauseFor(1000)
.deleteChars(phrase3.length)
.pauseFor(1000)
.typeString(phrase4)
.pauseFor(1000)
.deleteChars(phrase4.length)
.pauseFor(1000)
.typeString(phrase5)
.pauseFor(1000)
.deleteChars(phrase5.length)
.pauseFor(1000)
.start()