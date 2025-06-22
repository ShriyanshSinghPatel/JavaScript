// let name = "SHRIYANSH SINGH PATEL"
// let student = {
//     rollnumber: "0112113",
//     marks: "82.6",
//     schoolname: "Shri Dev",
//     fees: "30000"
// }
// console.log(name)
// console.log(student);
// console.log(student.schoolname)
// student.schoolname ="Shri Dev Murlidhar"
// student.gender = "male"
// delete student.fees;
// const villages={
// chandankheda:{
//     population: "1000",
//     mostSurname: "Patel"},
// piparshara:{
//     population: "1000",
//     mostSurname: "Patel"},
// nandiya:{
//     population: "1000",
//     mostSurname: "Patel"}
// }
// villages.chandankheda.distict="narsinghpur";
// let num = Math.random()*100;
// num = Math.floor(num);//remove points
// console.log(num)

// console.log("hello1");
// console.log("hello2");
// console.log("hello3");
// try{
//     console.log(a);
// }catch(err){
//     console.log(err);
// }
// console.log("hello4");
// console.log("hello6");
//arrow function without return not necessary
//looks correct in syntax but won’t return anything, because in JavaScript, a function with curly braces {} needs an explicit return statement.
// const arrowFunction=(a,b)=>{
//      a*b;
// }
// const mul = (z,v) => z*v;
// const cube = n => n*n*n;
// //Settimeout function
// console.log("hello");
// let a = 10, b = 20;
// setTimeout(()=>{
//     console.log("shriyansh singh patel");
//     var total = a+b;
//     console.log(total);
// },4000)
// console.log("hello5");

// let print = function(el){
//     console.log(el);
// }
// arr.forEach(print);
// arr.forEach(function(el){
//     console.log(el);
    
// })
// let doubleArray = arr.map(function(el){
//     return el*el
// })
// console.log(doubleArray)
// let trueArray = arr.filter(function(el){
//     return el%2!=0
// })
// console.log(trueArray);
// function name(arr) {
//     let max = arr[0];
//     for( let i = 1;i<arr.length;i++){
//     if(arr[i]<max){
//         arr[i]=max;
//     }
// }
// return max;
// }
let arr=[10,20,30,5,40,50,43];
// function name(arr) {
//     let max = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > max) {
//             // arr[i] = max;
//             max = arr[i];
//         }
//     }
//     return max;
// }
function minimum(arr){
    var min = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i]<min)
            min=arr[i]
    }
    return min;
}




