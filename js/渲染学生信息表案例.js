const arr = [{
    name: '张三',
    age: 18,
    gender: '男',
    hometown: '山东省'
},{
    name: '李四',
    age: 19,
    gender: '女',
    hometown: '山西省'
},{
    name: '王五',
    age: 20,
    gender: '男',
    hometown: '河南省'
},{
    name: '赵六',
    age: 21,
    gender: '女',
    hometown: '河北省'

}]

for (index in arr) {
    document.querySelector(`tbody tr:nth-child(${parseInt(index) + 1}) td:nth-child(1)`).innerHTML = arr[index].name
    document.querySelector(`tbody tr:nth-child(${parseInt(index) + 1}) td:nth-child(2)`).innerHTML = arr[index].age
    document.querySelector(`tbody tr:nth-child(${parseInt(index) + 1}) td:nth-child(3)`).innerHTML = arr[index].gender
    document.querySelector(`tbody tr:nth-child(${parseInt(index) + 1}) td:nth-child(4)`).innerHTML = arr[index].hometown
}