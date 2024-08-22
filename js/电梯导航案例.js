window.addEventListener('scroll', e => {
    if(window.scrollY >= 300) {
        document.querySelector('.xtx-elevator').style.opacity = 1
    }else {
        document.querySelector('.xtx-elevator').style.opacity = 0
    }
})

document.querySelector('.xtx-elevator-list').addEventListener('click', e => {
    if(e.target.tagName === 'A') {
        if(e.target.id === 'backTop') {
            window.scrollTo(0,0)
        }else {
            window.scrollTo(0,document.querySelector(`.xtx_goods_${e.target.dataset.name}`).offsetTop)
        }
    }
}) 
