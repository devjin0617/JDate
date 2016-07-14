"use strict";

var assert = require("assert");
var JDate = require('../index');


describe('test to JDate', function() {
    describe('init', function() {
        it('init with empty', function() {
            var date = JDate.init();
            assert.equal('[object Date]', Object.prototype.toString.call(date));
        });

        it('init with date', function() {
            var date = JDate.init(new Date());
            assert.equal('[object Date]', Object.prototype.toString.call(date));
        });

        it('init with dateString', function() {
            var dateString = JDate.init('2016-01-01');
            assert.equal('[object String]', Object.prototype.toString.call(dateString));
        });
    });

    describe('test to toDateString', function() {

        it('date to string', function() {
            var date = new Date();

            assert.equal(date, new Date(JDate.init(date).toDateString()));
        });

    });
});

//console.log(JDate.init().toDateString());