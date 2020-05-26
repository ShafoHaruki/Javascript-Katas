//RETURN AN ARRAY WHERE THERE ARE NO DUPLICATE OF NUMBERS
let array = [1,5,9,3,7,1,5]
let b = []
for (let i=0; len = array.length, i<len; i++){
      //indexOf returns -1 if not found
    if(b.indexOf(array[i]) === -1){
        b.push(array[i])
    }
}
console.log(b.sort()) //outputs [ 1, 3, 5, 7, 9 ]

//RETURN AN ARRAY WHERE THERE ARE NO DUPLICATE OF NUMBERS  (PRO ANSWER)
let array1 = [1,3,5,7,3,5,3,7,3,6,3,2,1]
let obj = {}
for (let i of array1){
    obj[i] = true
}
let b =  Object.keys(obj)
console.log(b) //outputs [ '1', '2', '3', '5', '6', '7' ]

//RETURN AN ARRAY WHERE THERE ARE NO DUPLICATE OF NUMBERS (MORE PRO ANSWER)
let array = [3,5,9,3,6,5,4,7,1,4,5]
let uniqueValueSortedArray = [... new Set(array)].sort()
console.log(uniqueValueSortedArray) //outputs [1, 3, 4, 5,6, 7, 9] 