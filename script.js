let mm = gsap.matchMedia();

mm.add("(min-width : 500px)", () => {
    tl = gsap.timeline();

    tl.to(".main .page1 .circle", {
        duration: 2,
        ease: "bounce.out",
        top: "35%",

        onComplete: () => {
            tl.to(".main .page1", {
                ease: "power2.inOut",
                backgroundColor: "#510003",
            });

            tl.to(".main .page1 .circle", {
                left: '5%',
                top: '35%',
                transform: "translate(0,0)",
                border: "1px solid white",
                borderRadius: "20%"
            }, "a")

            tl.to(".main .page1 .nav", {
                duration: 2,
                opacity: 1
            }, "a")

            tl.to(".main .page1 .desc", {
                duration: 3,
                opacity: 1
            }, "a")

            tl.to(".main .page1 .person", {
                duration: 3,
                opacity: 1,
                scale: 1.1,
            }, "a")

        },
    });

    tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".main .page2",
            start: "20% 50%",
        }
    });

    tl2.from(".main .page2 .mid .left , .main .page2 .mid .right p", {
        y: 50,
        opacity: 0,
        duration: 1,
    })

    tl2.from(".main .page2 .bottom button", {
        opacity: 0,
        y: 40,
        stagger: 0.4,
        scale: 2,
        backgroundColor: "#D97200",
    })
})

mm.add("(max-width : 499px)", ()=> {

    tl = gsap.timeline();

    tl.to(".main .page1 .circle", {
        duration: 2,
        ease: "bounce.out",
        top: "20%",

        onComplete: () => {
            tl.to(".main .page1", {
                ease: "power2.inOut",
                backgroundColor: "#510003",
            });

            tl.to(".main .page1 .circle", {
                left: '17%',
                top: '12%',
                transform: "translate(0,0)",
                border: "1px solid white",
                borderRadius: "20%"
            }, "a")

            tl.to(".main .page1 .nav", {
                duration: 2,
                opacity: 1
            }, "a")

            tl.to(".main .page1 .desc", {
                duration: 3,
                opacity: 1
            }, "a")

            tl.to(".main .page1 .person", {
                duration: 3,
                opacity: 1,
                scale: 1.1,
            }, "a")

        },
    });

    tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".main .page2",
            start: "-20% 90%",
            markers : true,
        }
    });

    tl2.from(".main .page2 .bottom button", {
        // opacity: 0,
        y: 40,
        stagger: 0.4,
        backgroundColor: "#D97200",
        color : "white"
        
    })
})


const sliderContainer = document.querySelector('.slider-container');

sliderContainer.addEventListener('mouseover', () => {
    sliderContainer.style.animationPlayState = 'paused';
});
sliderContainer.addEventListener('mouseleave', () => {
    sliderContainer.style.animationPlayState = 'running';
});

