//ededler massivinin bütün elementlərini tiplərini edede çevirin. Tip çevirmə uğurlu alınıbsa əldə olunan nəticələri ayrı massiv olaraq çap elətdirin
let arr = [1, 3, 5, 6, undefined, null, true, false, {}, 34, 'FrontEndMasters', 'BackEndMAsters'];
let newArr = [];
for (let i = 0; i < arr.length; i++) {
    let elem = Number(arr[i]);
    if (isNaN(elem)) {
        continue;
    }
    newArr += elem + " ";
}

console.log(newArr)