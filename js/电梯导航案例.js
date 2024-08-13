window.addEventListener('scroll', e => {
    console.log(document.documentElement.scrollTop)
    if(document.documentElement.scrollTop >= 300) {
        console.dir(document.querySelector('.temp'))
        document.querySelector('.temp').style.display = 'block'
    }else if (document.documentElement.scrollTop < 300) {
        document.querySelector('.temp').style.display = 'none'
    }
})