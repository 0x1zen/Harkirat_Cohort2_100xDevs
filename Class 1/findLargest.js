var arr=[10,50,25,70,1];
var largest=-1;
function largestNum(arr){
    for(var i=0;i<arr.length;i++){
        if(arr[i]>largest){
            largest=arr[i];
        }
        else{

        }
    }
    return largest;
}
var ans=largestNum(arr);
console.log(ans);