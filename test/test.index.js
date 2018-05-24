const test = require("tape");

const AgeDiscover = require("../index");

const helper = require("./helper");

const ageDiscoverer = new AgeDiscover();

test("returns my approximate age when I provide the year I born", t => {
    const yearOfBorn = 1982;
    const expectedAge = helper.calculateAgeBaseOnYearOfBorn(yearOfBorn);
    const discoveredAge = ageDiscoverer.findApproximateAgeByYearOfBorn(yearOfBorn);

    t.plan(1);

    t.equal(discoveredAge, expectedAge);
});

test("returns my wive's approximate age when I provide her year of born", t => {
    const yearOfBorn = 1985;
    const expectedAge = helper.calculateAgeBaseOnYearOfBorn(yearOfBorn);
    const discoveredAge = ageDiscoverer.findApproximateAgeByYearOfBorn(yearOfBorn);

    t.plan(1);

    t.equal(discoveredAge, expectedAge);
});

test("returns zero when providing a year in the future", t => {
    const OneYearInTheFuture = helper.calculateOneYearInTheFuture();
    const expectedAge = 0;
    const discoveredAge = ageDiscoverer.findApproximateAgeByYearOfBorn(OneYearInTheFuture);

    t.plan(1);

    t.equal(discoveredAge, expectedAge);
});

test("returns correct age when providing a year as string", t => {
    const yearOfBorn = "1981";
    const expectedAge = helper.calculateAgeBaseOnYearOfBorn(yearOfBorn);
    const discoveredAge = ageDiscoverer.findApproximateAgeByYearOfBorn(yearOfBorn);

    t.plan(1);

    t.equal(discoveredAge, expectedAge);
});

test("returns zero when not providing a year", t => {
    const discoveredAge = ageDiscoverer.findApproximateAgeByYearOfBorn();
    const expectedAge = 0;

    t.plan(1);

    t.equal(discoveredAge, expectedAge);
});

test("returns zero when providing an invalid year (e.g. NaN)", t => {
    const discoveredAge = ageDiscoverer.findApproximateAgeByYearOfBorn("foobar");
    const expectedAge = 0;

    t.plan(1);

    t.equal(discoveredAge, expectedAge);
});

test("returns correct age even when a negative year is provided", t => {
    const yearOfBorn = -100;
    const expectedAge = helper.calculateAgeBaseOnYearOfBorn(yearOfBorn);
    const discoveredAge = ageDiscoverer.findApproximateAgeByYearOfBorn(yearOfBorn);

    t.plan(1);

    t.equal(discoveredAge, expectedAge);
});

test("returns zero when providing same year as current year", t => {
    const currentYear = helper.getCurrentYear();
    const discoveredAge = ageDiscoverer.findApproximateAgeByYearOfBorn(currentYear);
    const expectedAge = 0;

    t.plan(1);

    t.equal(discoveredAge, expectedAge);
});
