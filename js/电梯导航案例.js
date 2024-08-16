window.addEventListener('scroll', e => {
    console.log(window.scrollY)
    if(window.scrollY >= 300) {
        document.querySelector('.xtx-elevator').style.opacity = 1
    }else {
        document.querySelector('.xtx-elevator').style.opacity = 0
    }
})



// window.addEventListener('scroll', e => {
//     console.log(document.documentElement.scrollTop)
//     if(document.documentElement.scrollTop >= 300) {
//         console.dir(document.querySelector('.temp'))
//         document.querySelector('.temp').style.display = 'block'
//     }else if (document.documentElement.scrollTop < 300) {
//         document.querySelector('.temp').style.display = 'none'
//     }
// })