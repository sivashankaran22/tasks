let request = new XMLHttpRequest();
let countries ="https://restcountries.com/v2/all";
request.open('GET',"https://restcountries.com/v2/all")

request.onload = function () {
    for (let i=0;i<countries.length;i++){
        console.log(countries[i].name);
        console.log(countries[i].region);
        console.log(countries[i].subregion);
        console.log(countries[i].population);
    
}
// request.onerror = function (){
//         console.log(request.responce);
//     }
}
request.send();
