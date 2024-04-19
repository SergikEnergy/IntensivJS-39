/* Создать объект Person несколькими способами, после создать объект Person2, чтобы в нём были доступны методы объекта Person. Добавить метод logInfo чтоб он был доступен всем объектам. */

class Person {
  constructor(name, lastName, address) {
    this.name = name;
    this.lastName = lastName;
    this.address = address;
  }
}

const person1 = new Person('Ivan', 'Ivanov', 'Moskau');

const person2 = {
  name: 'Vasya',
  lastName: 'Vasilev',
  address: 'Brest',
};

const person3 = Object.create(person2);

const person4 = { name: 'Igor' };
