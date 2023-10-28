//Question no-1
//comparing two json with same properties and in different order

let obj1={name:"Person 1",age:5};
let obj2={age:5,name:"Person 1"};
var sortedObj1=JSON.stringify(Object.keys(obj1).sort());
var sortedObj2=JSON.stringify(Object.keys(obj2).sort());
console.log(sortedObj1==sortedObj2);
//-------------------------------------------------------------------------------------------------------------------------------------

// Question no-2
//Request to display all the countries flags

let request=new XMLHttpRequest;
request.open("GET","https://restcountries.com/v3.1/all","true");
request.send();
request.onload=function(){
    var data=request.response;
    //console.log(data);
    var output=JSON.parse(data);
    //console.log(output);
    for(var i=0;i<output.length;i++){
        console.log(output[i].flags.png);
    }

    
}

//-------------------------------------------------------------------------------------------------------------------------------------

// Question no-3
//Request to display all country names, regions, population, sub-region

let request1=new XMLHttpRequest;
request1.open("Get","https://restcountries.com/v3.1/all","true");
request1.send();
request1.onload=function(){
    var data1= request1.response;
    var output1=JSON.parse(data1);
    for(var i=0;i<output1.length;i++){
       console.log(output1[i].name,output1[i].region,output1[i].subregion,output1[i].population);
    }
}

//-------------------------------------------------------------------------------------------------------------------------------------








