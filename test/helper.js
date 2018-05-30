const getCurrentYear = function() {
    return new Date().getFullYear();
};

const calculateAproximateAgeBasedOnYearOfBorn = function(yearOfBorn) {
    return getCurrentYear() - yearOfBorn;
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
    const dateOneDayInTheFutureInDateFormat = transformDateInMsToDateFormat(dateOneDayInTheFutureInMs);

    return dateOneDayInTheFutureInDateFormat;
};

const calculateBirthDateXYearsAgo = function(yearsAgo) {
    const currentDate = new Date();
    const dateXYearsAgoInMs = currentDate.setFullYear(currentDate.getFullYear() - yearsAgo);
    const dateXYearsAgoInDateFormat = transformDateInMsToDateFormat(dateXYearsAgoInMs);

    return dateXYearsAgoInDateFormat;
};

const calculateBirthDateXYearsAhead = function(yearsAhead) {
    const currentDate = new Date();
    const dateXYearsAheadInMs = currentDate.setFullYear(currentDate.getFullYear() + yearsAhead);
    const dateXYearsAheadInDateFormat = transformDateInMsToDateFormat(dateXYearsAheadInMs);

    return dateXYearsAheadInDateFormat;
};

const calculateDateOfBirthXMonthsInTheFuture = function(monthsAhead) {
    const currentDate = new Date();
    const dateXMonthsAheadInMs = currentDate.setMonth(currentDate.getMonth() + monthsAhead);
    const dateXMonthsAheadInDateFormat = transformDateInMsToDateFormat(dateXMonthsAheadInMs);

    return dateXMonthsAheadInDateFormat;
};

const calculateDateOfBirthXYearsAgoButNextMonth = function(yearsAgo) {
    const dateXYearsAgoInDateFormat = calculateBirthDateXYearsAgo(yearsAgo);

    const dateXYearsAgoButNextMonthInMs = dateXYearsAgoInDateFormat.setMonth(dateXYearsAgoInDateFormat.getMonth() + 1);
    const dateXYearsAgoButNextMonthInDateFormat = transformDateInMsToDateFormat(dateXYearsAgoButNextMonthInMs);

    return dateXYearsAgoButNextMonthInDateFormat;
};

const calculateDateOfBirthXYearsAgoAndOneMonthAgo = function(yearsAgo) {
    const dateXYearsAgoInDateFormat = calculateBirthDateXYearsAgo(yearsAgo);

    const dateXYearsAgoAndOneMonthAgoInMs = dateXYearsAgoInDateFormat.setMonth(dateXYearsAgoInDateFormat.getMonth() - 1);
    const dateXYearsAgoAndOneMonthAgoInDateFormat = transformDateInMsToDateFormat(dateXYearsAgoAndOneMonthAgoInMs);

    return dateXYearsAgoAndOneMonthAgoInDateFormat;
};

const calculateDateOfBirthXYearsAgoButNextDay = function(yearsAgo) {
    const dateXYearsAgoInDateFormat = calculateBirthDateXYearsAgo(yearsAgo);

    const dateXYearsAgoButNextDayInMs = dateXYearsAgoInDateFormat.setDate(dateXYearsAgoInDateFormat.getDate() + 1);
    const dateXYearsAgoButOneNextDayInDateFormat = transformDateInMsToDateFormat(dateXYearsAgoButNextDayInMs);

    return dateXYearsAgoButOneNextDayInDateFormat;
};

const calculateDateOfBirthXYearsAgoAndOneDayAgo = function(yearsAgo) {
    const dateXYearsAgoInDateFormat = calculateBirthDateXYearsAgo(yearsAgo);

    const dateXYearsAgoAndOneDayAgoInMs = dateXYearsAgoInDateFormat.setDate(dateXYearsAgoInDateFormat.getDate() - 1);
    const dateXYearsAgoAndOneDayAgoInDateFormat = transformDateInMsToDateFormat(dateXYearsAgoAndOneDayAgoInMs);

    return dateXYearsAgoAndOneDayAgoInDateFormat;
};

module.exports = {
    getCurrentYear,
    calculateAproximateAgeBasedOnYearOfBorn,
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
