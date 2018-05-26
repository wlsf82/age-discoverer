# age-discoverer
simple es6 project to exercise tdd

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

1..9
# tests 9
# pass  9

# ok
```
___

Made with 💚 by Walmyr Filho
