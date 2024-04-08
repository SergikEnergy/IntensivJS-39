const promise = new Promise((res, rej) => {
  const controller = new AbortController();
  const eventAbort = controller.signal;

  const timer = setTimeout(() => {
    console.log('timeout 2 worked');
    res('resolved directly');
  }, 5000);

  setTimeout(() => {
    console.log('timeout worked');
    controller.abort();
  }, 2000);

  eventAbort.addEventListener('abort', () => {
    console.log('cancel signal');
    clearInterval(timer);
    rej('error');
  });
});

promise
  .then((data) => {
    console.log('resolved');
    console.log(data);
  })
  .catch((err) => {
    if (err.name === 'AbortController') {
      console.log('cancelled');
    } else {
      console.log('error other occurred');
    }
  });

/*
const reinitController = () => {
  controller = new AbortController();
};
Нужен для переназначения контроллера - чтобы отменять управляемо, а не все сразу
*/
