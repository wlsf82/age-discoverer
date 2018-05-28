const getCurrentYear = function() {
    return new Date().getFullYear()
};

const calculateAproximateAgeBasedOnYearOfBorn = function(yearOfBorn) {
    return getCurrentYear() - yearOfBorn
};

const calculateXYearsInTheFutureBasedOnCurrentYear = function(numberOfYears) {
    return getCurrentYear() + numberOfYears
};

const calculateDateOneDayInTheFuture = function() {
    const currentDate = new Date();
    const dateOneDayInTheFutureInMs = currentDate.setDate(currentDate.getDate() + 1);
    const dateOneDayInTheFutureInDateFormat = new Date(dateOneDayInTheFutureInMs);

    return dateOneDayInTheFutureInDateFormat;
}

module.exports = {
    getCurrentYear,
    calculateAproximateAgeBasedOnYearOfBorn,
    calculateXYearsInTheFutureBasedOnCurrentYear,
    calculateDateOneDayInTheFuture
};
