function telebe(name,surname,age) {
    const obj = {};
    obj.name = name;
    obj.surname = surname;
    obj.age = age;
    obj.greeting = function() {
      alert('Telebe ' + obj.name + obj.surname + 'Yas' + obj.age +'.');
    };
    return obj;
  }

  const Aytac = telebe('Aytac');
  Aytac.name;
  Aytac.greeting();  