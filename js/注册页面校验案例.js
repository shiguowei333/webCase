let interval = null

document.querySelector('.xtx-form a.code').addEventListener('click', () => {
    if (!interval) {
        let i = 60
        document.querySelector('.xtx-form a.code').innerHTML = `${i<10 ? '0'+ i: i}秒后重新发送`
        interval = setInterval(() => {
            i--
            document.querySelector('.xtx-form a.code').innerHTML = `${i<10 ? '0'+ i: i}秒后重新发送`
            if (i < 0) {
                clearInterval(interval)
                console.log(interval)
                interval = null
                document.querySelector('.xtx-form a.code').innerHTML = '重新发送'
            }
        }, 1000)
    }
})

function checkUsername() {
    const username = document.querySelector(".xtx-form input[name='username']").value
    const userNameReg = /^[a-zA-Z0-9]{6,10}$/
    if (userNameReg.test(username)) {
        // 验证通过
        document.querySelector('.xtx-form div[data-prop="username"] .msg').innerHTML = ''
        return true
    } else {
        // 验证不通过
        document.querySelector('.xtx-form div[data-prop="username"] .msg').innerHTML = '昵称长度为6-10个字符'
        return false
    }
}

function checkPhone() {
    const phone = document.querySelector(".xtx-form input[name='phone']").value
    const phoneReg = /^1[3-9]\d{9}$/
    if (phoneReg.test(phone)) {
        // 验证通过
        document.querySelector('.xtx-form div[data-prop="phone"] .msg').innerHTML = ''
        return true
    } else {
        // 验证不通过
        document.querySelector('.xtx-form div[data-prop="phone"] .msg').innerHTML = '请输入正确的手机号'
        return false
    }
}

function checkCode() {
    const code = document.querySelector(".xtx-form input[name='code']").value
    if (code === '3333') {
        // 验证通过
        document.querySelector('.xtx-form div[data-prop="code"] .msg').innerHTML = ''
        return true
    } else {
        // 验证不通过
        document.querySelector('.xtx-form div[data-prop="code"] .msg').innerHTML = '请输入正确的验证码'
        return false
    }
}

function checkPassword() {
    const password = document.querySelector(".xtx-form input[name='password']").value
    const passwordReg = /^[A-Za-z\d!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{6,20}$/
    if (passwordReg.test(password)) {
        // 验证通过
        document.querySelector('.xtx-form div[data-prop="password"] .msg').innerHTML = ''
        return true
    } else {
        // 验证不通过
        document.querySelector('.xtx-form div[data-prop="password"] .msg').innerHTML = '设置6-20位字母、数字和符号组合'
        return false
    }
}

function checkConfirm() {
    const password = document.querySelector(".xtx-form input[name='password']").value
    const confirm = document.querySelector(".xtx-form input[name='confirm']").value
    if (password === confirm) {
        // 验证通过
        document.querySelector('.xtx-form div[data-prop="confirm"] .msg').innerHTML = ''
        return true
    } else {
        // 验证不通过
        document.querySelector('.xtx-form div[data-prop="confirm"] .msg').innerHTML = '两次密码输入不一致'
        return false
    }
}


document.querySelector('.xtx-form').addEventListener('change', e => {
    if(e.target.tagName === 'INPUT') {
        switch (e.target.name) {
            case 'username':
                checkUsername()
                break
            case 'phone':
                checkPhone()
                break
            case 'code':
                checkCode()
                break
            case 'password':
                checkPassword()
                break
            case 'confirm':
                checkConfirm()
                break
            default:
                break
        }
    }
})

document.querySelector('.xtx-form div.pl50 i').addEventListener('click', () => {
    document.querySelector('.xtx-form div.pl50 i').classList.toggle('icon-queren')
    document.querySelector('.xtx-form div.pl50 i').classList.toggle('icon-queren2')
})

document.querySelector('.xtx-form button.submit').addEventListener('click', e => {
    if(!document.querySelector('.xtx-form div.pl50 i').classList.contains('icon-queren2')) {
        alert('请勾选同意用户服务协议')
        e.preventDefault()
    }
    if(!(checkUsername() && checkPhone() && checkCode() && checkPassword() && checkConfirm())) {
        e.preventDefault()
    }
    checkUsername()
    checkPhone()
    checkCode()
    checkPassword()
    checkConfirm()
})