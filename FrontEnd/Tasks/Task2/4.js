//ededler massivinin tək yerdə duran elementlərinin dəyərlərini cüt yerdə duran elementlərlə dəyişdirin
let arr = [1, 3, 5, 6, undefined, null, true, false, {}, 34, 'FrontEndMasters', 'BackEndMAsters'];
let newArr = [];
let n = [];
let t;
for (let i = 0; i < arr.length - 1; i += 2) {
    let j = i + 1;
    t = arr[i];
    arr[i] = arr[j];
    arr[j] = t;
    newArr += " " + String(arr[i]) + " " + String(arr[j]);

}
console.log(newArr);