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
# returns zero when providing a year in the future
ok 3 should be equal
# returns correct age when providing a year as string
ok 4 should be equal
# returns zero when not providing a year
ok 5 should be equal
# returns zero when providing an invalid year (e.g. NaN)
ok 6 should be equal
# returns correct age even when a negative year is provided
ok 7 should be equal
# returns zero when providing same year as current year
ok 8 should be equal

1..8
# tests 8
# pass  8

# ok
```
___

Made with love by Walmyr Filho
