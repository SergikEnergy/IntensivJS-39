function logger() {
  console.log(`I output only external context: ${this.item}`);
}

const obj = { item: 'some value' };

const logger2 = logger.bind(obj);
logger2();
// or
// const logger2 = logger.bind(obj)();

const logger3 = logger.call(obj);

const logger4 = logger.apply(obj);
