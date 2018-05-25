const getCurrentYear = function() { return new Date().getFullYear() };
const calculateAproximateAgeBaseOnYearOfBorn = function(yearOfBorn) { return getCurrentYear() - yearOfBorn };
const calculateOneYearInTheFuture = function() { return getCurrentYear() + 1 };

module.exports = { getCurrentYear, calculateAproximateAgeBaseOnYearOfBorn, calculateOneYearInTheFuture };
