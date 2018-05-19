class AgeDiscoverer {
    findAgeByBornDate(yearOfBorn) {
        const currentYear = new Date().getFullYear();

        if (isNaN(yearOfBorn) || yearOfBorn > currentYear) {
            return 0;
        } else {
            const approximateAge = currentYear - yearOfBorn;

            return approximateAge;
        }
    }
}

module.exports = AgeDiscoverer;
