# age-discoverer
simple es6 project to exercise tdd

## Available methods

This sample project has simple Javascript functions for **calculating the approximate age based on day of birth**, **calculating the age based on the exact birth date** and **cheering on birthday and birth date**.

## Pre-requirements

[NodeJS](https://nodejs.org/) and NPM are required to run this project.

> When installing NodeJS NPM is automatically installed, but it may need to be updated.

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
# returns my approximate age when I provide the year I born
ok 1 should be equal
# returns my wive's approximate age when I provide her year of born
ok 2 should be equal
# returns zero when providing one year in the future
ok 3 should be equal
# returns zero when providing a hundred years in the future
ok 4 should be equal
# returns correct age when providing year of born as string
ok 5 should be equal
# returns zero when not providing a year of born
ok 6 should be equal
# returns zero when providing an invalid year of born (e.g. NaN)
ok 7 should be equal
# returns correct age even when a negative year is provided
ok 8 should be equal
# returns zero when providing the same year as the current year
ok 9 should be equal
# returns zero when providing a date of birth X day(s) in the future
ok 10 should be equal
# returns the exact age based on date of birth - year of born past from current year and month of born ahead the current month
ok 11 should be equal
# returns the exact age based on date of birth - year of born past from current year and month of born previously from the current month
ok 12 should be equal
# returns the exact age based on date of birth - year of born past from current year, month of born equals to the current month and day of born ahead from current day
ok 13 should be equal
# returns the exact age based on date of birth - year of born past from current year, month of born equals to the current month and day of born previously from the current day
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
Statements   : 100% ( 40/40 )
Branches     : 100% ( 32/32 )
Functions    : 100% ( 5/5 )
Lines        : 100% ( 29/29 )
================================================================================

1..26
# tests 26
# pass  26

# ok
```

**Note:** after pushes to branch master lint and tests are automatically executed and the build status can be seen below.

[![Build Status](https://semaphoreci.com/api/v1/wlsf82/age-discoverer/branches/master/badge.svg)](https://semaphoreci.com/wlsf82/age-discoverer)
___

Made with 💚 by [Walmyr Filho](http://walmyr-filho.com)
