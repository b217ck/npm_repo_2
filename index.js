const myAwesomeArray = ["a", "b", "c", "d", "e"]

console.log(myAwesomeArray.some(test => test === "d"))
//-------> Output : true


const myAwesomeArray2 = [1, 2, 3, 4, 5]

console.log(myAwesomeArray2.reduce((total, value) => total * value))
// 1 * 2 * 3 * 4 * 5
//-------> Output = 120

const myAwesomeArray3 = ["a", "b", "c", "d", "e"]

console.log(myAwesomeArray3.every(test => test === "d"))
//-------> Output : false

const myAwesomeArray4 = ["a", "a", "a", "a", "a"]

console.log(myAwesomeArray4.every(test => test === "a"))
//-------> Output : true

console.log('Job is done');
