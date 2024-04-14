//implementation with call
function myBind(ctx, ...args) {
  const foo = this;
  //console.log(this); //- this is an object before dot - our target function
  return function () {
    //console.log(this); // here this is our parent context window or global or undefined with 'use strict' - or function ctx - when we called it inside function
    foo.call(ctx, ...args);
  };
}

Function.prototype.myBind = myBind;

function logger() {
  console.log(`I output only external context: ${this.item}`);
}

const obj = { item: 'some value' };

const logger2 = logger.myBind(obj)();
