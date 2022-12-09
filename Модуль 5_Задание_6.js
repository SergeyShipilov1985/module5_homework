let arr = [22,'aa',22,25,22,27,22]
console.log(arr.length)
let theSame = true;
for (let i = 0; i < arr.length - 1; i++){
    for (let k = i + 1; k < arr.length; k++){
        if (typeof(arr[i]) !== typeof(arr[k])){
            theSame = false;
        }
    }
}
if (theSame) {
    console.log("array is the same");
} else {
    console.log("array is not the same");
}
