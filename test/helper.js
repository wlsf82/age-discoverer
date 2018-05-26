const getCurrentYear = function() { return new Date().getFullYear() };
const calculateAproximateAgeBasedOnYearOfBorn = function(yearOfBorn) { return getCurrentYear() - yearOfBorn };
const calculateXYearsInTheFuture = function(numberOfYears) { return getCurrentYear() + numberOfYears };

module.exports = { getCurrentYear, calculateAproximateAgeBasedOnYearOfBorn, calculateXYearsInTheFuture };
