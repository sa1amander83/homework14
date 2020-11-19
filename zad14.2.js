
const jsonString=`
{
"name":"Anton",
"age":36,
"skills":["Javascript","HTML","CSS"],
"salary":80000}`;

const data = JSON.parse(jsonString);
console.log(data);
const newName= data.name;
console.log(newName);
const age= data.age;
const salary= data.salary;
const skills= data.skills;
console.log(skills);

const result = {
name: data.name,
age: data.age,
skills: data.skills,
salary: data.salary};

console.log(result);