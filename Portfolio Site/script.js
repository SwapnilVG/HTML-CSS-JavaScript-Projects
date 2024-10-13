let daynight = document.querySelector("#daynight")
let banner  = document.querySelector("#banner")

daynight.addEventListener("click",()=>{
    banner.classList.toggle("night");
})


let typingEffect = new Typed("#text" ,{
    strings: [
        'Full Stack Web Developer',
        'Frontend Developer',
        'Backend Developer',
        'CSE Engineer',
      ],
    loop: true,
    typeSpeed: 100,
    backDelay: 1000,
    backSpeed:50,
});