const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth();
const currentDayOfTheMonth = currentDate.getDate();

class AgeDiscoverer {
    calculateAproximateAgeBasedOnYearOfBorn(yearOfBorn) {
        if (isNaN(yearOfBorn) || yearOfBorn >= currentYear) return 0;
            else return currentYear - yearOfBorn;
    }

    calculateAgeBasedOnDateOfBirth(birthDate) {
        if (birthDate == null || !birthDate.getMonth()) return 0;

        const yearOfBorn = birthDate.getFullYear();
        const monthOfBorn = birthDate.getMonth();
        const dayOfBorn = birthDate.getDate();

        if (yearOfBorn >= currentYear) return 0;
            else if (monthOfBorn > currentMonth) return currentYear - yearOfBorn - 1;
            else if (monthOfBorn < currentMonth) return currentYear - yearOfBorn;
            else if (dayOfBorn > currentDayOfTheMonth) return currentYear - yearOfBorn - 1;
            else if (dayOfBorn < currentDayOfTheMonth) return currentYear - yearOfBorn;
            else if (dayOfBorn === currentDayOfTheMonth)
                return `Happy birthday! Today you are completing ${currentYear - yearOfBorn} years old.`;
    }
}

module.exports = AgeDiscoverer;
