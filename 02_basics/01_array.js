const myarr=[1,4,5,6,7,8,9]
const yourarr=[1,4,5,6,7,"rohan",9]
// myarr[7]=9
// console.log(myarr[7])
// myarr.shift()
// console.log(myarr)
// myarr.unshift(4)
// console.log(myarr)
// console.log("b",myarr)

// let hisarr = [...myarr,...yourarr]
// console.log(hisarr)

// let herarr = new Array(1,2,[4,6,7,[8,[0,9,8,7],9]])
// let himarr = herarr.flat(2)
// console.log(himarr)

console.log(Array.isArray("gaurav"))
console.log(Array.from("gaurav"))
console.log(Array.from({name : "gaurav"})) //important

let score = 9
let score2= 0

let ansarr = Array.of(score,score2)
console.log(ansarr)