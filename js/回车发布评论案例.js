function showPingLun() {
    document.querySelector('.item').style.display = 'flex'
    document.querySelector('.list .text').innerHTML = document.querySelector('#tx').value
    document.querySelector('#tx').value = ''
}


document.querySelector('.wrapper #tx').addEventListener('keyup',e => {
    if(e.keyCode == 13) {
        showPingLun()
    }
})

document.querySelector('.wrapper button').addEventListener('click',showPingLun)

