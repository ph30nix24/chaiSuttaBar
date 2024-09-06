Shery.mouseFollower();
gsap.from(".nav-links li", {
    y: -50,
    opacity: 0,
    duration: 1,
    stagger: 0.2
})
const typed = new Typed(".floating_text_1", {
    strings:["Tycoon ^150", "Merchant"],
    typeSpeed: 150,
    backSpeed: 50,
    loop: true,
    showCursor: false,
    smartBackspace: true,
})
const typed_2 = new Typed(".floating_text_2", {
    strings:["Stories"],
    typeSpeed: 150,
    backSpeed: 50,
    loop: true,
    showCursor: false,
    smartBackspace: true,
})


const navLinks = document.querySelector(".nav-links");
document.querySelector(".nav").addEventListener("click", () => {
    navigationLinks();
});
document.querySelector(".nav2").addEventListener("click", () => {
    navigationLinks();
});
is_clicked = false;
const navigationLinks = () => {
    if (!is_clicked){
        navLinks.style.display = "block";
        document.querySelector(".nav").style.display = "none";
        document.querySelector(".navbar").style.boxShadow = "none";
        document.querySelector(".nav2").style.display = "block";
        navLinks.classList.add("links_nav");
        gsap.from(".nav-links li", {
            x: -50,
            opacity: 0,
            duration: 1,
            stagger: 0.2
        })
        is_clicked = true;
    } else {
        navLinks.style.display = "none";
        document.querySelector(".navbar").style.boxShadow = `rgba(0, 0, 0, 0.2) ${1}px ${2}px ${4}px`;
        document.querySelector(".nav").style.display = "block";
        document.querySelector(".nav2").style.display = "none";
        navLinks.classList.remove("links_nav");
        is_clicked = false;
    }

}

console.log(document.body.clientWidth);
if(document.body.clientWidth < 480) {
    document.querySelector(".hero video").src="https://www.chaisuttabarindia.com/wp-content/uploads/2023/07/500-Outlets-and-300-Cities-1080p-i-1.mp4#t=0.01";
    document.querySelector(".hero h2").style.display = "block";
}
else {
    document.querySelector(".hero video").src="https://www.chaisuttabarindia.com/wp-content/uploads/2023/11/550-Outlets-and-320-Cities-1920p.mp4#t=0.01";
    document.querySelector(".hero h2").style.display = "none";
}
if(document.body.clientWidth < 480) {
    const cards = document.querySelectorAll(".cards");
    var counter_right = false;
    const slideImage = () => {
        if (!counter_right) {
            cards.forEach(
                (card, index) => {
                    card.style.transition = "transform 0.5s ease";
                    card.style.transform = `translateX(${-35}vw)`;
                }
            )
            counter_right = true;
        }
        else {
            cards.forEach(
                (card, index) => {
                    card.style.transition = "transform 0.5s ease";
                    card.style.transform = `translateX(${0}px)`;
                }
            )
            counter_right = false;
        }
    }
    setInterval(slideImage, 5000); // Change slide every 5 seconds
} else {
    const cards = document.querySelectorAll(".cards");
    var counter_right = false;
    const slideImage = () => {
        if (!counter_right) {
            cards.forEach(
                (card, index) => {
                    card.style.transition = "transform 0.5s ease";
                    card.style.transform = `translateX(-400px)`;
                }
            )
            counter_right = true;
        }
        else {
            cards.forEach(
                (card, index) => {
                    card.style.transition = "transform 0.5s ease";
                    card.style.transform = `translateX(${0}px)`;
                }
            )
            counter_right = false;
        }
    }
    setInterval(slideImage, 5000); // Change slide every 5 seconds
}

if(document.body.clientWidth < 480) {
    const slides = document.querySelectorAll(".slides");
    var nav = 0;
    const prev = document.querySelector(".prev").addEventListener("click", () => {
        nav++;
        current();
        slideImage2();  
    });
    const next = document.querySelector(".next").addEventListener("click", () => {
        nav--;
        current();
        slideImage2();
    });
    slideImage2 = () => {
        if ( nav >= -2  && nav <= 2){
            slides.forEach(
            (slide, index) => {
                    slide.style.transition = "transform 0.5s ease";
                    slide.style.transform = `translateX(${nav * 95}vw)`;
                }
            )
        }
    }
    const current = () => {
        console.log(nav);
        if (nav === 0) {
            document.querySelector(".current-icon").classList.add("current");
            document.querySelector(".prev-icon").classList.remove("current");
            document.querySelector(".next-icon").classList.remove("current");
        }
        else if (nav === -1) {
            document.querySelector(".current-icon").classList.remove("current");
            document.querySelector(".next-icon2").classList.remove("current");
            document.querySelector(".next-icon").classList.add("current");
        }
        else if (nav === -2) {
            document.querySelector(".current-icon").classList.remove("current");
            document.querySelector(".next-icon").classList.remove("current");
            document.querySelector(".next-icon2").classList.add("current");
        }
        else if (nav === 1) {
            document.querySelector(".current-icon").classList.remove("current");
            document.querySelector(".prev-icon").classList.add("current");
            document.querySelector(".prev-icon2").classList.remove("current");
        }
        else {
            document.querySelector(".current-icon").classList.remove("current");
            document.querySelector(".prev-icon2").classList.add("current");
            document.querySelector(".prev-icon").classList.remove("current");
        }
    }
}
else {
    const slides = document.querySelectorAll(".slides");
    var nav = 0;
    const prev = document.querySelector(".prev").addEventListener("click", () => {
        nav++;
        current();
        slideImage2();  
    });
    const next = document.querySelector(".next").addEventListener("click", () => {
        nav--;
        current();
        slideImage2();
    });
    slideImage2 = () => {
        if ( nav > -2 && nav < 2){
            slides.forEach(
            (slide, index) => {
                    slide.style.transition = "transform 0.5s ease";
                    slide.style.transform = `translateX(${nav * 380}px)`;
                }
            )
        }
    }
    const current = () => {
        console.log(nav);
        if (nav === 0) {
            document.querySelector(".current-icon").classList.add("current");
            document.querySelector(".prev-icon").classList.remove("current");
            document.querySelector(".next-icon").classList.remove("current");
        }
        else if (nav === -1) {
            document.querySelector(".current-icon").classList.remove("current");
            document.querySelector(".prev-icon").classList.remove("current");
            document.querySelector(".next-icon").classList.add("current");
        }
        else {
            document.querySelector(".current-icon").classList.remove("current");
            document.querySelector(".prev-icon").classList.add("current");
            document.querySelector(".next-icon").classList.remove("current");
        }
    }
}

