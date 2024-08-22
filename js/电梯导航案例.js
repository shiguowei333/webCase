window.addEventListener('scroll', e => {
    if(window.scrollY >= 300) {
        document.querySelector('.xtx-elevator').style.opacity = 1
    }else {
        document.querySelector('.xtx-elevator').style.opacity = 0
    }
})

document.querySelector('.xtx-elevator-list').addEventListener('click', e => {
    if(e.target.tagName === 'A') {
        if(document.querySelector('.xtx-elevator a.active')) {
            document.querySelector('.xtx-elevator a.active').classList.remove('active')
        }
        if(e.target.id === 'backTop') {
            window.scrollTo(0,0)
        }else {
            e.target.classList.add('active')
            window.scrollTo(0,document.querySelector(`.xtx_goods_${e.target.dataset.name}`).offsetTop)
        }
    }
}) 

window.addEventListener('scroll', e => {
    console.log(document.querySelector('.xtx-elevator li:nth-child(2) a'))
    if(document.querySelector('.xtx-elevator a.active')) {
        document.querySelector('.xtx-elevator a.active').classList.remove('active')
    }
    if(window.scrollY >= document.querySelector('.xtx_goods_new').offsetTop && window.scrollY < document.querySelector('.xtx_goods_popular').offsetTop) {
        document.querySelector('.xtx-elevator li:nth-child(1) a').classList.add('active')
    }else if(window.scrollY >= document.querySelector('.xtx_goods_popular').offsetTop && window.scrollY < document.querySelector('.xtx_goods_brand').offsetTop) {
        document.querySelector('.xtx-elevator li:nth-child(2) a').classList.add('active')
    }else if(window.scrollY >= document.querySelector('.xtx_goods_brand').offsetTop && window.scrollY < document.querySelector('.xtx_goods_topic').offsetTop) {
        document.querySelector('.xtx-elevator li:nth-child(3) a').classList.add('active')
    }else if(window.scrollY >= document.querySelector('.xtx_goods_topic').offsetTop && window.scrollY < document.querySelector('.xtx_footer').offsetTop) {
        document.querySelector('.xtx-elevator li:nth-child(4) a').classList.add('active')
    }
})
