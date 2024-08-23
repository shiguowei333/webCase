function getTime() {
    const now = new Date()
    //获取年份
    const year = now.getFullYear()
    //获取月份
    const month = now.getMonth() + 1
    //获取日期
    const day = now.getDate()
    //获取小时
    const hour = now.getHours()
    //获取分钟
    const minute = now.getMinutes()
    //获取秒
    const second = now.getSeconds()
    return {year,month,day,hour,minute,second}
}

setInterval(() => {
    let time = getTime()
    document.querySelector('.next').innerHTML = `今天是${time.year}年${time.month}月${time.day}日`
    document.querySelector('#hour').innerHTML = time.hour > 10 ? time.hour : `0${time.hour}`
    document.querySelector('#minutes').innerHTML = time.minute > 10 ? time.minute : `0${time.minute}`
    document.querySelector('#second').innerHTML = time.second > 10 ? time.second : `0${time.second}`
}, 1000)