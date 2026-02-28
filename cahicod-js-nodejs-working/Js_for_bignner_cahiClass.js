// age= 15;

// console.log(`value of the age is `,age,"youare allowed",isAllowedToVote(age));

// var age =12;

// function isAllowedToVote(age){
//     return age>=18;
// }


// what will happen if store the above function in the "var" let see //commit upper code to git output ok //

// age= 15;

// console.log("Value of isAllowedToVote",isAllowedToVote);
// console.log(`value of the age is `,age,"youare allowed",isAllowedToVote(age));
// console.log("Value of isAllowedToVote",isAllowedToVote);


// var age =12;

//  var isAllowedToVote = function (age){
//     return age>=18;
// } 

//note --> you canot call an undefined function its undefimed as stored in the var ok <--.

// console.log("Value of isAllowedToVote",isAllowedToVote);


// function MYFUN(NUM1){

//     return 1 + 2 + 3 + NUM1;

// }

// console.log(MYFUN("balu"))


// let f = ["apple","mango","baluda","chuthada"];

// function print(element){
//     console.log(element);
// }

// f.forEach(print);


// function merafun(undharfunction){
//     return undharfunction()+40;
// }

// function cartoon(){
//     return 10;
// }

// console.log(merafun(cartoon));


// const result_of_forEach =f.forEach(function (){
//    return(p1);
// });

// console.log(result_of_forEach);

// console.log(f.forEach(function (p1){
//    return(p1);
// }));


// const result_of_forEach = f.forEach(function (xzy){
//    console.log(xzy);
// });


let f = ["apple","mango","baluda","chuthada","p"];



//  const lol= function (f){
//     const r = [];
//     for(let i=0;i < f.length;i++){
//         r.push(f[i]);
//     }

//         return r;

    
// }

// console.log("lk",lol(f))




// let f1 = ["apple","mango","baluda","chuthada"];

// const lols = function (arr) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//     }
// }

// lols(f1);


// const lol = function (f){
//     let result = [];

//     for(let i=0;i < f.length;i++){
//         result.push(f[i]);
//     }

//     return result;
// }

// console.log(lol(f));

// f.forEach((xyz)=> console.log(xyz))

// function forEach(kyakarnahai){
//     let result = [];
//     for (let i=0;i<f.length;i++){
//         result.push(kyakarnahai[i])
//        return result;
//     }
// }

// console.log(forEach(f));


// function test(arr){
//     for(let i = 0; i < arr.length; i++){
//         console.log(arr[i]);
//     }
//             return arr;

// }

// test([1,2,3]);


// function test(arr){
//     for(let i = 0; i < arr.length; i++){
//         for(let j = 0; j < arr.length; j++){
            
//             return arr[j];
//         }
//     }
// }

// console.log(test([1,2,3]));


// const arrs = [1,2,3]

//   const lool = arrs.map((x) => x * 3);

//   console.log(lool);

// arrs.forEach(x => console.log(x));
 

const nums = [1,2,3,4,5,6];

const result = nums.map((e)=> e * 3);

console.log(result);

//internally this happens in the maps ok //
function map(fn){
    const result = [];

    for(let i=0;i<nums.length;i++){
       const currentElement = nums[i];
       const num = fn(currentElement);
       result.push(num);
    }

    return result;
}
