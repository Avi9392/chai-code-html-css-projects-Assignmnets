 // case when you use the var an declear the varible (see the output of this code)
 //gess the output of this code
 
//  age=45;

    // console.log(`value of the age ${age} is Allowed ${isAllowedToVote(age)}`);

    // var age = 12;
    
    // var isAllowedToVote = function(age){
    //     return age>=18;
    // }

// see the output of this code ok jsut we changed the "var" to the /"const"/ ok see how exicution context work differently      
 //gess the output of this code

// age=45;

//     console.log(`value of the age ${age} is Allowed ${isAllowedToVote(age)}`);

//     const age = 12;
    
//     function isAllowedToVote(age){
//         return age>=18;
//     }

// uncommit this above code an see before uncommit this commit all rest code ok //

//->>tell the output of this code  
// 

// console.log(`value of the age ${age} is Allowed ${isAllowedToVote(age)}`);

//     var age = 12;
    
//     var isAllowedToVote = function(age){
//         return age>=18;
//     }

    const g = {
        l:"rust",
        id:1234,
        babu:{
            kupa:"simple",
            roker:234
        },
        royal:{
            lula:"kola",
            roll_no:400
        }
    }

    const inta = {...g}

        console.log("spread",inta);

    const ints = structuredClone(g);

    console.log("structuredcolne",ints);