
// PILLARS OF JS: exploring Closures and prototypes 




    // but first...
        // HIGHER ORDER FUNCTIONS - a function that returns another function 
            /*
              Although they seem 'Trickier' at first, they provide a greater flexibility syntax (and are thus powerful).
            */

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
            /*
            const subtract = (num1)=> (num2)=> num1-num2;

            const num1 = subtract(6)
            console.log(num1(10));
            */

// CLOSURES : advantages: don't pollute the global scope, create private variables

/* 
      Memory Efficient 


      Encapsulation 

*/

//Encapsulation 
  // example 1
      /*
      let view;
      function initialize(){
        if(view !== -1){
          console.log('view has be set!!!')
          view = -1;
        }
      }

      initialize();
      initialize();
      initialize();
      console.log(view);
      */
  
  // Example 2

  // const array = [1,2,3,4];
  // for (let i = 0; i <array.length; i++){
  //   setTimeout(()=> {
  //     console.log(`I am at index ${i}`)
  //   },1000)
  // }



  // OOP.
      /*
        const dragon = {
          name: 'Tanya',
          fire: true,
          fight(){
            return 5;
          },
          sing(){
            if(this.fire){
              return `I am ${this.name}, breather of fire.`;
            } else {
              return `No fire for you ${this.name}!`;
            }
          }
        }

        const lizard = {
          name: 'Kiki',
          fight(){
            return 1;
          }
        }
      */

  // Using Bind, to inherit the sing method (from Dragon) to lizard.
    // const lizardSing = dragon.sing.bind(lizard);
    // console.log(lizardSing());
  
  // Using prototypal inheritance:
    // Everything will be inherited unless specifically overwritten in the inheriting object
    // !!!! Warning, this next code is just an example, do not use in production! 
     
      // lizard.__proto__ = dragon;
   /*
    for (let prop in lizard) {
      // Will only show the properties this object has defined, not inherited.
      if(lizard.hasOwnProperty(prop)){
        console.log(prop);
      }
    }

    console.log(dragon.isPrototypeOf(lizard));
  
  */

  /*
      Date.prototype.lastYear = function(){
        return this.getFullYear() - 1;
      }
      console.log(Date.prototype);

      console.log(new Date('1900-10-10').getFullYear());
      console.log(new Date('1900-10-10').lastYear());
  */

  // 11_12- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


  // Object Lieral 
    /*
    const elf = {
        name: 'Orwell',
        weapon: 'bow',
        attack(){
          return `Attack with a ${this.weapon}`;  
        }
      }

      console.log(elf.attack());
    */
   
  // Constructor Function 
      // A good start, but you don't want to keep instantiating the method.
  
      /*
      function Elf(name, weapon){
        return{
          name:name, 
          weapon: weapon, 
          attack(){
            return `${this.name} attacks with ${this.weapon}!`;
          }
        }
      }

      const burtReynolds = new Elf("Burt Reyonlds", "Pterodactyl");

      console.log(burtReynolds.name);
      console.log(burtReynolds.attack());
      */
    
    // Classes 
      // Character example
      /*

      class Character{
        constructor(name, weapon){
          this.name = name, 
          this.weapon = weapon
        }
        attack(){
          return `${this.name} attacks with ${this.weapon}!`;
        }
      }

      class Elf extends Character{
        constructor(name, weapon, age){
            super(name, weapon);
            this.age = age;
        }

      }

      const balthazar = new Elf('Balthazar Imotep', 'a bunch of snakes')
      console.log(balthazar.attack());
      */

      