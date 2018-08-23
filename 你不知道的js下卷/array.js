let arrLike={
    length:3,
    2:'foo',
}
console.log(Array.from(arrLike,(val,index)=>{
    if(typeof val==='string'){
        return val.toUpperCase()
    }else{
        return index+1
    }
}))
var points = [
    { x: 10, y: 20 },
    { x: 20, y: 30 },
    { x: 30, y: 40 },
    { x: 40, y: 50 },
    { x: 50, y: 60 }
];
let res=points.find(function matcher(point) {
    return (
        point.x % 3 == 0 &&
        point.y % 4 == 0
    );
});
res