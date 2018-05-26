const getCurrentYear = function() { return new Date().getFullYear() };
const calculateAproximateAgeBasedOnYearOfBorn = function(yearOfBorn) { return getCurrentYear() - yearOfBorn };
const calculateOneYearInTheFuture = function() { return getCurrentYear() + 1 };

module.exports = { getCurrentYear, calculateAproximateAgeBasedOnYearOfBorn, calculateOneYearInTheFuture };
