// 1
var func1 = function () {
  console.log(this);
}.bind(1);

// console.log(func1());

// 2
var func2 = function () {
  console.log(this);
}.bind(1);

var obj = {
  callFun: func2,
};
// console.log(obj.callFun.func2());

// 3
function checkFun(a, b, c) {
  console.log(this);
  console.log(a);
  console.log(b);
  console.log(c);
}

// console.log(checkFun.call(1,2,3,4));

// 4
function checkFun2(a, b, c) {
  console.log(this);
  console.log(a);
  console.log(b);
  console.log(c);
}
// console.log(checkFun2.apply(1,[2,3,4]));

// 5
function sumOfNumbers() {
  var total = 0;
  for (var i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}
var sum = sumOfNumbers(1, 2, 3);
// console.log(sum);

// 6
function sumOfNumbers2() {
  var total = 0;
  for (var i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}
var sum = sumOfNumbers2.call(null, 1, 2, 3);
// console.log(sum);

// 7
function sumOfNumbers3() {
  var total = 0;
  for (var i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}
var numbers = [1, 2, 3];
var sum = sumOfNumbers3.apply(null, numbers);
// console.log(sum);

// 8
function updateZipCode() {
  console.log(this);
}
// updateZipCode.call(1);

// 9
var updateZipCode2 = function () {
  console.log(this);
};
// updateZipCode2.call({});

// 10
var updateZipCode3 = function () {
  console.log(this);
};
// updateZipCode3.call({ zip: '11787'});

// 11
var updateZipCode4 = function () {
  console.log(this);
};
var zipCode = {
  zip: '11787',
};
// updateZipCode4.call(zipCode);

// 12
var updateZipCode5 = function (newZip, country) {
  console.log(newZip + ' ' + country);
};
var zipCode = {
  zip: '11787',
};
// updateZipCode5.call(zipCode, '11888', 'us');

// 13
var updateZipCode6 = function (newZip, country) {
  console.log(newZip + ' ' + country);
};
var zipCode = {
  zip: '11787',
};
// updateZipCode6.apply(zipCode, ['11888', 'us']);

// 14
const obj2 = {
  x: 'yandex',
  a: function f() {
    console.log(this.x);
  },
  b: () => {
    console.log(this.x);
  },
};

// obj2.a();
// obj2.b();
