var main = document.querySelector("#main")
var cursor = document.querySelector("#cursor")
var imageDiv = document.querySelector("#image")

main.addEventListener("mousemove" , function(axis){
    // console.log(axis.x)
    gsap.to(cursor , {
        x:axis.x,
        y:axis.y,
        duration: .6,
        ease: "back.out" 
    })

})

main.addEventListener("mouseleave" , function(){
    gsap.to(cursor ,{
        opacity: 0
    })
})
main.addEventListener("mouseenter" , function(){
    gsap.to(cursor ,{
        opacity:1
    })
})


imageDiv.addEventListener("mouseenter" , function(){
    cursor.innerHTML = " View More"
    gsap.to(cursor , {
        scale: 4
    })
})
imageDiv.addEventListener("mouseleave" , function(){
    cursor.innerHTML = ""
    gsap.to(cursor , {
        scale: 1
    })
})

