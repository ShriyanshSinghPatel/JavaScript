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
// let arr=[10,20,30,5,40,50,43];
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
// function minimum(arr){
//     var min = arr[0];
//     for(let i = 1; i < arr.length; i++){
//         if(arr[i]<min)
//             min=arr[i]
//     }
//     return min;
// }


// let btn = document.querySelector("button");
// console.dir(btn);
// btn.onmouseenter=function(){
//     console.log("shriyansh singh patel");
    
// }
// function outer() {
//   let count = 0;
// //   console.log("shriyansh");
//   return function inner() {
//     count++;
//     console.log(count);
//   };
// }
// // const counter = outer();
// // counter(); // 1
// // counter(); // 2
// var counter = outer();
// var counter =  outer();
// counter();
// function changeColor(color,delay){
//   setTimeout(()=>{
//   h1.style.color=color;
//   },delay)
// }
// let h1 = document.querySelector("h1")
// changeColor("red",1000);
// changeColor("yellow",2000);
// changeColor("green",3000);
// function savetoDB(data,success,failure){
//   let internetspeed=Math.floor(Math.random()*10);
//   if(internetspeed>4){
//     success()
//   }else{
//     failure()
//   }
// }
// savetoDB("shriyansh",()=>{
//    console.log("good connection - Data Saved Successfully");
// },()=>{
//     console.log("bad connection - Data not Saved");
// });

function savetoDB(data){
  return new Promise((resolve,reject)=>{
      let internetspeed=Math.floor(Math.random()*10);
  if(internetspeed>4){
    resolve("data saved")
  }else{
    reject("week connection")
  }
  })
}
savetoDB("shriyansh")
.then(()=>{
  console.log("data1 savved");
  return savetoDB("singh");
})
  .then(()=>{
    console.log("data2 savved");
    return savetoDB("patel")
  })
  .then(()=>{
    console.log("data3 savved");
  })
.catch(()=>{
  console.log("promise was rejected");
})
