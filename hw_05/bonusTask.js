/* 
Необходимо реализовать функцию fetchUrl, которая будет использоваться следующим образом.
Внутри fetchUrl можно использовать условный метод fetch, который просто возвращает
Promise с содержимым страницы или вызывает reject 
fetchUrl('https://google/com&#39;)
.then(...)
.catch(...) // сatch должен сработать только после 5 неудачных попыток
получить содержимое страницы внутри fetchUrl

*/

const realURL = 'https://dummyjson.com/products?limit=10';
const fakeURL = 'https://google/com&#39';

const fetchUrl = (url) => {
  let count = 0;
  return new Promise((res, rej) => {
    const dummyFetch = async () => {
      try {
        const data = await fetch(url);
        if (data && data.ok) {
          console.log(`Data from ${url} was getting after ${count}th attempts`);
          count++;
          data.json().then((result) => res(result));
        }
      } catch (err) {
        console.log(err);
        if (count < 5) {
          count++;
          console.log(`It's the ${count}th attempt to get data from ${url}`);
          dummyFetch();
        } else {
          err.message = `rejected after ${count}th attempts`;
          rej(err);
        }
      }
    };

    dummyFetch();
  });
};

fetchUrl(realURL)
  .then((result) => {
    console.log(`data from url --> ${result}`);
  })
  .catch((err) => {
    console.log('rejected with: ', err.message);
  });
