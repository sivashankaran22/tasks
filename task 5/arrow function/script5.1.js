//  Arrow functions

//a.Print odd numbers in an array

let a = () =>{
    const oddNumbers = b.filter(c => c % 2 != 0)
    return oddNumbers;
}
let b=[1,4,3,7,8,9,15,12];
console.log(a());

//b.Convert all the strings to title caps in a string array

let d = () =>{
    return c.split(' ').map(word => word.charAt(0).toUpperCase()+word.substring(1).toLowerCase()).join(' ');   
}
let c = 'hello i am learning new technology in guvi....'
console.log(d());

//c.Sum of all numbers in an array

let sumOfArray =() =>{
    for( let i=0;i<b.length;i++){
       sum += b[i];
    }
    return sum;
   }
   let sum = 0;
   console.log(sumOfArray());

//d.Return all the prime numbers in an array

let e =()=>{
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

//e.Return all the palindromes in an array

let isPalindrome = ()=>{
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