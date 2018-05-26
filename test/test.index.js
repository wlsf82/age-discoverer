const test = require("tape");

const calculateAproximateAgeBasedOnYearOfBorn = require("../index");
const testHelper = require("./helper");

test("returns my approximate age when I provide the year I born", t => {
    const yearOfBorn = 1982;
    const expectedAge = testHelper.calculateAproximateAgeBasedOnYearOfBorn(yearOfBorn);
    const discoveredAge = calculateAproximateAgeBasedOnYearOfBorn(yearOfBorn);

    t.plan(1);
    t.equal(discoveredAge, expectedAge);
});

test("returns my wive's approximate age when I provide her year of born", t => {
    const yearOfBorn = 1985;
    const expectedAge = testHelper.calculateAproximateAgeBasedOnYearOfBorn(yearOfBorn);
    const discoveredAge = calculateAproximateAgeBasedOnYearOfBorn(yearOfBorn);

    t.plan(1);
    t.equal(discoveredAge, expectedAge);
});

test("returns zero when providing one year in the future", t => {
    const oneYearInTheFuture = testHelper.calculateXYearsInTheFuture(1);
    const expectedAge = 0;
    const discoveredAge = calculateAproximateAgeBasedOnYearOfBorn(oneYearInTheFuture);

    t.plan(1);
    t.equal(discoveredAge, expectedAge);
});

test("returns zero when providing a hundred years in the future", t => {
    const hundredYearsInTheFuture = testHelper.calculateXYearsInTheFuture(100);
    const expectedAge = 0;
    const discoveredAge = calculateAproximateAgeBasedOnYearOfBorn(hundredYearsInTheFuture);

    t.plan(1);

    t.equal(discoveredAge, expectedAge);
});

test("returns correct age when providing year of born as string", t => {
    const yearOfBorn = "1981";
    const expectedAge = testHelper.calculateAproximateAgeBasedOnYearOfBorn(yearOfBorn);
    const discoveredAge = calculateAproximateAgeBasedOnYearOfBorn(yearOfBorn);

    t.plan(1);
    t.equal(discoveredAge, expectedAge);
});

test("returns zero when not providing a year of born", t => {
    const expectedAge = 0;
    const discoveredAge = calculateAproximateAgeBasedOnYearOfBorn();

    t.plan(1);
    t.equal(discoveredAge, expectedAge);
});

test("returns zero when providing an invalid year of born (e.g. NaN)", t => {
    const expectedAge = 0;
    const discoveredAge = calculateAproximateAgeBasedOnYearOfBorn("foobar");

    t.plan(1);
    t.equal(discoveredAge, expectedAge);
});

test("returns correct age even when a negative year is provided", t => {
    const yearOfBorn = -100;
    const expectedAge = testHelper.calculateAproximateAgeBasedOnYearOfBorn(yearOfBorn);
    const discoveredAge = calculateAproximateAgeBasedOnYearOfBorn(yearOfBorn);

    t.plan(1);
    t.equal(discoveredAge, expectedAge);
});

test("returns zero when providing the same year as the current year", t => {
    const currentYear = testHelper.getCurrentYear();
    const expectedAge = 0;
    const discoveredAge = calculateAproximateAgeBasedOnYearOfBorn(currentYear);

    t.plan(1);
    t.equal(discoveredAge, expectedAge);
});
