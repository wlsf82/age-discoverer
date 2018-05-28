const getCurrentYear = function() {
    return new Date().getFullYear();
};

const calculateAproximateAgeBasedOnYearOfBorn = function(yearOfBorn) {
    return getCurrentYear() - yearOfBorn;
};

const calculateXYearsInTheFutureBasedOnCurrentYear = function(numberOfYears) {
    return getCurrentYear() + numberOfYears;
};

const calculateDateOfBirthXDaysInTheFuture = function(daysInTheFuture) {
    const currentDate = new Date();
    const dateOneDayInTheFutureInMs = currentDate.setDate(currentDate.getDate() + daysInTheFuture);
    const dateOneDayInTheFutureInDateFormat = new Date(dateOneDayInTheFutureInMs);

    return dateOneDayInTheFutureInDateFormat;
}

const calculateBirthDateXYearsAgo = function (yearsAgo) {
    const currentDate = new Date();
    const dateXYearsAgoInMs = currentDate.setFullYear(currentDate.getFullYear() - yearsAgo);
    const dateXYearsAgoInDateFormat = new Date(dateXYearsAgoInMs);

    return dateXYearsAgoInDateFormat;
}

const calculateDateOfBirthXYearsAgoButNextMonth = function(yearsAgo) {
    const dateXYearsAgoInDateFormat = calculateBirthDateXYearsAgo(yearsAgo);

    const dateXYearsAgoButNextMonthInMs = dateXYearsAgoInDateFormat.setMonth(dateXYearsAgoInDateFormat.getMonth() + 1);
    const dateXYearsAgoButNextMonthInDateFormat = new Date(dateXYearsAgoButNextMonthInMs);

    return dateXYearsAgoButNextMonthInDateFormat;
}

const calculateDateOfBirthXYearsAgoAndOneMonthAgo = function(yearsAgo) {
    const dateXYearsAgoInDateFormat = calculateBirthDateXYearsAgo(yearsAgo);

    const dateXYearsAgoAndOneMonthAgoInMs = dateXYearsAgoInDateFormat.setMonth(dateXYearsAgoInDateFormat.getMonth() - 1);
    const dateXYearsAgoAndOneMonthAgoInDateFormat = new Date(dateXYearsAgoAndOneMonthAgoInMs);

    return dateXYearsAgoAndOneMonthAgoInDateFormat;
}

const calculateDateOfBirthXYearsAgoButNextDay = function(yearsAgo) {
    const dateXYearsAgoInDateFormat = calculateBirthDateXYearsAgo(yearsAgo);

    const dateXYearsAgoButNextDayInMs = dateXYearsAgoInDateFormat.setDate(dateXYearsAgoInDateFormat.getDate() + 1);
    const dateXYearsAgoButOneNextDayInDateFormat = new Date(dateXYearsAgoButNextDayInMs);

    return dateXYearsAgoButOneNextDayInDateFormat;
}

const calculateDateOfBirthXYearsAgoAndOneDayAgo = function(yearsAgo) {
    const dateXYearsAgoInDateFormat = calculateBirthDateXYearsAgo(yearsAgo);

    const dateXYearsAgoAndOneDayAgoInMs = dateXYearsAgoInDateFormat.setDate(dateXYearsAgoInDateFormat.getDate() - 1);
    const dateXYearsAgoAndOneDayAgoInDateFormat = new Date(dateXYearsAgoAndOneDayAgoInMs);

    return dateXYearsAgoAndOneDayAgoInDateFormat;
}

module.exports = {
    getCurrentYear,
    calculateAproximateAgeBasedOnYearOfBorn,
    calculateXYearsInTheFutureBasedOnCurrentYear,
    calculateDateOfBirthXDaysInTheFuture,
    calculateDateOfBirthXYearsAgoButNextMonth,
    calculateDateOfBirthXYearsAgoAndOneMonthAgo,
    calculateDateOfBirthXYearsAgoButNextDay,
    calculateDateOfBirthXYearsAgoAndOneDayAgo,
    calculateBirthDateXYearsAgo
};
