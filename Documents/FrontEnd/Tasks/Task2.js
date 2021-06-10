//Dəyərin boş olub olmadığını yoxlayan metod yazın.
let item = document.querySelector(".item");

let n = window.prompt("Enter anything")

if (n == "" || n == " ") {
    alert("enter anything!")
} else {
    item.innerHTML = n;
}