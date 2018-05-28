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

const calculateDateOfBirthXYearsAgoAndOneMonthAgo = function(yearsAgo) {
    const currentDate = new Date();
    const dateXYearsAgoInMs = currentDate.setFullYear(currentDate.getFullYear() - yearsAgo);
    const dateXYearsAgoInDateFormat = new Date(dateXYearsAgoInMs);

    const dateXYearsAgoAndOneMonthAgoInMs = dateXYearsAgoInDateFormat.setMonth(dateXYearsAgoInDateFormat.getMonth() - 1);
    const dateXYearsAgoAndOneMonthAgoInDateFormat = new Date(dateXYearsAgoAndOneMonthAgoInMs);

    return dateXYearsAgoAndOneMonthAgoInDateFormat;
}

module.exports = {
    getCurrentYear,
    calculateAproximateAgeBasedOnYearOfBorn,
    calculateXYearsInTheFutureBasedOnCurrentYear,
    calculateDateOfBirthOneDayInTheFuture,
    calculateDateOfBirthXYearsAgoButNextMonth,
    calculateDateOfBirthXYearsAgoAndOneMonthAgo,
};
