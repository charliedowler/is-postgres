'use strict';
var exec = require('child_process').exec;
var Q = require('q');
module.exports = function (callback) {
  var deferred = Q.defer();
  exec('pg_ctl -D /usr/local/var/postgres status', function (err, stdout, stderr) {
    var result = {
      type: 'postgres',
      running: (err || /no server running/i.test(stdout)) ? false : true
    };
    if (callback) callback(result);
    deferred.resolve(result);
  });
  return deferred.promise;
};