/*global describe, it, define, expect */
'use strict';
define(function() {
    describe('mocha sanity check', function () {
        it('should run the tests', function () {
            expect(true).to.equal(true);
        });
    });

    return 'working as intended';
});
