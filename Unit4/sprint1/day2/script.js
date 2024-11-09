

// let arr = [10, 2, 3, 4, 5];
// let out = arr. reduce (function (acc, el, i, arr){
//     return acc+el
//     return i,el
// })
// console. log (out)
// 2 cases - 1. with initial value, 2. Without initial value
//Without initial value - it is taking default initial value
// initial value - ist element in the array, acc = 10
// Ist iteration →> acc=10, el=

let animal=[]
let arr = [1, 2, 3, 4, 5, 6];

let sum=arr.filter(function(el,i,arr){
    return el % 3==0;
});
let res=sum.reduce(function(acc,el,i,arr){
    return acc+el**3
},0);
console.log(res)

