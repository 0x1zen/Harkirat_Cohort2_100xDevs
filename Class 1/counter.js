var sum=0;
function addME(counter){
    for(var i=0;i<=counter;i++){
        sum=sum+i;
    }
    return sum;
}
var ans=addME(1000);
console.log(ans);