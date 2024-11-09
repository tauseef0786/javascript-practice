// let colors = ["red", "green", "blue"];
// console.log(typeof colors)
// function greet() {
//     return "Hello!";
//   }
// console.log(typeof greet)  


// function add(a,b){
//     var sum=a+b
//     return sum
// }
// console.log(add(2,5))
// var n=Number('nu')
// console.log(n)

// var hasvoter=true
// console.log(`User ${hasvoter ? 'is voter':'not a voter'}`)


// var a=6,
// b=5;
// console.log(a && b && 0 && 8 && 9)

var arr=[1,2,3,4,5,6,7,7,2,3,4,9,6]
// arr.sort(function(a,b){
//     return b-a;
// })
// console.log(arr)

console.log(arr.length)
for(let i=0;i<arr.length;i++){
    if(i%2==0){
        console.log(arr[i])
    }
}
