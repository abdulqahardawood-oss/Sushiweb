import AOS from "aos";
import "aos/dist/aos.css";

// init AOS animation
AOS.init({
    duration: 1000,
    offset: 100,
    once: true,
    delay: 200,
    easing: "ease-in-out",
    startEvent: "load",
});

// the additional code you saw in the video will not be needed :)