const test = require("tape");

const AgeDiscoverer = require("../index");
const ageDiscoverer = new AgeDiscoverer();

const testHelper = require("./helper");

// calculateAproximateAgeBasedOnYearOfBorn()
test("returns my approximate age when I provide the year I born", t => {
    const yearOfBorn = 1982;
    const expectedAge = testHelper.calculateAproximateAgeBasedOnYearOfBorn(yearOfBorn);
    const discoveredAge = ageDiscoverer.calculateAproximateAgeBasedOnYearOfBorn(yearOfBorn);

    t.plan(1);
    t.equal(discoveredAge, expectedAge);
});

test("returns my wive's approximate age when I provide her year of born", t => {
    const yearOfBorn = 1985;
    const expectedAge = testHelper.calculateAproximateAgeBasedOnYearOfBorn(yearOfBorn);
    const discoveredAge = ageDiscoverer.calculateAproximateAgeBasedOnYearOfBorn(yearOfBorn);

    t.plan(1);
    t.equal(discoveredAge, expectedAge);
});

test("returns zero when providing one year in the future", t => {
    const oneYearInTheFuture = testHelper.calculateXYearsInTheFutureBasedOnCurrentYear(1);
    const expectedAge = 0;
    const discoveredAge = ageDiscoverer.calculateAproximateAgeBasedOnYearOfBorn(oneYearInTheFuture);

    t.plan(1);
    t.equal(discoveredAge, expectedAge);
});

test("returns zero when providing a hundred years in the future", t => {
    const hundredYearsInTheFuture = testHelper.calculateXYearsInTheFutureBasedOnCurrentYear(100);
    const expectedAge = 0;
    const discoveredAge = ageDiscoverer.calculateAproximateAgeBasedOnYearOfBorn(hundredYearsInTheFuture);

    t.plan(1);

    t.equal(discoveredAge, expectedAge);
});

test("returns correct age when providing year of born as string", t => {
    const yearOfBorn = "1981";
    const expectedAge = testHelper.calculateAproximateAgeBasedOnYearOfBorn(yearOfBorn);
    const discoveredAge = ageDiscoverer.calculateAproximateAgeBasedOnYearOfBorn(yearOfBorn);

    t.plan(1);
    t.equal(discoveredAge, expectedAge);
});

test("returns zero when not providing a year of born", t => {
    const expectedAge = 0;
    const discoveredAge = ageDiscoverer.calculateAproximateAgeBasedOnYearOfBorn();

    t.plan(1);
    t.equal(discoveredAge, expectedAge);
});

test("returns zero when providing an invalid year of born (e.g. NaN)", t => {
    const expectedAge = 0;
    const discoveredAge = ageDiscoverer.calculateAproximateAgeBasedOnYearOfBorn("foobar");

    t.plan(1);
    t.equal(discoveredAge, expectedAge);
});

test("returns correct age even when a negative year is provided", t => {
    const yearOfBorn = -100;
    const expectedAge = testHelper.calculateAproximateAgeBasedOnYearOfBorn(yearOfBorn);
    const discoveredAge = ageDiscoverer.calculateAproximateAgeBasedOnYearOfBorn(yearOfBorn);

    t.plan(1);
    t.equal(discoveredAge, expectedAge);
});

test("returns zero when providing the same year as the current year", t => {
    const currentYear = testHelper.getCurrentYear();
    const expectedAge = 0;
    const discoveredAge = ageDiscoverer.calculateAproximateAgeBasedOnYearOfBorn(currentYear);

    t.plan(1);
    t.equal(discoveredAge, expectedAge);
});

// calculateAgeBasedOnDateOfBirth()
test("returns zero when providing a date of birth one day in the future", t => {
    const birthDate = testHelper.calculateDateOfBirthOneDayInTheFuture();
    const expectedAge = 0;
    const discoveredAge = ageDiscoverer.calculateAgeBasedOnDateOfBirth(birthDate);

    t.plan(1);
    t.equal(discoveredAge, expectedAge);
});

test("returns the exact age based on date of birth - year of born ago current year and month of born ahead the current month", t => {
    const birthDate = new Date("1982-11-20");
    const expectedAge = 35;
    const discoveredAge = ageDiscoverer.calculateAgeBasedOnDateOfBirth(birthDate);

    t.plan(1);
    t.equal(discoveredAge, expectedAge);
});

test("returns the exact age based on date of birth - year of born ago current year and month of born ago the current month", t => {
    const birthDate = new Date("1982-04-20");
    const expectedAge = 36;
    const discoveredAge = ageDiscoverer.calculateAgeBasedOnDateOfBirth(birthDate);

    t.plan(1);
    t.equal(discoveredAge, expectedAge);
});

test("returns the exact age based on date of birth - year of born ago current year, month of born equals the current month and day of born ahead current day", t => {
    const birthDate = new Date("1982-05-30");
    const expectedAge = 35;
    const discoveredAge = ageDiscoverer.calculateAgeBasedOnDateOfBirth(birthDate);

    t.plan(1);
    t.equal(discoveredAge, expectedAge);
});

test("returns the exact age based on date of birth - year of born ago current year, month of born equals the current month and day of born ago current day", t => {
    const birthDate = new Date("1982-05-01");
    const expectedAge = 36;
    const discoveredAge = ageDiscoverer.calculateAgeBasedOnDateOfBirth(birthDate);

    t.plan(1);
    t.equal(discoveredAge, expectedAge);
});

test("returns the exact age based on date of birth - birth day", t => {
    const birthDate = new Date("1982-05-28");
    const expectedResult = "Happy birthday! Today you are completing 36 years old.";
    const actualResult = ageDiscoverer.calculateAgeBasedOnDateOfBirth(birthDate);

    t.plan(1);
    t.equal(actualResult, expectedResult);
});

test("returns zero when providing an invalid date of birth", t => {
    const birthDate = new Date("foobarbaz");
    const expectedAge = 0;
    const discoveredAge = ageDiscoverer.calculateAgeBasedOnDateOfBirth(birthDate);

    t.plan(1);
    t.equal(discoveredAge, expectedAge);
});

test("returns zero when providing the the date of birth as the current date", t => {
    const birthDate = new Date();
    const expectedAge = 0;
    const discoveredAge = ageDiscoverer.calculateAgeBasedOnDateOfBirth(birthDate);

    t.plan(1);
    t.equal(discoveredAge, expectedAge);
});

test("returns zero when not providing a date of birth", t => {
    const expectedAge = 0;
    const discoveredAge = ageDiscoverer.calculateAgeBasedOnDateOfBirth();

    t.plan(1);
    t.equal(discoveredAge, expectedAge);
});
