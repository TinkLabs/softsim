var handler = require('./handler');

var callback = function (status, message) {
  console.log(status);
  console.log(message);
}

var dummyA, dummyB;
handler.index(dummyA, dummyB, callback);
