// ededler massivi daxilində olan ədədləri ayrı massiv halına gətirib ekrana çap elətdirən metod yazın
let arr = [1, 3, 5, 6, undefined, null, true, false, {}, 34, 'FrontEndMasters', 'BackEndMAsters'];
let newArr = [];
for (let a = 0; a< arr.length; a++) {
    if (typeof(arr[a])=="number") {
        newArr += arr[a] + " ";
    }
}

console.log(newArr)