var assert = require("chai").assert;

function add(arr) {
  return arr.reduce((a, b) => a + b, 0);
}

// Dymanic Test Generation for
describe("add()", function() {
  var tests = [
    { args: [1, 2], expected: 3 },
    { args: [1, 2, 3], expected: 6 },
    { args: [1, 2, 3, 4], expected: 10 }
  ];

  tests.forEach(function(test) {
    it("correctly adds " + test.args.length + " args", function() {
      var res = add(test.args);
      assert.equal(res, test.expected);
    });
  });
});
