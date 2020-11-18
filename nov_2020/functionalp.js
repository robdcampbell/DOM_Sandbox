

const user = {
  name: "Kim",
  active: "true",
  cart: [],
  purchases: []
}

const product = {
  productName: "Nutella",
  price:6
}

function purchaseItem(user, item){
  const priceWithTax = item.price*1.03;
  const addItemToCart= user.cart.push()

  console.log(`${user.name} is purchasing ${item.productName} for $${priceWithTax} dollars.`)
}

// Implement a cart feature: 
// 1. Add items to cart.
// 2. Add 3% tax item to cart
// 3. Buy item: cart --> purchases 
// 4. Empty cart

//purchaseItem(user, product);


const arr1 = [1,2,3]

function modifyArray(arr){
  // Copy array to not mutate it.
  const newArr = [...arr];
  // or const newArr = [].concat(arr);
  newArr.pop();
  return newArr;
}

const arr2 = modifyArray(arr1);

//console.log(arr1);
//console.log(arr2);


//  Currying _ _ _ _ _ _ _ _ _ _ _ _ _ _ 
    // Currying separates the different parameters into different function calls like this: 
    const multiply = (a)=>(b)=> a*b;


  //console.log(multiply(5)(2));
  
  //By currying, we are able to make our function more flexible/reusable based on its operation.

  const multiplyBy5 = multiply(5);
  // console.log(multiplyBy5(2));
  // console.log(multiplyBy5(4));

//  Partial Application _ _ _ _ _ _ _ _ _ _ _ _ _ _ 
  // The process of producing a function with smaller number of parameters.
  const multiplyNums = (a,b,c) => a*b*c;
  const partialMultiply =  multiplyNums.bind(null, 5);
    // This inserts the 5 to the first parameter of the bound function.
  partialMultiply(4,5); // return 5 * 4 * 5;

//  Memoization  _ _ _ _ _ _ _ _ _ _ _ _ _ _ 
    // Storing/caching the result of a function to improve efficeincy. 

    // Its best to store the cache within the function as shown here, using closures:

  function memoizedAddTo80(n){
    let cache = {};
    return function(n){
      if(n in cache){
        return cache[n];
      } else {
        console.log('A long process');
        cache[n] = n+80;
        return cache[n];
      }
    }
  }

    const memoized = memoizedAddTo80();
    console.log(memoized(5));
    console.log(memoized(5));


