let name = "SHRIYANSH SINGH PATEL"
let student = {
    rollnumber: "0112113",
    marks: "82.6",
    schoolname: "Shri Dev",
    fees: "30000"
}
console.log(name)
console.log(student);
console.log(student.schoolname)
student.schoolname ="Shri Dev Murlidhar"
student.gender = "male"
delete student.fees;
const villages={
chandankheda:{
    population: "1000",
    mostSurname: "Patel"},
piparshara:{
    population: "1000",
    mostSurname: "Patel"},
nandiya:{
    population: "1000",
    mostSurname: "Patel"}
}
villages.chandankheda.distict="narsinghpur";
let num = Math.random()*100;
num = Math.floor(num);//remove points
console.log(num)