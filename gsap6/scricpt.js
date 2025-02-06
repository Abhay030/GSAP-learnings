function breakTheText(){
    var h1 = document.querySelector("h1")
    var h1Text = h1.textContent
    var splittedtext =  h1Text.split("")
    var clutter = ""
    var halfval = Math.floor(splittedtext.length/2)

    splittedtext.forEach(function(e , i){
        if(i < halfval){
            clutter = clutter + `<span class = "a">${e}</span>`
        }
        else{
            clutter = clutter + `<span class = "b">${e}</span>`
        }
    })
    h1.innerHTML = clutter 
}
breakTheText()

gsap.from("h1 .a", {
    y:60,
    opacity: 0,
    duration : 0.6,
    delay : 0.5,
    stagger : 0.15
})
gsap.from("h1 .b", {
    y:60,
    opacity: 0,
    duration : 0.6,
    delay : 0.5,
    stagger : -0.15
})