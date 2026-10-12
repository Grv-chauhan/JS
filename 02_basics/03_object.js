// singleton 
// object.create


// object literal
const JsUser ={
    name:"gaurav",
    class : 12,
    roll_no: "2401ec15"
}
// console.log(JsUser)
const JsUser2 ={
    name:"gaurav",
    class : 12,
    roll_no: "2401ec15",
    address:"gkp",
    details :{
     age:20,
     gender:"male"
    }
}

console.log({...JsUser,...JsUser2.details})