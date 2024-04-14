'use strict';
// 1

var zipcode = {
  checkZipcode: function () {
    console.log(this);
    function updateZipCode() {
      console.log(this);
    }
    updateZipCode.call(this);
  },
};
// zipcode.checkZipcode();

// 2
var zipcode2 = {
  checkZipcode2: function () {
    console.log(this);
    var updateZipCode = function () {
      console.log(this);
    }.bind(this);
    updateZipCode();
  },
};
// zipcode2.checkZipcode2();

// 3
var person = {
  name: 'Jack',
  prop: {
    name: 'Daniel',
    getName: function () {
      return this.name;
    },
  },
};

var personName = person.prop.getName.bind(person);
// console.log(personName());

var personName2 = person.prop.getName();
// console.log(personName2);

// 4
