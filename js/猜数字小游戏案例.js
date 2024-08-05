let number =  Math.floor(Math.random() * 100 + 1)
let temp = 0
while(true) {
    temp = parseInt(prompt("请输入您要猜的数字(0-100)"))
    if (temp == number) {
        alert('恭喜您猜对了！')
        break;
    }if (temp > number) {
        alert('您猜的太大了，再试一次吧');
    }if (temp < number) {
        alert('您猜的太小了，再试一次吧');
    }
}