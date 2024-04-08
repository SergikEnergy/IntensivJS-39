const promise = new Promise((res) => {
  setTimeout(() => {
    console.log('timeout 2 worked');
    controller.abort();
    res('resolved directly');
  }, 2000);
});

const controller = new AbortController();
const eventAbort = controller.signal;

setTimeout(() => {
  console.log('timeout worked');
  promise
    .then(() => {
      console.log('resolved');
    })
    .catch((err) => {
      if (err.name === 'AbortController') {
        console.log('cancelled');
      } else {
        console.log('error other occurred');
      }
    });
}, 5000);

eventAbort.addEventListener('abort', () => {
  console.log('cancel signal');
});

/*
const reinitController = () => {
  controller = new AbortController();
};
Нужен для переназначения контроллера - чтобы отменять управляемо, а не все сразу
*/
