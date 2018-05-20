// These tests were created in the year of 2018.
// In case you see this code in the future (after 2018), you'll need to update the expected results
// according to the current year.

const test = require("tape");

const AgeDiscover = require("../index");

test("returns my approximate age when I provide the year I born", t => {
    const ageDiscoverer = new AgeDiscover();

    const discoveredAge = ageDiscoverer.findApproximateAgeByYearOfBorn(1982);
    const myAge = 36

    t.plan(1);

    t.equal(discoveredAge, myAge);
});

test("returns my wive's approximate age when I provide her year of born", t => {
    const ageDiscoverer = new AgeDiscover();

    const discoveredAge = ageDiscoverer.findApproximateAgeByYearOfBorn(1985);
    const ageOfMyWive = 33

    t.plan(1);

    t.equal(discoveredAge, ageOfMyWive);
});

test("returns zero when providing a year in the future", t => {
    const ageDiscoverer = new AgeDiscover();

    const discoveredAge = ageDiscoverer.findApproximateAgeByYearOfBorn(2100);
    const expectedAge = 0;

    t.plan(1);

    t.equal(discoveredAge, expectedAge);
});

test("returns correct age when providing a year as string", t => {
    const ageDiscoverer = new AgeDiscover();

    const discoveredAge = ageDiscoverer.findApproximateAgeByYearOfBorn("1981");
    const expectedAge = 37;

    t.plan(1);

    t.equal(discoveredAge, expectedAge);
});

test("returns zero when not providing a year", t => {
    const ageDiscoverer = new AgeDiscover();

    const discoveredAge = ageDiscoverer.findApproximateAgeByYearOfBorn();
    const expectedAge = 0;

    t.plan(1);

    t.equal(discoveredAge, expectedAge);
});

test("returns zero when providing an invalid year (e.g. NaN)", t => {
    const ageDiscoverer = new AgeDiscover();

    const discoveredAge = ageDiscoverer.findApproximateAgeByYearOfBorn("foobar");
    const expectedAge = 0;

    t.plan(1);

    t.equal(discoveredAge, expectedAge);
});

test("returns correct age even when a negative year is provided", t => {
    const ageDiscoverer = new AgeDiscover();

    const discoveredAge = ageDiscoverer.findApproximateAgeByYearOfBorn(-100);
    const expectedAge = 2118;

    t.plan(1);

    t.equal(discoveredAge, expectedAge);
});

test("returns zero when providing same year as current year", t => {
    const ageDiscoverer = new AgeDiscover();

    const discoveredAge = ageDiscoverer.findApproximateAgeByYearOfBorn(2018);
    const expectedAge = 0;

    t.plan(1);

    t.equal(discoveredAge, expectedAge);
});
