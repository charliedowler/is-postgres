'use strict';
var assert = require('assert');
var exec = require('child_process').exec;
var isMysql = require('../index');

it('Should recognise postgres is running - promise', function(done) {
  isMysql().then(function(db) {
    assert.equal(db.running, true);
    assert.equal(db.type, 'postgres');
    done();
  });
});
it('Should recognise postgres is running - callback', function(done) {
  isMysql(function(db) {
    assert.equal(db.running, true);
    assert.equal(db.type, 'postgres');
    done();
  });
});
it('Should return running when run from bash', function(done) {
  exec('node ./bin/is-postgres', function(err, stdout, stderr) {
    assert.equal(/Up/.test(stdout), true);
    done();
  });
});