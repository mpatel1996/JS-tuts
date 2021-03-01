// function myfunc(){
   
//    console.log("object");

//    return function() {
//       console.log("function return");
//    };

// }

// console.log("return from myfunc: " , myfunc());

// let result = myfunc();
// console.log(result()); // making it result() makes it only return the function part of the return


/**************
 * var means it will be global scope even inside a if-switch-while loops 
 * 
 * var stuff = 100
 * 
 * if ( 20 < stuff) 
 * { var lower = "yes" } JS will make the lower global, unless we do let inside of the if loop. 
 * 
 ****************/


//  function myFu(){
//     var a = 100;
//  }

//  myFu()
//  console.log(a); // throws error because var a is scooped variable 

// alert([[10,2040],[20,203023]]) // outputs 10,2040,20,203023 


/*var myNum = 42

 var n1 = (++myNum) + (myNum++)
 var n2 = (myNum++) + (++myNum)

 console.log(n1, n2); // n1 = 86 , n2 = 90 */ 
 