let a = {name : "person1", age : 5};
let b = {age : 5, name : "person1"};
//with oder
let c = JSON.stringify(a) === JSON.stringify(b);
console.log(c);
//without oder

let nComp = (a.name && b.age);
let aComp = (a.age && b.name);
let compObj = (nComp != aComp);
if(compObj){console.log("Both objects are same")}
else {console.log("both objects are Different Data")}