
// HIGHER ORDER FUNCTIONS

//Written the original way
  /*
  function subtract(num1){
      return function(num2){
        return num1-num2;
      }
    }
  */
 
// Using arrow functions 
    /*
      const subtract = (num1) => {
        return (num2) =>{
          return num1*num2;
        }
      }
    */

    // One line arrow function:
  const subtract = (num1)=> (num2)=> num1-num2;


const num1 = subtract(6)
console.log(num1(10));


