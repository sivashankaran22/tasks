
let persons = [
   {"name" : "Karthik",
   "age" : 27,
   "contactNo" : 2534681,
   "deptOfStudying" :"MBA",
   "about" : "HR"
   },
   {"name" : "Swami",
   "age" : 26,
   "contactNo" : 9874563211,
   "deptOfStudying" :"Mech",
   "about" : "Design Engineer"
   },
   {"name" : "Raja",
   "age" : 25,
   "contactNo" : 9894271255,
   "deptOfStudying" :"ECE",
   "about" : "Analysis Engineer"
   },
   {"name" : "santhosh",
   "age" : 26,
   "contactNo" : 9899758589,
   "deptOfStudying" :"Production",
   "about" : "Production Engineer"
   }
];
//For loop
for( let i=persons.length-1;i>=0;i--){
    let person = persons[i].name;
    let spec = persons[i].deptOfStudying;
    console.log(person + "-->"+ spec);
}
//For in loop
for(let index in persons){
    console.log(persons[index]);
}
//For of loop
for(let details of persons){
    console.log(details);
}
//forEach loop
persons.forEach((a)=> console.log(a));
