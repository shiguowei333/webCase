let jidu1 = prompt('请输入第一季度的数据：')
let jidu2 = prompt('请输入第二季度的数据：')
let jidu3 = prompt('请输入第三季度的数据：')
let jidu4 = prompt('请输入第四季度的数据：')

document.querySelector('.con .jidu-1 div').style.height = jidu1 + 'px'
document.querySelector('.con .jidu-1 span:last-child').innerHTML = jidu1

document.querySelector('.con .jidu-2 div').style.height = jidu2 + 'px'
document.querySelector('.con .jidu-2 span:last-child').innerHTML = jidu2

document.querySelector('.con .jidu-3 div').style.height = jidu3 + 'px'
document.querySelector('.con .jidu-3 span:last-child').innerHTML = jidu3

document.querySelector('.con .jidu-4 div').style.height = jidu4 + 'px'
document.querySelector('.con .jidu-4 span:last-child').innerHTML = jidu4