import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';

// document.getElementsByClassName('imgh').animate(
//     { transform: ['translateY(0)', 'translateY(100px)']},
//     { duration: 10000, // Totally arbitrary!
//       fill: 'both',
//       timeline: new ScrollTimeline({
//           scrollOffsets: [
//               new CSSUnitValue(0, 'px'),
//               new CSSUnitValue(200, 'px')
//           ]
//       })
//     });
const scrollTracker = document.querySelector(".scroll-tracker");

const animateimages = document.querySelectorAll('.image-rota');

// mutiple image or element animation one code

animateimages.forEach((image) => {
    const animateimageTimeline = new ScrollTimeline({
    scrollOffsets: [
    {target: image, edge: "end", threshold: "1" },
    { target: image, edge: "start", threshold: "2" },
    ],
    });


    image.animate(
        {
        transform: ["perspective(1000px) translateY(0)", "perspective(1000px) translateY(100%)"],
        },
        {
        duration: 1,
        timeline: animateimageTimeline,
        }
        );

});




// top blue line action on scroll

const scrollTrackingTimeline = new ScrollTimeline({
source: document.scrollingElement,
orientation: "block",
scrollOffsets: [CSS.percent(0), CSS.percent(100)],
// [CSS.px()]--> it's represent an pixel size of scroll tym
});

// single image animation 
// const animateimageTimeline = new ScrollTimeline({
//     scrollOffsets : [
//         {target: image, edge: "end", threshold: 1},
//         {target: image, edge: "start", threshold: 1},
//     ],

// }
// )
scrollTracker.animate(
{
transform: ["scalex(0)", "scalex(1)"],
},
{
duration: 1,
timeline: scrollTrackingTimeline,
}
);

//single image animation animate code 


// animateimage.animate(
//     {
//     transform: ["perspective(1000px) translateY(0))", "perspective(1000px) translateY(100%)"],
//     },
//     {
//     duration: 1,
//     timeline: animateimageTimeline,
//     }
//     );