const getCurrentYear = function() {
    return new Date().getFullYear()
};

const calculateAproximateAgeBasedOnYearOfBorn = function(yearOfBorn) {
    return getCurrentYear() - yearOfBorn
};

const calculateXYearsInTheFutureBasedOnCurrentYear = function(numberOfYears) {
    return getCurrentYear() + numberOfYears
};

const calculateDateOfBirthOneDayInTheFuture = function() {
    const currentDate = new Date();
    const dateOneDayInTheFutureInMs = currentDate.setDate(currentDate.getDate() + 1);
    const dateOneDayInTheFutureInDateFormat = new Date(dateOneDayInTheFutureInMs);

    return dateOneDayInTheFutureInDateFormat;
}

const calculateDateOfBirthXYearsAgoButNextMonth = function(yearsAgo) {
    const currentDate = new Date();
    const dateXYearsAgoInMs = currentDate.setFullYear(currentDate.getFullYear() - yearsAgo);
    const dateXYearsAgoInDateFormat = new Date(dateXYearsAgoInMs);

    const dateXYearsAgoButNextMonthInMs = dateXYearsAgoInDateFormat.setMonth(dateXYearsAgoInDateFormat.getMonth() + 1);
    const dateXYearsAgoButNextMonthInDateFormat = new Date(dateXYearsAgoButNextMonthInMs);

    return dateXYearsAgoButNextMonthInDateFormat;
}

const calculateAgeBasedOnDateOfBirthMinusOne = function(dateOfBirth) {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const yearOfBorn = dateOfBirth.getFullYear();

    return currentYear - yearOfBorn - 1;
}

module.exports = {
    getCurrentYear,
    calculateAproximateAgeBasedOnYearOfBorn,
    calculateXYearsInTheFutureBasedOnCurrentYear,
    calculateDateOfBirthOneDayInTheFuture,
    calculateDateOfBirthXYearsAgoButNextMonth,
    calculateAgeBasedOnDateOfBirthMinusOne
};
