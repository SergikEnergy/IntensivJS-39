//boolean
const falseValue = false; //directly
const trueValue = true;

const trueValue2 = Boolean('some true variable');
const falseValue2 = Boolean(null);
// the same
const trueValue3 = !!'some true variable';
const falseValue3 = !!0;

//string
const str1 = 'Hello';
const str2 = 'Hello' + 'world' + '!';
const str3 = `${str1}+world`;
const str4 = `Multiline
string
occured`;
const str5 = String(5);

//number
const numInt = 5;
const infinity = 5 / 0;
const numFloat = 4.3;
const numExp = 4.3e8;
const maxPositiveNumber = Number.MAX_VALUE;
const negative = -56e8;

//null
const noValue = null;
const notExistingHTML = document.querySelector('#non-exist-id');

//undefined
const nothing = undefined;
let undef2;
const createUndefined = () => {
  console.log('no returned value');
};
const undef3 = createUndefined();

//bigInt
const bigNum1 = 23n;
const bigNum2 = BigInt(23);

//symbol
const symbol1 = Symbol(23);
const symbol2 = Symbol('string');
const symbol3 = Symbol('string');
symbol2 != symbol3; //true
const globalSymbol = Symbol.for('secret'); //create new Symbol
const globalSymbol2 = Symbol.for('secret'); //return the same value - because key='secret' declared
globalSymbol === globalSymbol2; //true

//solutions of tasks
const res = 'B' + 'a' + (1 - 'hello');
// 'BaNaN'

const res2 = (true && 3) + 'd';
// '3d'

const res3 = Boolean(true && 3) + 'd';
// 'trued'
