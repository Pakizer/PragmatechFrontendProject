// arr=[1,4,56,23,67,89,145,89,200,35]
// cüt ədədləri tapsın
// tək ədədlər tapsın
// rəqəmlərinin cəmi 10-dan kiçik olanları tapsın
// 2 rəqəmli ədədləri tapsın
arr= [1, 4, 56, 23, 67, 89, 145, 89, 200, 35]
OddEvenNumbers = []
twoDigitNumbers = []
let result

function FindOddEven(arr, OddOrEven, number) {

    for (i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === OddOrEven) {
            result = arr.filter((num1, num2) => num1 + num2 < number)
            OddEvenNumbers.push(arr[i])
              
        }
    }
    for (let c = 0; c < arr.length; c++) {
        arr[c] = String(arr[c]);
        if (arr[c].length === 2) {
            twoDigitNumbers.push(Number(arr[c]));
        }
    }
    console.log("Cüt ədədlər: " + OddEvenNumbers)
    console.log("İki rəqəmli ədədlər : " + twoDigitNumbers)
    return "Rəqəmləri cəmi 10-dan kiçik olan ədədlər : " + result
      
}