function myPromise() {
    const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
    let num = Math.floor(Math.random() * 100) + 1;
    if (num % 2 === 0) {
        resolve({value: num});
        } else {
        reject({ value: num});
        }}, 3000);
        });
      
    promise
      .then((result) => {
          console.log(`Завершено успешно. Сгенерированное число — ${result.value}`);
             })
      .catch((error) => {
            console.log(`Завершено с ошибкой. Сгенерированное число — ${error.value}`);
           });
      }
       myPromise();