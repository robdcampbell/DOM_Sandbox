

function generation(x, y) {

  const m = {
    "-3": "great grandfather",
    "-2": "grandfather",
    "-1": "father",
    "0": "me!",
    "1": "son",
    "2": "grandson",
    "3": "great grandson" 
  }

  const f = {
    "-3": "great grandmother",
    "-2": "grandmother",
    "-1": "mother",
    "0": "me!",
    "1": "daughter",
    "2": "granddaughter", 
    "3": "great granddaughter" 
  }

  let gender;
  y === 'f' ? gender = f : gender = m; 

  
  return gender[x.toString()];

}

console.log(generation(-3,'f'))


// Create a function that returns an array of strings sorted by length in ascending order.

function sortByLength(arr) {
	return arr.length === 0 ? [] : arr.sort((a,b)=>(a.length)-(b.length));
}