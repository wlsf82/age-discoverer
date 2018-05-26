const calculateAproximateAgeBasedOnYearOfBorn = function(yearOfBorn) {
    const currentYear = new Date().getFullYear();
    if (isNaN(yearOfBorn) || yearOfBorn > currentYear) return 0;
        else return currentYear - yearOfBorn;
}

module.exports = calculateAproximateAgeBasedOnYearOfBorn;
