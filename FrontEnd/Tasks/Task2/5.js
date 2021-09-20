//ededler massivi daxilində olan string tiplərini daxilində neçə sait və samit olduğunu ekrana çap elətdirən metod yazın

let arr = [1, 3, 5, 6, undefined, null, true, false, {}, 34, 'FrontEndMasters', 'BackEndMAsters'];

let sait = ['a', 'i', 'o', 'u', 'e'];

let newArr = [];
for (let i = 0; i < arr.length; i++) {
    if (typeof(arr[i]) === 'string') {
        newArr += arr[i];
    }
}

let count = 0;
for (let k = 0; k < newArr.length; k++) {
    for (let j = 0; j < sait.length; j++) {
        if (newArr[k] === sait[j] || newArr[k] === sait[j].toUpperCase()) {
            count++;
        }
    }
}
let samit = newArr.length - count;

console.log("Saitlerin sayi:" + count);
console.log("Samitlerin sayi:" + samit);