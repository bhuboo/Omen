import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';

// const animateimage = document.querySelector('.imgh');
const animateimages = document.querySelectorAll('.imghscroll');

const animateimageA = document.querySelector(".imghscrollA");
// mutiple image or element animation one code

animateimages.forEach((image) => {
    const animateimageTimeline = new ScrollTimeline({
    scrollOffsets: [
    {target: image, edge: "start", threshold: "1" },
    { target: image, edge: "end", threshold: "0" },
    ],
    });


    image.animate(
        {
        transform: ["perspective(1000px) translateY(-10%)", "perspective(1000px) translateY(40rem)"],
        },
        {
        duration: 1,
        timeline: animateimageTimeline,
        }
        );

});


// animate footer top image

