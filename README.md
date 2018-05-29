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

## Tests

Run `npm test` to execute the unit tests.

### Test results

If everything is ok you should see a test result like this:

```
$ npm test

> agediscoverer@1.0.0 test /Users/Walmyr/ageDiscoverer
> node test/test.index.js

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

1..26
# tests 26
# pass  26

# ok
```
___

Made with 💚 by [Walmyr Filho](http://walmyr-filho.com)
