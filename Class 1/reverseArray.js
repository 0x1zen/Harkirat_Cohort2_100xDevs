var arr=[1,2,3,4,5,6,7,8,9,10];
var start=0;
var end=arr.length-1;
function swap(a,b){
    var temp=a;
    a=b;
    b=temp;
}
while(start<=end){
    var temp=arr[start];
    arr[start]=arr[end];
    arr[end]=temp;
    start++;
    end--;
}
console.log(arr);