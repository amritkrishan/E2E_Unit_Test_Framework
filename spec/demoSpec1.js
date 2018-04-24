'use strict'

var normalize  = require(protractor.basePath+'/js/normalize.js').N;

describe("Integration & Unit Tests", function () {
    beforeEach(function() {
    spyOn(normalize, 'normalizePersonalDetails').and.callThrough();
    spyOn(normalize, 'normalizeAddressDetails').and.callThrough();
    });
    it('should have a title', function() {
    browser.get('http://juliemr.github.io/protractor-demo/');
    expect(browser.getTitle()).toEqual('Super Calculator');
    });
    it("accepts employee 1 personal details", function () {
        var json = '{"Name": "Amrit", "PersonalIdentifier": null}';
        var norm = normalize.normalizePersonalDetails(json);
        expect(normalize.normalizePersonalDetails).toHaveBeenCalledTimes(1);
        expect(norm.name).toEqual("Amrit");
        expect(norm.id).toBeNull()
        expect(normalize.normalizePersonalDetails).toHaveBeenCalledWith(json);
    });
    it("accepts employee 1 address details", function () {
        var json = '{"Address": "Purva Sunshine", "City": "Bengaluru"}';
        var norm = normalize.normalizeAddressDetails(json);
        expect(norm.address).toEqual("Purva Sunshine");
        expect(norm.city).toEqual("Bengaluru");
        expect(normalize.normalizeAddressDetails).toHaveBeenCalledWith(json);
        expect(normalize.normalizeAddressDetails.calls.argsFor(0)).toEqual([json]);
        expect(normalize.normalizeAddressDetails).toHaveBeenCalledTimes(1);
    });
});