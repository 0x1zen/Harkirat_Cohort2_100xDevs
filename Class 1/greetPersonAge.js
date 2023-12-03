function greetPerson(age){
    if(age>=18){
        return "Hey There,Your age is "+age+ " and you are an Adult.";
    }
    else if(age<18){
        return "Hey There,Your age is "+age+ " and you are not an Adult.";
    }
}
var ans=greetPerson(20);
console.log(ans);