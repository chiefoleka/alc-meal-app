// truthy test
const expect = require('chai').expect;

describe('true', function() {
  context('without arguments', function() {
    it('should return true', function() {
        expect(true).to.equal(true)
    })
  })
});