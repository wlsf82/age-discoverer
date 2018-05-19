const test = require("tape");

const AgeDiscover = require("../index");

test("returns my approximate age when I provide the year I born", t => {
    const ageDiscoverer = new AgeDiscover();

    const discoveredAge = ageDiscoverer.findAgeByBornDate(1982);
    const myAge = 36

    t.plan(1);

    t.equal(discoveredAge, myAge);
});

test("returns my wive's approximate age when I provide her born date", t => {
    const ageDiscoverer = new AgeDiscover();

    const discoveredAge = ageDiscoverer.findAgeByBornDate(1985);
    const ageOfMyWive = 33

    t.plan(1);

    t.equal(discoveredAge, ageOfMyWive);
});

test("returns zero when providing a year in the future", t => {
    const ageDiscoverer = new AgeDiscover();

    const discoveredAge = ageDiscoverer.findAgeByBornDate(2100);
    const expectedAge = 0;

    t.plan(1);

    t.equal(discoveredAge, expectedAge);
});

test("returns correct age when providing a year as string", t => {
    const ageDiscoverer = new AgeDiscover();

    const discoveredAge = ageDiscoverer.findAgeByBornDate("1981");
    const expectedAge = 37;

    t.plan(1);

    t.equal(discoveredAge, expectedAge);
});

test("returns zero when not providing a year", t => {
    const ageDiscoverer = new AgeDiscover();

    const discoveredAge = ageDiscoverer.findAgeByBornDate();
    const expectedAge = 0;

    t.plan(1);

    t.equal(discoveredAge, expectedAge);
});

test("returns zero when providing an invalid year", t => {
    const ageDiscoverer = new AgeDiscover();

    const discoveredAge = ageDiscoverer.findAgeByBornDate("foobar");
    const expectedAge = 0;

    t.plan(1);

    t.equal(discoveredAge, expectedAge);
});

test("returns correct age even when a negative year is provided", t => {
    const ageDiscoverer = new AgeDiscover();

    const discoveredAge = ageDiscoverer.findAgeByBornDate(-100);
    const expectedAge = 2118;

    t.plan(1);

    t.equal(discoveredAge, expectedAge);
});
