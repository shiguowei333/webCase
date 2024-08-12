document.querySelector('.tab-nav ul').addEventListener('click', e => {
    if(e.target.tagName === 'A') {
        document.querySelector('.tab-nav ul .active').classList.remove('active')
        e.target.classList.add('active')
        document.querySelector('.tab-content .active').classList.remove('active')
        document.querySelector(`.tab-content .item:nth-child(${e.target.dataset.id})`).classList.add('active')
    }
})