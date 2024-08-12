document.querySelector('#checkAll').addEventListener('click', e => {
    if(e.target.checked === true){
        for (let i = 0; i < document.querySelectorAll('.ck').length; i++) {
            document.querySelectorAll('.ck')[i].checked = true
        }
    }else if(e.target.checked === false){
        console.log("unchecked")
        for (let i = 0; i < document.querySelectorAll('.ck').length; i++) {
            document.querySelectorAll('.ck')[i].checked = false
            console.dir(document.querySelectorAll('.ck')[i])
        }
    }

})

document.querySelector('table').addEventListener('click', e => {
    if(e.target.className == 'ck' && e.target.checked === true){
        let count = document.querySelectorAll('.ck:checked').length
        if(count == 3) {
            document.querySelector('#checkAll').checked = true
        }}else if(e.target.className == 'ck' && e.target.checked === false){
            let count = document.querySelectorAll('.ck:checked').length
            if(count != 3) {
                document.querySelector('#checkAll').checked = false
        }
}})