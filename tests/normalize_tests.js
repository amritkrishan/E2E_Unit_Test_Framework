describe("normalizeData", function () {

    it("accepts employee 1 data", function () {
        var json = '{"Name": "Maria", "PersonalIdentifier": 2111858}';
        var norm = normalizeData(json);
        expect(norm.name).toEqual("Maria");
        expect(norm.id).toEqual(2111858);
    });

    it("accepts employee 2 data", function () {
        var json = '{"Name": "Amrit"}';
        var norm = normalizeData(json);
        expect(norm.name).toEqual("Amrit");
        expect(norm.id).toBeUndefined();
    });

    it("accepts employee 3 data", function () {
        var json = '{"Name": "Amrit", "PersonalIdentifier": null}';
        var norm = normalizeData(json);
        expect(norm.name).toEqual("Amrit");
        expect(norm.id).toBeNull();
    });
});