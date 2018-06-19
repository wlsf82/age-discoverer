const test = require("tape");

const AgeDiscoverer = require("../index");
const ageDiscoverer = new AgeDiscoverer();

const testHelper = require("./helper");

// calculateAproximateAgeBasedOnYearOfBirth()
test("returns my approximate age when I provide my year of birth", t => {
    const yearOfBirth = 1982;
    const expectedAge = testHelper.calculateAproximateAgeBasedOnYearOfBirth(yearOfBirth);
    const discoveredAge = ageDiscoverer.calculateAproximateAgeBasedOnYearOfBirth(yearOfBirth);

    t.plan(1);
    t.equal(discoveredAge, expectedAge);
});

test("returns my wive's approximate age when I provide her year of birth", t => {
    const yearOfBirth = 1985;
    const expectedAge = testHelper.calculateAproximateAgeBasedOnYearOfBirth(yearOfBirth);
    const discoveredAge = ageDiscoverer.calculateAproximateAgeBasedOnYearOfBirth(yearOfBirth);

    t.plan(1);
    t.equal(discoveredAge, expectedAge);
});

test("returns zero when providing one year in the future", t => {
    const oneYearInTheFuture = testHelper.calculateXYearsInTheFutureBasedOnCurrentYear(1);
    const expectedAge = 0;
    const discoveredAge = ageDiscoverer.calculateAproximateAgeBasedOnYearOfBirth(oneYearInTheFuture);

    t.plan(1);
    t.equal(discoveredAge, expectedAge);
});

test("returns zero when providing a hundred years in the future", t => {
    const hundredYearsInTheFuture = testHelper.calculateXYearsInTheFutureBasedOnCurrentYear(100);
    const expectedAge = 0;
    const discoveredAge = ageDiscoverer.calculateAproximateAgeBasedOnYearOfBirth(hundredYearsInTheFuture);

    t.plan(1);

    t.equal(discoveredAge, expectedAge);
});

test("returns correct age when providing year of birth as string", t => {
    const yearOfBirth = "1981";
    const expectedAge = testHelper.calculateAproximateAgeBasedOnYearOfBirth(yearOfBirth);
    const discoveredAge = ageDiscoverer.calculateAproximateAgeBasedOnYearOfBirth(yearOfBirth);

    t.plan(1);
    t.equal(discoveredAge, expectedAge);
});

test("returns zero when not providing a year of birth", t => {
    const expectedAge = 0;
    const discoveredAge = ageDiscoverer.calculateAproximateAgeBasedOnYearOfBirth();

    t.plan(1);
    t.equal(discoveredAge, expectedAge);
});

test("returns zero when providing an invalid year of birth (e.g. NaN)", t => {
    const expectedAge = 0;
    const discoveredAge = ageDiscoverer.calculateAproximateAgeBasedOnYearOfBirth("foobar");

    t.plan(1);
    t.equal(discoveredAge, expectedAge);
});

test("returns correct age even when a negative year is provided", t => {
    const yearOfBirth = -100;
    const expectedAge = testHelper.calculateAproximateAgeBasedOnYearOfBirth(yearOfBirth);
    const discoveredAge = ageDiscoverer.calculateAproximateAgeBasedOnYearOfBirth(yearOfBirth);

    t.plan(1);
    t.equal(discoveredAge, expectedAge);
});

test("returns zero when providing the same year as the current year", t => {
    const currentYear = testHelper.getCurrentYear();
    const expectedAge = 0;
    const discoveredAge = ageDiscoverer.calculateAproximateAgeBasedOnYearOfBirth(currentYear);

    t.plan(1);
    t.equal(discoveredAge, expectedAge);
});

// calculateAgeBasedOnDateOfBirth()
test("returns zero when providing a date of birth X day(s) in the future", t => {
    const birthDate = testHelper.calculateDateOfBirthXDaysInTheFuture(15);
    const expectedAge = 0;
    const discoveredAge = ageDiscoverer.calculateAgeBasedOnDateOfBirth(birthDate);

    t.plan(1);
    t.equal(discoveredAge, expectedAge);
});

test("returns the exact age based on date of birth - year of birth past from current year and month of birth ahead of current month", t => {
    const yearsAgo = 1;
    const birthDate = testHelper.calculateDateOfBirthXYearsAgoButNextMonth(yearsAgo);
    const expectedAge = yearsAgo - 1;
    const discoveredAge = ageDiscoverer.calculateAgeBasedOnDateOfBirth(birthDate);

    t.plan(1);
    t.equal(discoveredAge, expectedAge);
});

test("returns the exact age based on date of birth - year of birth past from current year and month of birth previously from the current month", t => {
    const yearsAgo = 1;
    const birthDate = testHelper.calculateDateOfBirthXYearsAgoAndOneMonthAgo(yearsAgo);
    const expectedAge = yearsAgo;
    const discoveredAge = ageDiscoverer.calculateAgeBasedOnDateOfBirth(birthDate);

    t.plan(1);
    t.equal(discoveredAge, expectedAge);
});

test("returns the exact age based on date of birth - year of birth past from current year, month of birth equals to the current month and day of birth ahead of current day", t => {
    const yearsAgo = 21;
    const birthDate = testHelper.calculateDateOfBirthXYearsAgoButNextDay(yearsAgo);
    const expectedAge = yearsAgo - 1;
    const discoveredAge = ageDiscoverer.calculateAgeBasedOnDateOfBirth(birthDate);

    t.plan(1);
    t.equal(discoveredAge, expectedAge);
});

test("returns the exact age based on date of birth - year of birth past from current year, month of birth equals to the current month and day of birth previously from the current day", t => {
    const yearsAgo = 30;
    const birthDate = testHelper.calculateDateOfBirthXYearsAgoAndOneDayAgo(yearsAgo);
    const expectedAge = yearsAgo;
    const discoveredAge = ageDiscoverer.calculateAgeBasedOnDateOfBirth(birthDate);

    t.plan(1);
    t.equal(discoveredAge, expectedAge);
});

test("returns the exact age based on date of birth - birthday", t => {
    const yearsAgo = 44;
    const birthDate = testHelper.calculateBirthDateXYearsAgo(yearsAgo);
    const expectedAge = yearsAgo;
    const discoveredAge = ageDiscoverer.calculateAgeBasedOnDateOfBirth(birthDate);

    t.plan(1);
    t.equal(discoveredAge, expectedAge);
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

test("returns zero when providing an invalid date of birth (e.g. `const birthDate = new Date('foobarbaz')`)", t => {
    const birthDate = new Date("foobarbaz");
    const expectedAge = 0;
    const discoveredAge = ageDiscoverer.calculateAgeBasedOnDateOfBirth(birthDate);

    t.plan(1);
    t.equal(discoveredAge, expectedAge);
});

// greetsOnBirthdayOrBirthdate
test("greets on birthday", t => {
    const yearsAgo = 37;
    const birthDate = testHelper.calculateBirthDateXYearsAgo(yearsAgo);
    const expectedGreeting = `Happy birthday! Today you are completing ${yearsAgo} years old.`;
    const actualGreeting = ageDiscoverer.greetsOnBirthdayOrBirthdate(birthDate);

    t.plan(1);
    t.equal(actualGreeting, expectedGreeting);
});

test("greets on birth date", t => {
    const birthDate = testHelper.calculateBirthDateXYearsAgo(0);
    const expectedGreeting = "Welcome to earth!";
    const actualGreeting = ageDiscoverer.greetsOnBirthdayOrBirthdate(birthDate);

    t.plan(1);
    t.equal(actualGreeting, expectedGreeting);
});

test("returns undefined when providing birth date X years in the future", t => {
    const birthDate = testHelper.calculateBirthDateXYearsAhead(10);
    let expectedGreeting;
    const actualGreeting = ageDiscoverer.greetsOnBirthdayOrBirthdate(birthDate);

    t.plan(1);
    t.equal(actualGreeting, expectedGreeting);
});

test("returns undefined when providing birth date X days in the future", t => {
    const birthDate = testHelper.calculateDateOfBirthXDaysInTheFuture(1);
    let expectedGreeting;
    const actualGreeting = ageDiscoverer.greetsOnBirthdayOrBirthdate(birthDate);

    t.plan(1);
    t.equal(actualGreeting, expectedGreeting);
});

test("returns undefined when providing birth date X months in the future", t => {
    const birthDate = testHelper.calculateDateOfBirthXMonthsInTheFuture(1);
    let expectedGreeting;
    const actualGreeting = ageDiscoverer.greetsOnBirthdayOrBirthdate(birthDate);

    t.plan(1);
    t.equal(actualGreeting, expectedGreeting);
});

test("returns undefined when not providing birth date", t => {
    let expectedGreeting;
    const actualGreeting = ageDiscoverer.greetsOnBirthdayOrBirthdate();

    t.plan(1);
    t.equal(actualGreeting, expectedGreeting);
});

test("returns undefined when providing invalid birth date (e.g. `const birthDate = new Date('foobar')`)", t => {
    const birthDate = new Date("foobar");
    let expectedGreeting;
    const actualGreeting = ageDiscoverer.greetsOnBirthdayOrBirthdate(birthDate);

    t.plan(1);
    t.equal(actualGreeting, expectedGreeting);
});
