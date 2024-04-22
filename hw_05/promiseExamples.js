// 1
let promiseTwo = new Promise((resolve, reject) => {
  resolve('a');
});

promiseTwo
  .then((res) => {
    return res + 'b';
  })
  .then((res) => {
    return res + 'с';
  })
  .finally((res) => {
    return res + '!!!!!!!';
  })
  .catch((res) => {
    return res + 'd';
  })
  .then((res) => {
    console.log(res);
  });

//expected output "abc"

// 2
function doSmth() {
  return Promise.resolve('123');
}

doSmth()
  .then(function (a) {
    console.log('1', a); //
    return a;
  })
  .then(function (b) {
    console.log('2', b);
    return Promise.reject('321');
  })
  .catch(function (err) {
    console.log('3', err);
  })
  .then(function (c) {
    console.log('4', c);
    return c;
  });

// expected output 1 123 2123 3 321 4 undefined
