let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(`The First promise has resolved`);
    resolve(10);
  }, 1 * 1000);
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(`The Second promise has resolved`);
    resolve(20);
  }, 2 * 1000);
});
let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(`The Third promise has resolved`);
    resolve(30);
  }, 3 * 1000);
});

var total = 0;
Promise.all([p1, p2, p3])
  .then((result) => {
    for (var i in result) {
      total += result[i];
    }
    console.log(`Result: ${result}`);
    console.log(`Total: ${total}`);
  })
  .catch((error) => {
    console.log(`Error: ${error}`);
  });
