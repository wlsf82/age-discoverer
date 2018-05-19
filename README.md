# age-discoverer
simple es6 project to exercise unit testing with mocha

## Installation

Run `npm test` to install the dev devDependencies

## Tests

Run `npm test` to run the unit tests.

### Test results

If everything is ok you should see a test result like this:

```
TAP version 13
# returns my approximate age when I provide the year I born
ok 1 should be equal
# returns my wive's approximate age when I provide her born date
ok 2 should be equal
# returns zero when providing a year in the future
ok 3 should be equal
# returns correct age when providing a year as string
ok 4 should be equal
# returns zero when not providing a year
ok 5 should be equal
# returns zero when providing an invalid year
ok 6 should be equal

1..6
# tests 6
# pass  6

# ok
```
