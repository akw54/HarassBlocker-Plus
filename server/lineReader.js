var fs = require('fs');

function readLines(input, callback) {
  var remaining = '';

  input.on('data', function(data) {
    remaining += data;
    var index = remaining.indexOf('\n');
    while (index > -1) {
      var line = remaining.substring(0, index);
      remaining = remaining.substring(index + 1);
      callback(line);
      index = remaining.indexOf('\n');
    }
  });

  input.on('end', function() {
    if (remaining.length > 0) {
      callback(remaining);
    }
  });
};

module.exports = function (fileName, callback) {
    var input = fs.createReadStream(fileName);
    readLines(input, callback);
};