const Students= [
    {Surname: "Masimli", name: "Pakizar", birthday: 1998},
    {Surname: "Karimov", name: "Aysel", birthday: 1992},
    {Surname: "Sadiqzade", name: "Royal", birthday: 1999},
    {Surname: "Karimov", name: "Samir", birthday: 1979},
    {Surname: "Masimli", name: "Aysel", birthday: 1997},
    {Surname: "Sadiqzade", name: "Nuray", birthday: 1996},
    {Surname: "Mirzayeva", name: "Jale", birthday: 2001},
    {Surname: "Karimov ", name: "Oguz", birthday: 2008}
  ];
  
const ages = [23,29,20,42,24,25,20,13];
  
// for(let i = 0; i < Students.length; i++) {
//   console.log(Students[i]);
// }

// //  forEach

// Students.forEach(function(student) {
//   console.log(student);
// });


// Students.forEach(function(student) {
//     console.log(student.Surname);
//   });

// filter

// Get 20 and older

// let yas = [];
// for(let i = 0; i < ages.length; i++) {
//   if(ages[i] >= 21) {
//     yas.push(ages[i]);
//   }
// }

// const yas = ages.filter(function(age) {
//   if(age >= 20) {
//     return true;
//   }
// });

// const yas = ages.filter(age => age >= 23);
// console.log(yas)

// Filter samesurname

// const surnameStudent = Students.filter(function(student) {
//   if(Student.surname === 'Karimov') {
//     return true;
//   }
// });

// const sname = Students.filter(student => student.Surname === 'Karimov');
// console.log(sname)

// map

// Create array of Students names

// const studentName = Students.map(function(student) {
//   return student.name;
// });
// console.log(studentName)

// const ageMap = ages.map(age => age * 2);

// console.log(ageMap)

// sort

// Sort ages
// const sortAges = ages.sort((a, b) => a - b);

// console.log(sortAges);

// let ageSum = 0;
// for(let i = 0; i < ages.length; i++) {
//   ageSum += ages[i];
// }

// const ageSum = ages.reduce(function(total, age) {
//   return total + age;
// }, 0);

// const ageSum = ages.reduce((total, age) => total + age, 0);

// console.log(ageSum)

// Combine Methods

// const combined = ages
//   .map(age => age * 2)
//   .filter(age => age >= 40)
//   .sort((a, b) => a - b)
//   .reduce((a, b) => a + b, 0);

// console.log(combined);