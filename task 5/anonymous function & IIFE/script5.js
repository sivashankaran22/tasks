// a.print odd numbers in array

//anonymous function

let a = function(){
    const oddNumbers = b.filter(c => c % 2 != 0)
    return oddNumbers;
}
let b=[1,4,3,7,8,9,15,12];
console.log(a());


// IIFE

(function(){
    const oddNumbers1 = b.filter(c => c % 2 != 0)
    console.log(oddNumbers1);
})();


//b.Convert all the strings to title caps in a string array

//anonymous function

let c = 'hello i am learning new technology in guvi....'

let d = function(){
    return c.split(' ').map(word => word.charAt(0).toUpperCase()+word.substring(1).toLowerCase()).join(' ');   
}
console.log(d()); 

// IIFE

(function(){
    let str =c.split(' ').map(word => word.charAt(0).toUpperCase()+word.substring(1).toLowerCase()).join(' '); 
    console.log(str)
})();

//c.Sum of all numbers in an array

//anonymous function

let sumOfArray = function(){
 for( let i=0;i<b.length;i++){
    sum += b[i];
 }
 return sum;
}
let sum = 0;
console.log(sumOfArray());

// IIFE

(function(){
    let summ = 0;
    for( let i=0;i<b.length;i++){
        summ += b[i];
     }
    console.log(summ);
})();

//d.Return all the prime numbers in an array

//anonymous function

let e =function(){
b.forEach((num)=>{
  let nm =0;
  for(let i=0;i<=num;i++){
    if((num%i)===0){
      nm++
    }
  }
  if(nm === 2){
    temp.push(num)
  }
})
return temp
}
let temp = [];
console.log(e());

// IIFE

(function(){
    tempp =[]
    b.forEach((num)=>{
        let nmm =0;
        for(let i=0;i<=num;i++){
          if((num%i)===0){
            nmm++
          }
        }
        if(nmm === 2){
          tempp.push(num)
        }
      })
      console.log(tempp);
})();

//e.Return all the palindromes in an array

//anonymous function

let isPalindrome = function(){
    for(let i=0;i<dummyArr.length;i++){
        chk = dummyArr[i].toString().split('').reverse().join('')
        if(dummyArr[i]==chk){
         bnew.push(dummyArr[i])
        }
   }
   return bnew
}
let dummyArr =[12321,14123,14541,"ada","dumy","carerac"];
let bnew = [];
let chk;
console.log(isPalindrome());

// IIFE

(function(){
let dummyArr =[12321,14123,14541,"ada","dumy","carerac"];
let bnew = [];
let chk;
for(let i=0;i<dummyArr.length;i++){
    chk = dummyArr[i].toString().split('').reverse().join('')
    if(dummyArr[i]==chk){
     bnew.push(dummyArr[i])
    }
}
 console.log(bnew);
})();

//f.`Return median of two sorted arrays of the same size`.

//anonymous function

let sortedArray=function(){

  let arr1=[1,8,6,13,15]
  let arr2=[4,2,9,7,3]

  var con = arr1.concat(arr2);
  con = con.sort(function(d,e){return d-e});
    var len = con.length;

  if(len%2 == 1){
       return con[(len/2)-.5];
  } 
  else{
       return (con[len/2]+con[(len/2)-1])/2;
  }
  
}
console.log(sortedArray());

// IIFE

(function(){
  let arr1=[1,8,6,13,15]
  let arr2=[4,2,9,7,3]

  var con = arr1.concat(arr2);
  con = con.sort(function(d,e){return d-e});
  var len = con.length;

  if(len%2 == 1){
       console.log(con[(len/2)-.5]);
  } 
  else{
       console.log((con[len/2]+con[(len/2)-1])/2);
  }
})();

//g.Remove duplicates from an array

//anonymous function

let orignal = function(){
 let value2 = [...new Set(value1)];
 return value2;
}
let value1 =[10,3,89,3,4,10,51,65,35,89,10,51];
console.log(orignal());

// IIFE

(function(){
  let value1 =[10,3,89,3,4,10,51,65,35,89,10,51];
  let value2 = [...new Set(value1)];
  console.log(value2);
})();

//h.Rotate an array by k times

//anonymous function

let rotateArray = function(){
  for (let i=0;i<k;i++){
   let si = ab[0];
   for(let j=0;j<ab.length;j++){
       ab[j]=ab[j+1];
   }
   ab[ab.length-1] = si;
  }
  return ab;
}
let ab = [1,4,5,2,6,9,8];
let k =1;
console.log(rotateArray());

// IIFE

(function(){
  let ab = [1,4,5,2,6,9,8];
  let k =1;
  for (let i=0;i<k;i++){
    let si = ab[0];
    for(let j=0;j<ab.length;j++){
        ab[j]=ab[j+1];
    }
    ab[ab.length-1] = si;
   }
   console.log(ab);
})();