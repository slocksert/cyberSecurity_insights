const btn = document.getElementById("btn-top")

btn.addEventListener('click', function(){
    window.scrollTo(0,0)
})

document.addEventListener('scroll', hideBtn)

function hideBtn(){
    if (window.scrollY > 10){
        btn.style.display = 'flex'
    } else {
        btn.style.display = 'none'
    }
}

let count = 1
document.getElementById("radio1").checked = true

setInterval( function(){
    nextImage()
}, 5000)

function nextImage(){
    count++
    if (count > 2){
        count = 1
    }

    document.getElementById("radio"+count).checked = true
}