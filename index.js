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
    if (date == null || isNaN(date.getTime())) return true;
};

class AgeDiscoverer {
    calculateAproximateAgeBasedOnYearOfBirth(yearOfBirth) {
        if (isNaN(yearOfBirth) || yearOfBirth >= currentYear) return 0;
        else return diffBetweenCurrentYearAndYearOfBirth(yearOfBirth);
    }

    calculateAgeBasedOnDateOfBirth(birthDate) {
        if (isDateInvalid(birthDate)) return 0;

        const yearOfBirth = birthDate.getFullYear();
        const monthOfBirth = birthDate.getMonth();
        const dayOfBirth = birthDate.getDate();

        if (yearOfBirth >= currentYear) return 0;
        else if (monthOfBirth > currentMonth) return diffBetweenCurrentYearAndYearOfBirthMinusOne(yearOfBirth);
        else if (monthOfBirth < currentMonth) return diffBetweenCurrentYearAndYearOfBirth(yearOfBirth);
        else if (dayOfBirth > currentDayOfTheMonth) return diffBetweenCurrentYearAndYearOfBirthMinusOne(yearOfBirth);
        else return diffBetweenCurrentYearAndYearOfBirth(yearOfBirth);
    }

    greetsOnBirthdayOrBirthdate(birthDate) {
        if (isDateInvalid(birthDate)) return;

        const yearOfBirth = birthDate.getFullYear();
        const monthOfBirth = birthDate.getMonth();
        const dayOfBirth = birthDate.getDate();

        if (yearOfBirth > currentYear) return;
        else if (monthOfBirth > currentMonth || monthOfBirth < currentMonth) return;
        else if (dayOfBirth > currentDayOfTheMonth || dayOfBirth < currentDayOfTheMonth) return;
        else if (yearOfBirth === currentYear) return "Welcome to earth! 💚 ";
        else return `Happy birthday! Today you are completing ${currentYear - yearOfBirth} years old. 💚 `;
    }
}

module.exports = AgeDiscoverer;
