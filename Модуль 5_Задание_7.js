let arr=[12,20,15,'Hi',33,46,71,null,'@']
console.log(arr.length)
let amountEven = 0;
let amountOdd = 0;
let amountOther = 0;
for (let i = 0; i < arr.length; i++){
    if ((arr[i] === 0) || (typeof(arr[i]) != 'number')) {
        amountOther++;
    }
    else if (arr[i] % 2 === 0) {
            amountEven++;
        }
    else {
            amountOdd++;
        }
    }

console.log("Even is " + amountEven);
console.log("Odd is " + amountOdd);
console.log("Other is " + amountOther);