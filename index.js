class AgeDiscoverer {
    findAgeByBornDate(yearOfBorn) {
        const todaysYear = new Date().getFullYear();

        if (isNaN(yearOfBorn) || yearOfBorn > todaysYear) {
            return 0;
        } else {
            const approximateAge = todaysYear - yearOfBorn;

            return approximateAge;
        }
    }
}

module.exports = AgeDiscoverer;
