// gsap.to("#box" , {
//      x:1000,
//      duration: 1,
//      delay:1,
//      rotate:360,
//     //  scale:"50%",
//      borderRadius:"50%",
//      repeat:1,
//      yoyo:true

// })

// gsap.from("#box2" , {
//     x:1000,
//     duration:2,
//     delay:1
// })

// gsap.from("#box2" , {
//     x:500,
//     y:500,
//     duration: 2,
//     delay: 1
// })


// gsap.to("#box", {
//     x:1200,
//     duration:2,
//     delay:1,
//     rotate:360,
//     backgroundColor: "lightseagreen",
//     borderRadius: "50%",
//     scale:.5
// })

// gsap.from("h1",{
//     // color: "red",
//     opacity:0,
//     duration: 1,
//     y:30,
//     delay:1,
//     stagger: .4
// })

// multiple box animations--------------------------- 

// gsap.to("#box",{
//     x:1300,
//     rotate:360,
//     duration:1.5,
//     delay:1
// })

// gsap.to("#box2",{
//     x:1300,
//     backgroundColor: "yellow",
//     borderRadius: "50%",
//     rotate:360,
//     duration:1.5,
//     delay:2.5
// })
// gsap.to("#box3",{
//     x:1300,
//     scale:.5,
//     backgroundColor: "blue",
//     duration:1.5,
//     delay:4
// })


// All about timeline-----------------------------------

// var tl = gsap.timeline()

// tl.to("#box", {
//     x:1300,
//     scale:.5,
//     backgroundColor: "blue",
//     rotate: 360,
//     delay:1
// })
// tl.to("#box2", {
//     x:1300,
//     scale:.5,
//     backgroundColor: "blue",
//     rotate: 360,
//     delay:1
// })
// tl.to("#box3", {
//     x:1300,
//     scale:.5,
//     backgroundColor: "blue",
//     rotate: 360,
//     delay:1
// })

// nav bar work----------------------------------------


var tl = gsap.timeline()

tl.from("h2",{
    y: -20,
    opacity: 0,
    duration: 1,
    delay: 0.5
})
tl.from("h4",{
    y: -20,
    opacity: 0,
    duration: 1,
    // delay: 0.5,
    stagger:.3
})

tl.from("h1",{
    y:20,
    opacity:0,
    duration:.5,
    scale:.2
})