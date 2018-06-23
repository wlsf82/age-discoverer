const getCurrentYear = function() {
    return new Date().getFullYear();
};

const calculateAproximateAgeBasedOnYearOfBirth = function(yearOfBirth) {
    return getCurrentYear() - yearOfBirth;
};

const calculateXYearsInTheFutureBasedOnCurrentYear = function(numberOfYears) {
    return getCurrentYear() + numberOfYears;
};

const transformDateInMsToDateFormat = function(dateInMs) {
    return new Date(dateInMs);
};

const calculateDateOfBirthXDaysInTheFuture = function(daysInTheFuture) {
    const currentDate = new Date();
    const dateOneDayInTheFutureInMs = currentDate.setDate(currentDate.getDate() + daysInTheFuture);

    return transformDateInMsToDateFormat(dateOneDayInTheFutureInMs);
};

const calculateBirthDateXYearsAgo = function(yearsAgo) {
    const currentDate = new Date();
    const dateXYearsAgoInMs = currentDate.setFullYear(currentDate.getFullYear() - yearsAgo);

    return transformDateInMsToDateFormat(dateXYearsAgoInMs);
};

const calculateBirthDateXYearsAhead = function(yearsAhead) {
    const currentDate = new Date();
    const dateXYearsAheadInMs = currentDate.setFullYear(currentDate.getFullYear() + yearsAhead);

    return transformDateInMsToDateFormat(dateXYearsAheadInMs);
};

const calculateDateOfBirthXMonthsInTheFuture = function(monthsAhead) {
    const currentDate = new Date();
    const dateXMonthsAheadInMs = currentDate.setMonth(currentDate.getMonth() + monthsAhead);

    return transformDateInMsToDateFormat(dateXMonthsAheadInMs);
};

const calculateDateOfBirthXYearsAgoButNextMonth = function(yearsAgo) {
    const dateXYearsAgoInDateFormat = calculateBirthDateXYearsAgo(yearsAgo);

    const dateXYearsAgoButNextMonthInMs = dateXYearsAgoInDateFormat.setMonth(dateXYearsAgoInDateFormat.getMonth() + 1);

    return transformDateInMsToDateFormat(dateXYearsAgoButNextMonthInMs);
};

const calculateDateOfBirthXYearsAgoAndOneMonthAgo = function(yearsAgo) {
    const dateXYearsAgoInDateFormat = calculateBirthDateXYearsAgo(yearsAgo);

    const dateXYearsAgoAndOneMonthAgoInMs = dateXYearsAgoInDateFormat.setMonth(dateXYearsAgoInDateFormat.getMonth() - 1);

    return transformDateInMsToDateFormat(dateXYearsAgoAndOneMonthAgoInMs);
};

const calculateDateOfBirthXYearsAgoButNextDay = function(yearsAgo) {
    const dateXYearsAgoInDateFormat = calculateBirthDateXYearsAgo(yearsAgo);

    const dateXYearsAgoButNextDayInMs = dateXYearsAgoInDateFormat.setDate(dateXYearsAgoInDateFormat.getDate() + 1);

    return transformDateInMsToDateFormat(dateXYearsAgoButNextDayInMs);
};

const calculateDateOfBirthXYearsAgoAndOneDayAgo = function(yearsAgo) {
    const dateXYearsAgoInDateFormat = calculateBirthDateXYearsAgo(yearsAgo);

    const dateXYearsAgoAndOneDayAgoInMs = dateXYearsAgoInDateFormat.setDate(dateXYearsAgoInDateFormat.getDate() - 1);

    return transformDateInMsToDateFormat(dateXYearsAgoAndOneDayAgoInMs);
};

module.exports = {
    getCurrentYear,
    calculateAproximateAgeBasedOnYearOfBirth,
    calculateXYearsInTheFutureBasedOnCurrentYear,
    calculateDateOfBirthXDaysInTheFuture,
    calculateBirthDateXYearsAgo,
    calculateBirthDateXYearsAhead,
    calculateDateOfBirthXMonthsInTheFuture,
    calculateDateOfBirthXYearsAgoButNextMonth,
    calculateDateOfBirthXYearsAgoAndOneMonthAgo,
    calculateDateOfBirthXYearsAgoButNextDay,
    calculateDateOfBirthXYearsAgoAndOneDayAgo,
};
