let request = new XMLHttpRequest();
request.open('GET',"https://restcountries.com/v2/all")
request.onload = function () {
    if(request.status >= 200 && request.status < 300){
        let a = JSON.parse(this.response);
        for(var i = 0;i<a.length;i++){
            console.log(a[i].flag);
        }
    }else{console.log(request.responseText);}
}    
// request.onerror = function (){
//     console.log(request.responce);
// }
request.send();