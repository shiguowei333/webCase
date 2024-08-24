const smallBox = document.querySelector('.small')
const middleBox = document.querySelector('.middle')
const bigBox = document.querySelector('.large')

smallBox.addEventListener('mouseover', e => {
    if(e.target.tagName === 'IMG') {
        if(document.querySelector('.small li.active')) {
            document.querySelector('.small li.active').classList.remove('active')
        }
        e.target.parentNode.classList.add('active')
        document.querySelector('.middle img').src = e.target.src
        bigBox.style.backgroundImage = `url(${e.target.src})`
    }
})

let timeId = null

middleBox.addEventListener('mouseenter', () => {
    clearTimeout(timeId)
    bigBox.style.display = 'block'
})

middleBox.addEventListener('mouseout', () => {
    timeId = setTimeout(() => {
        bigBox.style.display = 'none'
    }, 200)
})

bigBox.addEventListener('mouseenter', () => {
    clearTimeout(timeId)
    bigBox.style.display = 'block'
})

bigBox.addEventListener('mouseout', () => {
    timeId = setTimeout(() => {
        bigBox.style.display = 'none'
    }, 200)
})

middleBox.addEventListener('mouseenter', () => {
    document.querySelector('.middle .layer').style.display = 'block'
})
middleBox.addEventListener('mouseleave', () => {
    document.querySelector('.middle .layer').style.display = 'none'
})

document.querySelector('.middle .layer').addEventListener('mouseenter', () => {
    clearTimeout(timeId)
    document.querySelector('.middle .layer').style.display = 'block'
})

middleBox.addEventListener('mousemove', e => {
    let Bx = e.pageX - middleBox.getBoundingClientRect().left
    let By = e.pageY - middleBox.getBoundingClientRect().top - document.documentElement.scrollTop

    if(Bx < 100) Bx = 100
    if(By < 100) By = 100
    if(Bx > middleBox.offsetWidth - 100) Bx = middleBox.offsetWidth - 100
    if(By > middleBox.offsetHeight - 100) By = middleBox.offsetHeight - 100
    document.querySelector('.middle .layer').style.left = Bx - 100 + 'px'
    document.querySelector('.middle .layer').style.top = By - 100 + 'px'
    bigBox.style.backgroundPosition = `-${(Bx - 100) * 2}px -${(By - 100) * 2}px`
})