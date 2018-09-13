function sumAll(arr) {
    let _arr = [].concat(arr).sort((a, b) => a - b);
    return (_arr[0] + _arr[1]) * (_arr[1] - _arr[0] + 1) / 2

}

console.log(sumAll([1, 4]));

function diffArray(arr1, arr2) {
    var newArr = [];
    // 这是一个党异伐同的过程
    arr1.forEach(item => {
        if(arr2.indexOf(item)===-1){
            newArr.push(item);
        }
    });
    arr2.forEach(item => {
        if (arr1.indexOf(item) === -1&&newArr.indexOf(item)===-1) {
            newArr.push(item);
        }
    });
    return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

function destroyer(arr,...rest) {
    // 删掉那些值
    let _arrSet=new Set(arr);
    rest.forEach(item=>{
        if(_arrSet.has(item)){
            _arrSet.delete(item)
        }
    })
    return [..._arrSet]
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

let users=[{
        username: 'Jeff',
        online: true
    },
    {
        username: 'Alan',
        online: false
    },
    {
        username: 'Mary',
        online: true
    },
    {
        username: 'Jim',
        online: false
    },
    {
        username: 'Sara',
        online: true
    },
    {
        username: 'Laura',
        online: true
    }
]
let usersOnline = users.filter(item => {return item.online})
console.log(usersOnline)
const renderOnline = usersOnline.map((item, index) =>`<li key=${index}>${item.username}</li>`);
console.log(renderOnline)

function foo() {
    console.log(this);
}

console.log(new foo()) // foo
console.log(foo())

var x=10;
function fn(){
    console.log(x)
}
function show(f){
    var x=20;
    f()
}
show(fn)