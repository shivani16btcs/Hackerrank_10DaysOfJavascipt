let p=new Promise((resolve,regect)=>{
let a=1+1;
if(a==2)
resolve('sucess');
else
regect("failes");
})

p.then((message)=>{
    console.log(message)
}).catch((message)=>{
    console.log(message);
})



let record1= new Promise((resolve,regect)=>{
    return resolve("record1");
})

let record2=new Promise ((resolve,regect)=>{
    return resolve("record2");
})

let record3= new Promise((resolve,regect)=>{
    return resolve("recode3")
})


Promise.race([record1,record2,record3,p]).then((Response)=>{
    console.log(Response);
})


Promise.all([record1,record2,record3,p]).then((Response)=>{
    console.log(Response);
})