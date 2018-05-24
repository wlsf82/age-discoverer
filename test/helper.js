const getCurrentYear = function() { return new Date().getFullYear() };
const calculateAgeBaseOnYearOfBorn = function(yearOfBorn) { return getCurrentYear() - yearOfBorn };
const calculateOneYearInTheFuture = function() { return getCurrentYear() + 1 };

module.exports = { getCurrentYear, calculateAgeBaseOnYearOfBorn, calculateOneYearInTheFuture };
