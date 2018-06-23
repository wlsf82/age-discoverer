# age-discoverer
simple es6 project to exercise tdd

## Available methods

This sample project has simple Javascript functions for **calculating the approximate age based on the year of birth**, **calculating the exact age based on the birth date** and **cheering on birthday and birth date**.

## Pre-requirements

[NodeJS](https://nodejs.org/) and NPM are required to run this project.

> When installing NodeJS NPM is automatically installed.

> This project was tested with NodeJS version 8.11.2 and NPM version 6.1.0

## Installation

Run `npm install` to install the dev dependencies

## Lint

Run `npm run lint` to check for code style issues.

**Note:** in case of lint issues that can be automatically fixed, run `npm run lint:fix` to get them automatically fixed.

## Tests

Run `npm test` to execute the unit tests.

> Code coverage is executed together with unit tests.

### Test results

If everything is ok you should see a test result like this:

```
$ npm test

> agediscoverer@1.0.0 test /Users/Walmyr/www/ageDiscoverer
> istanbul cover test/test.index.js

TAP version 13
# returns my approximate age when I provide my year of birth
ok 1 should be equal
# returns my wive's approximate age when I provide her year of birth
ok 2 should be equal
# returns zero when providing one year in the future
ok 3 should be equal
# returns zero when providing a hundred years in the future
ok 4 should be equal
# returns correct age when providing year of birth as string
ok 5 should be equal
# returns zero when not providing a year of birth
ok 6 should be equal
# returns zero when providing an invalid year of birth (e.g. NaN)
ok 7 should be equal
# returns correct age even when a negative year is provided
ok 8 should be equal
# returns zero when providing the same year as the current year
ok 9 should be equal
# returns zero when providing a date of birth X day(s) in the future
ok 10 should be equal
# returns the exact age based on date of birth - year of birth past from current year and month of birth ahead of current month
ok 11 should be equal
# returns the exact age based on date of birth - year of birth past from current year and month of birth previously from the current month
ok 12 should be equal
# returns the exact age based on date of birth - year of birth past from current year, month of birth equals to the current month and day of birth ahead of current day
ok 13 should be equal
# returns the exact age based on date of birth - year of birth past from current year, month of birth equals to the current month and day of birth previously from the current day
ok 14 should be equal
# returns the exact age based on date of birth - birthday
ok 15 should be equal
# returns zero when providing an invalid date of birth
ok 16 should be equal
# returns zero when providing the the date of birth as the current date
ok 17 should be equal
# returns zero when not providing a date of birth
ok 18 should be equal
# returns zero when providing an invalid date of birth (e.g. `const birthDate = new Date('foobarbaz')`)
ok 19 should be equal
# greets on birthday
ok 20 should be equal
# greets on birth date
ok 21 should be equal
# returns undefined when providing birth date X years in the future
ok 22 should be equal
# returns undefined when providing birth date X days in the future
ok 23 should be equal
# returns undefined when providing birth date X months in the future
ok 24 should be equal
# returns undefined when not providing birth date
ok 25 should be equal
# returns undefined when providing invalid birth date (e.g. `const birthDate = new Date('foobar')`)
ok 26 should be equal
=============================================================================
Writing coverage object [/Users/Walmyr/www/ageDiscoverer/coverage/coverage.json]
Writing coverage reports at [/Users/Walmyr/www/ageDiscoverer/coverage]
=============================================================================

=============================== Coverage summary ===============================
Statements   : 100% ( 43/43 )
Branches     : 100% ( 32/32 )
Functions    : 100% ( 6/6 )
Lines        : 100% ( 31/31 )
================================================================================

1..26
# tests 26
# pass  26

# ok
```

**Note:** after pushes to the master branch, lint and tests are automatically executed and the build status can be seen below.

[![Build Status](https://semaphoreci.com/api/v1/wlsf82/age-discoverer/branches/master/badge.svg)](https://semaphoreci.com/wlsf82/age-discoverer)

#### Disclaimer

If tests are executed in any day of January (e.g., 2018-01-16), in the last day of any month (e.g., 2018-06-30) or in the last month of the year (e.g., 2018-12-20), all tests will still pass, but code coverage will not be 100%. This happens due to test helpers that calculate test dates to not depend on hardcoded values, but for example, if a test is executed in December and it needs to test the path of a date one year ago but next month, instead of testing a date in the previous year, the test would be going through the path of the current year, because when summing one month to December we go to January of next year.

## Code quality

Below you can see the status of this project on Sonar Cloud.

![Project Status](https://sonarcloud.io/api/project_badges/measure?project=age-discoverer&metric=alert_status)

> SonarCloud evaluates code in terms of bugs, vulnerabilities, code smells, test coverage, and duplications.

The complete dashboard can be seen [here](https://sonarcloud.io/dashboard?id=age-discoverer).
___

Made with 💚 by [Walmyr Filho](http://walmyr-filho.com)
