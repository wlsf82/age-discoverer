const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth();
const currentDayOfTheMonth = currentDate.getDate();

const diffBetweenCurrentYearAndYearOfBorn = function(yearOfBorn) {
    return currentYear - yearOfBorn;
};

const diffBetweenCurrentYearAndYearOfBornMinusOne = function(yearOfBorn) {
    return currentYear - yearOfBorn - 1;
};

class AgeDiscoverer {
    calculateAproximateAgeBasedOnYearOfBorn(yearOfBorn) {
        if (isNaN(yearOfBorn) || yearOfBorn >= currentYear) return 0;
            else return diffBetweenCurrentYearAndYearOfBorn(yearOfBorn);
    }

    calculateAgeBasedOnDateOfBirth(birthDate) {
        if (birthDate == null || !birthDate.getMonth()) return 0;

        const yearOfBorn = birthDate.getFullYear();
        const monthOfBorn = birthDate.getMonth();
        const dayOfBorn = birthDate.getDate();

        if (yearOfBorn >= currentYear) return 0;
            else if (monthOfBorn > currentMonth)
                return diffBetweenCurrentYearAndYearOfBornMinusOne(yearOfBorn);
            else if (monthOfBorn < currentMonth)
                return diffBetweenCurrentYearAndYearOfBorn(yearOfBorn);
            else if (dayOfBorn > currentDayOfTheMonth)
                return diffBetweenCurrentYearAndYearOfBornMinusOne(yearOfBorn);
            else if (dayOfBorn <= currentDayOfTheMonth)
                return diffBetweenCurrentYearAndYearOfBorn(yearOfBorn);
    }

    greetsOnBirthdayOrBornday(birthDate) {
        if (birthDate == null || !birthDate.getMonth()) return;

        const yearOfBorn = birthDate.getFullYear();
        const monthOfBorn = birthDate.getMonth();
        const dayOfBorn = birthDate.getDate();

        if (yearOfBorn >= currentYear) return "Congrats! You have just born.";
            else if (monthOfBorn > currentMonth) return;
            else if (monthOfBorn < currentMonth) return;
            else if (dayOfBorn > currentDayOfTheMonth) return;
            else if (dayOfBorn < currentDayOfTheMonth) return;
            else if (dayOfBorn === currentDayOfTheMonth)
                return `Happy birthday! Today you are completing ${currentYear - yearOfBorn} years old.`;
    }
}

module.exports = AgeDiscoverer;
