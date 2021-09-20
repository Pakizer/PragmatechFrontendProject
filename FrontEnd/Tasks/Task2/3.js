// ededler massivinin daxilində eyni tipli olan məlumatları ayrı ayrı massivlər şəklinə gətirən metod yazın

let arr = [1, 3, 5, 6, undefined, null, true, false, {}, 34, 'FrontEndMasters', 'BackEndMAsters'];
let str = [];
let nums = [];
let boolean = [];
let obj = [];
let undef = [];
let nl = [];
for (let i = 0; i < arr.length; i++) {
    if (typeof(arr[i]) == 'string') {
        str += arr[i];
    } else if (typeof(arr[i]) == 'number') {
        nums += arr[i];
    } else if (typeof(arr[i]) == 'boolean') {
        boolean += arr[i];

    } else if (typeof(arr[i]) == 'undefined') {
        undef += arr[i];
    } else {
        obj += arr[i];
    }
}

console.log(str);
console.log(nums);
console.log(boolean);
console.log(obj);
console.log(undef);