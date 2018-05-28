# age-discoverer
simple es6 project to exercise tdd

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
# returns the exact age based on date of birth - year of born ago current year and month of born ahead the current month
ok 11 should be equal
# returns the exact age based on date of birth - year of born ago current year and month of born ago the current month
ok 12 should be equal
# returns the exact age based on date of birth - year of born ago current year, month of born equals to the current month and day of born ahead current day
ok 13 should be equal
# returns the exact age based on date of birth - year of born ago current year, month of born equals to the current month and day of born ago current day
ok 14 should be equal
# returns the exact age based on date of birth - birth day
ok 15 should be equal
# returns zero when providing an invalid date of birth
ok 16 should be equal
# returns zero when providing the the date of birth as the current date
ok 17 should be equal
# returns zero when not providing a date of birth
ok 18 should be equal

1..18
# tests 18
# pass  18

# ok
```
___

Made with 💚 by [Walmyr Filho](http://walmyr-filho.com)
