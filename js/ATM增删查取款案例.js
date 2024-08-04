let balance = 0
let flag = 0
let temp = 0

while(true){
    
    flag = prompt('请选择操作：\n1.存钱\n2.取钱\n3.查看余额\n4.退出')
    if(flag === '1') {
        temp = prompt('请输入存款金额：')
        balance = balance + +temp
        continue
    }if(flag === '2') {
        temp = prompt('请输入取款金额：')
        balance = balance - +temp
        continue
    }if(flag === '3') {
        alert(`您的余额为${balance}`)
    }if(flag === '4') {
        break
    }else {
        continue
    }
}


