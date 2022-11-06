let people=["Grey","Mary","Devon","James"];
//1
for(let i=0;i<people.length;i++){
    console.log(people[i]);
}
//2
people.shift();
console.log(people);
//3
people.pop();
console.log(people);
//4
people.unshift("Matt");
console.log(people);
//5
people.push("Nandhakumar");
console.log(people);
//6
let i=0;
while(i!=people.indexOf("Mary")+1){
    console.log(people[i]);
    i++;
}
//7
let a=[];
for(let i=0;i<people.length;i++){
    if(people[i]=="Mary"||people[i]=="Matt"){
        continue;
    }
    else{
        a.push(people[i]);
    }
}
console.log(a);
//8
console.log(people.indexOf("Mary"));
//9
console.log(people.indexOf("Foo"));
//10
people.splice(2,1,"Elizabeth","Artie");
console.log(people);
//11
let withBob=people;
console.log(withBob.concat("Bob"));

