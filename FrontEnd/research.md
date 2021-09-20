<!-- OOP in Js -->

“Object-oriented programming is a programming paradigm based on the concept of “objects”, which may contain data, in the form of fields, often known as attributes; and code, in the form of procedures, often known as methods.”

Dili Obyektiv yönümlü edən bəzi xüsusiyyətlər və ya mexanizmlər var:

.Object
.Classes
1.Abstraction
2.Encapsulation
3.Inheritance
4.Polymorphism

<!-- Object -->

Object– xususiyyet ve metodlari ehtiva edən unikal bir varlıqdır.Məsələn, “avtomobil” rəng, tip, model, at gücü kimi bəzi xüsusiyyətlərə malik olan və sürücülük kimi müəyyən hərəkətləri həyata keçirən real bir obyektdir. Bir obyektin xüsusiyyətləri, obyekt yönümlü proqramlaşdırmada xususiyyet olaraq adlandırılır və hərəkətlərə metod deyilir.Bir obyekt bir sinifin bir nümunəsidir . Obyektlər JavaScript-də demək olar ki,hər yerdə hər bir funksiya, massiv və sətir bir obyektdir. Qeyd: javascriptdəki metod, dəyəri funksiyası olan bir obyektin xassəsidir. Obyekt JavaScript-də iki yolla yaradıla bilər:

1.Using an Object Literal
2.Using an Object Constructor

<!--  Object Literal  -->

//Defining object
let person = {
first_name:'Pakizar',
last_name: 'Masimli',

    //method
    getFunction : function(){
        return (`The name of the person is
          ${person.first_name} ${person.last_name}`)
    },
    //object within object
    phone_number : {
        mobile:'12345',
        landline:'6789'
    }

}
console.log(person.getFunction());
console.log(person.phone_number.landline);

<!-- Object Constructor -->

//using a constructor
function person(first_name,last_name){
this.first_name = first_name;
this.last_name = last_name;
}
//creating new instances of person object
let person1 = new person('Pakizar','Masimli');
let person2 = new person('Vusala','Masimli');

console.log(person1.first_name);
console.log(`${person2.first_name} ${person2.last_name}`);

<!-- Using Object.create() method: -->

The Object.create() method mövcud obyektdən yeni yaradılan obyektin prototipi kimi istifadə edərək yeni bir obyekt yaradır.

// Object.create() example a
// simple object with some properties
const coder = {
isStudying : false,
printIntroduction : function(){
console.log(`My name is ${this.name}. Am I studying?: ${this.isStudying}.`)
}
}
// Object.create() method
const me = Object.create(coder);

// "name" is a property set on "me", but not on "coder"
me.name = 'Pakizar';

// Inherited properties can be overwritten
me.isStudying = true;

me.printIntroduction();

<!-- Classes -->

Classes-bir obyektin planıdır. Bir class bir çox Obyektə sahib ola bilər, çünki class bir şablondur, Obyekt isə class və ya konkret tətbiqetmə nümunələridir.
Həyata keçirilməyə başlamazdan əvvəl bilməyimiz lazımdır ki, digər OPP dillerden fərqli olaraq JavaScript-də heç bir sinif yoxdur, yalnız Obyektimiz var. Daha dəqiq desək, JavaScript prototip əsaslı obyekt yönümlü bir dildir, yəni konstruktor funksiyasından istifadə edərək davranışları müəyyənləşdirən prototipdən istifadə edərək sinifləri olmadığı mənasını verir.

// Defining class using es6
class Vehicle {
constructor(name, maker, engine) {
this.name = name;
this.maker = maker;
this.engine = engine;
}
getDetails(){
return (`The name of the bike is ${this.name}.`)
}
}
// Making object with the help of the constructor
let bike1 = new Vehicle('Hayabusa', 'Suzuki', '1340cc');
let bike2 = new Vehicle('Ninja', 'Kawasaki', '998cc');

console.log(bike1.name); // Hayabusa
console.log(bike2.maker); // Kawasaki
console.log(bike1.getDetails());

<!-- Traditional Way -->

// Defining class in a Traditional Way.
function Vehicle(name,maker,engine){
this.name = name,
this.maker = maker,
this.engine = engine
};

Vehicle.prototype.getDetails = function(){
console.log('The name of the bike is '+ this.name);
}

let bike1 = new Vehicle('Hayabusa','Suzuki','1340cc');
let bike2 = new Vehicle('Ninja','Kawasaki','998cc');

console.log(bike1.name);
console.log(bike2.maker);
console.log(bike1.getDetails());

Yuxarıdakı nümunədə göründüyü kimi ES6-da obyektin təyin edilməsi və yenidən istifadəsi daha asandır. Buna görə bütün nümunələrimizdə ES6 istifadə edərdik.

<!-- Abstraction --

Abstraksiya obyekt yönümlü proqramlaşdırma (OOP) dillərinin əsas anlayışlarından biridir. Əsas məqsədi istifadəçidən lazımsız detalları gizlədərək mürəkkəbliyi idarə etməkdir. Bu, istifadəçinin bütün gizli mürəkkəbliyi başa düşmədən və hətta düşünmədən təmin edilmiş soyutlamanın üstündə daha mürəkkəb bir məntiq tətbiq etməsini təmin edir.Abstraksiya , tətbiqetmə kontekstindən yeganə vacib xüsusiyyətləri özündə cəmləşdirən, daha mürəkkəb bir real varlığının sadə bir modelinin yaradılması yoludur.
Abstraksiya daxili detalları gizlədərək bir neçə kiçik sistemdə düzəldərək bir sistemin mürəkkəbliyini idarə edir.
Abstraktsiyanın əsas ideyası müxtəlif mürəkkəb məlumat tiplərində real həyat komponentlərini müəyyənləşdirməkdir. Əksər OOP dillərində class açar sözü ilə tətbiq olunur , buna görə əsas anlayış xüsusi bir məlumat növü kimi bir şey ola bilər. Daha dərindən class , metodlarda tətbiq olunan funksionallığı olan konkret bir məlumat strukturunun bir tətbiqidir.Class eyni xüsusiyyətlər siyahısına sahib bir çox obyekt yaratmaq üçün bir şablona bənzəyir, lakin burada fərqli məlumat dəyərləri qeyd olunur.JavaScript açar sözlər of ES2015 dəqiqləşdirilməsi class və extend bizə Java, C #, Python kimi digər proqramlaşdırma dilləri ilə ortaq şəkildə istifadə OOP üçün imkan verir.

// Abstraction example
function person(fname,lname){
let firstname = fname;
let lastname = lname;

    let getDetails_noaccess = function(){
    	return (`First name is: ${firstname} Last
    		name is: ${lastname}`);
    }

    this.getDetails_access = function(){
    	return (`First name is: ${firstname}, Last
    		name is: ${lastname}`);
    }

}
let person1 = new person('Pakizar','Masimli');
console.log(person1.firstname);
console.log(person1.getDetails_noaccess);
console.log(person1.getDetails_access());

Yuxarıda göstərilən nümunədə bəzi xassələrə ( person1.firstname ) və funksiyalara ( person1.getDetails_noaccess ) daxil olmağa çalışırıq, lakin bunlar person obyektindən ( person1.getDetails_access () ) daxil ola biləcəyimiz bir metod olduğu halda undefine qaytarır . bir funksiyanı təyin etmə yolunu dəyişdirərək onun əhatə dairəsini məhdudlaşdıra bilərik.

<!-- Encapsulation  -->

Encapsulation – Property ve function tək bir vahid içərisinə yigilmasina prosesi encapsulation adlanır.

//encapsulation example
class person{
constructor(name,id){
this.name = name;
this.id = id;
}
add_Address(add){
this.add = add;
}
getDetails(){
console.log(`Name is ${this.name},Address is: ${this.add}`);
}
}

let person1 = new person('Pakizar',21);
person1.add_Address('Baku');
person1.getDetails();

Nümunədə sadəcə konstruktordan istifadə edərək bir Person Obyekt yaradırıq və format xassəsini tətbiq edirik.Tətbiq detallarını nəzərə almadan bir obyekt interfeysi ilə işləyirik. Bəzən kapsülləmə , məlumatların və ya məlumatların gizlədilməsinə (Abstraction) aiddir, yəni arxa plan detalını gizlədən əsas xüsusiyyətləri təmsil edir. OOP dillərinin əksəriyyəti bir dəyişənin əhatə dairəsini məhdudlaşdırmaq üçün giriş dəyişdiriciləri təmin edir, lakin bunlar JavaScript-də bu cür giriş dəyişdiriciləri deyildir, lakin dəyişənlərin Class / Obyekt daxilində məhdudlaşdırmağımızın müəyyən bir üsuludur.

<!-- Inheritance -->

Inheritance- Bir obyektin bəzi xassələri və metodlarının başqa bir obyektin istifadə etdiyi bir anlayışdır. Siniflərin sinifləri miras aldığı OOP dillərinin əksəriyyətindən fərqli olaraq, JavaScript obyekt obyektə miras alır, yəni bir obyektin müəyyən xüsusiyyətləri (mülkiyyəti və metodları) digər obyektler tərəfindən yenidən istifadə edilə bilər.

//Inhertiance example
class person{
constructor(name){
this.name = name;
}
//method to return the string
toString(){
return (`Name of person: ${this.name}`);
}
}
class student extends person{
constructor(name,id){
//super keyword to for calling above class constructor
super(name);
this.id = id;
}
toString(){
return (`${super.toString()},Student ID: ${this.id}`);
}
}
let student1 = new student('Pakizar',22);
console.log(student1.toString());

Yuxarıdakı nümunədə müəyyən bir xüsusiyyət və metodla Person Obyektini təyin edirik və sonra Student Obyektindəki Person Obyektini miras alırıq (inherit) və şəxsin Obyektin bütün mülkiyyətini və metodunu istifadə edirik, həmçinin Student üçün müəyyən xüsusiyyət və metodları təyin edirik . Qeyd: Şəxs və Student obyektinin hər ikisi eyni metoda, yəni toString () -ə malikdir, buna Metod Yalnışlığı deyilir Method Overriding, uşaq sinifindəki metodun, ana sinifdəki kimi eyni ad və metod imzasına sahib olmasına imkan verir. Yuxarıda göstərilən kodda dərhal ana sinif nümunəsi dəyişəninə istinad etmək üçün super açar söz istifadə olunur.

<!--  Polymorphism -->

Polimorfizm birdən çox reallaşdırma imkanı olan bir xüsusiyyət, funksiya və ya obyekt yaratma qabiliyyətidir.
Polimorfizm metod və məlumat mənasında ümumi funksionallığı olan sinifləri əvəz etmək qabiliyyətidir. Başqa sözlə, bir çox obyekt növünün fərqli bir şəkildə işləyə bilən, lakin ortaq bir interfeysi dəstəkləyən eyni funksiyanı həyata keçirmə qabiliyyətidir.

example:
class Shape {
area() {
return 0;
}
toString() {
return Object.getPrototypeOf(this).constructor.name;
}
}

class Circle extends Shape {
constructor(r) {
super();
this.radius = r;
}

    area() {
        return Math.PI * this.radius ** 2;
    }

}

class Rectangle extends Shape {
constructor(w, h) {
super();
this.width = w;
this.height = h;
}

    area() {
        return this.width * this.height;
    }

}

class Triangle extends Shape {
constructor(b, h) {
super();
this.base = b;
this.height = h;
}

    area() {
        return this.base * this.height / 2;
    }

}

function cumulateShapes(shapes) {
return shapes.reduce((sum, shape) => {
if (shape instanceof Shape) {
console.log(`Shape: ${shape.toString()} - area: ${shape.area()}`);
return sum + shape.area()
}
throw Error('Bad argument shape.');
}, 0);
}

const shapes = [new Circle(3), new Rectangle(2, 3), new Triangle(3, 4), new Circle(2)];

console.log(cumulateShapes(shapes));
