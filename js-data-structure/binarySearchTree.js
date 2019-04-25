function func1(cb) {

  setTimeout(function () {
    console.log(1);
    cb();
  }, 400)

}


function func2(cb) {
  setTimeout(function () {
    console.log(2)
    cb();
  }, 300)
}

function func3(cb) {

  setTimeout(function () {
    console.log(3)
    cb();
  }, 100)

}

function func4(cb) {

  setTimeout(function () {
    console.log(4)
    cb();
  }, 50)

}

queue([func1, func2, func3, func4], 2) // 2 1 3


function queue(list, count) {
  let i = 0;
  const callback = () => {
    if (list.length) {
      const nextFunc = list.shift();
      nextFunc(callback);
    }
  }
  while (list.length > 0 && i < count) {
    const nextFunc = list.shift();
    nextFunc(callback);
    i++;
  }
}