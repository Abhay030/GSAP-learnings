// gsap.from("#page1 #box",{
//     scale:0,
//     delay:1,
//     duration:2,
//     rotate:360
// })
// gsap.from("#page2 #box",{
//     scale:0,
//     // delay:1,
//     duration:2,
//     rotate:360,
//     scrollTrigger:{
//         trigger: "#page2 #box2",
//         scroller: "body",
//         markers:true,
//         start:"top 60%"
//     }
// })

// gsap.from("#page2 h1" , {
//     opacity: 0,
//     duration:1,
//     x:500,
//     scrollTrigger : {
//         trigger:"#page2 h1",
//         scroller:"body",
//         markers:true,
//         start: "top 50% "
//     }
// })

gsap.to("#page2 h1" , {
   transform: "translateX(-150%)",
   scrollTrigger: {
    trigger:"#page2",
    markers: true,
    start: "top 0%",
    end: "top -150%",
    scrub: 3,
    pin:true
   }
})



