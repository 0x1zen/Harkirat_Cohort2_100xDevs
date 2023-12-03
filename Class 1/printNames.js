var personsObj=[
    {firstName:"Harkirat",
     Gender:"Male"},
    {firstName:"Raman",
     Gender:"Male"},
     {firstName:"Geeta",
     Gender:"Female"}
];
var maleNames=[];
function printMales(personsObj){
    for(var i=0;i<personsObj.length;i++){
        if(personsObj[i]["Gender"]==="Male"){
            maleNames.push(personsObj[i]["firstName"]);
        }
        else{
      
        }
    }
    return maleNames;
}
var ans=printMales(personsObj);
console.log(ans);