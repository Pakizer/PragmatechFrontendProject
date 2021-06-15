//Dəyərin tipini rəqəmə çevirərək əldə olunan nəticənin 2 qatını ekrana yazdırın.Tip çevirmə uğursuz alınarsa ona uyğun olaraq error mesajı çap elətdirin
let n = window.prompt("Enter count")

n = Number(n);
let a = 2 * n;

if (isNaN(a)) {
    alert("Enter number!")
} else {
    alert(2*n)
}