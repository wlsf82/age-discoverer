const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth();
const currentDayOfTheMonth = currentDate.getDate();

const diffBetweenCurrentYearAndYearOfBirth = function(yearOfBirth) {
    return currentYear - yearOfBirth;
};

const diffBetweenCurrentYearAndYearOfBirthMinusOne = function(yearOfBirth) {
    return currentYear - yearOfBirth - 1;
};

const isDateInvalid = function(date) {
    return date == null || isNaN(date.getTime());
};

class AgeDiscoverer {
    calculateAproximateAgeBasedOnYearOfBirth(yearOfBirth) {
        if (isNaN(yearOfBirth) || yearOfBirth >= currentYear) return 0;
        return diffBetweenCurrentYearAndYearOfBirth(yearOfBirth);
    }

    calculateAgeBasedOnDateOfBirth(birthDate) {
        if (isDateInvalid(birthDate)) return 0;

        const yearOfBirth = birthDate.getFullYear();
        const monthOfBirth = birthDate.getMonth();
        const dayOfBirth = birthDate.getDate();

        if (yearOfBirth >= currentYear) return 0;
        if (monthOfBirth > currentMonth) return diffBetweenCurrentYearAndYearOfBirthMinusOne(yearOfBirth);
        if (monthOfBirth < currentMonth) return diffBetweenCurrentYearAndYearOfBirth(yearOfBirth);
        if (dayOfBirth > currentDayOfTheMonth) return diffBetweenCurrentYearAndYearOfBirthMinusOne(yearOfBirth);
        return diffBetweenCurrentYearAndYearOfBirth(yearOfBirth);
    }

    greetsOnBirthdayOrBirthdate(birthDate) {
        if (isDateInvalid(birthDate)) return undefined;

        const yearOfBirth = birthDate.getFullYear();
        const monthOfBirth = birthDate.getMonth();
        const dayOfBirth = birthDate.getDate();

        if (yearOfBirth > currentYear) return undefined;
        if (monthOfBirth > currentMonth || monthOfBirth < currentMonth) return undefined;
        if (dayOfBirth > currentDayOfTheMonth || dayOfBirth < currentDayOfTheMonth) return undefined;
        if (yearOfBirth === currentYear) return "Welcome to earth!";
        return `Happy birthday! Today you are completing ${currentYear - yearOfBirth} years old.`;
    }
}

module.exports = AgeDiscoverer;
