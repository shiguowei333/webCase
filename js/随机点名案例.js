// 数据数组
const arr = ['马超', '黄忠', '赵云', '关羽', '张飞']

function getRandomEl(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}

let intervalId = null
document.querySelector('.btns .start').addEventListener('click', () => {
    clearInterval(intervalId)
    intervalId = setInterval(() => {
        let randomName = getRandomEl(arr)
        document.querySelector('.qs').innerHTML = randomName
    },50)
})

document.querySelector('.btns .end').addEventListener('click', () => {
    clearInterval(intervalId)
})
