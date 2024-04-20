/* Создать объект Person несколькими способами, после создать объект Person2, чтобы в нём были доступны методы объекта Person. Добавить метод logInfo чтоб он был доступен всем объектам. */

class Person {
  constructor(name, lastName, address) {
    this.name = name;
    this.lastName = lastName;
    this.address = address;
  }
  logInfo() {
    console.log(`user - ${this.name} is in ${this.address}`);
  }
}

const person1 = new Person('Ivan', 'Ivanov', 'Moskau');
person1.logInfo = function () {
  console.log(`user - ${this.lastName} ${this.name}`);
};

const person2 = {
  name: 'Vasya',
  lastName: 'Vasilev',
  address: 'Brest',
};

const person3 = Object.create(person2, {
  name: {
    value: 'Nikita',
    enumerable: true,
    configurable: false,
    writable: true,
  },
});
console.log(person3.name);
// person3.logInfo(); //error - not set prototype person 2 from person1 - method logInfo not exist

Object.setPrototypeOf(person2, person1);
person2.logInfo();
person3.logInfo();

class Person2 extends Person {
  constructor(name, lastName, address) {
    super(name, lastName, address);
  }
}

const personNext = new Person2('Petya', 'Petrov', 'Gomel');
person1.logInfo();
personNext.logInfo();

class PersonThree extends Person {
  constructor(name, lastName, address) {
    super(name, lastName, address);
    // А МОЖНО ЛИ ВЫЗВАТЬ С ДРУГОЙ ОЧЕРЕДНОСТЬЮ СВОЙСТВА??
  }

  get name() {
    return this.name;
  }

  set name(newName) {
    this.name = newName;
  }
}
