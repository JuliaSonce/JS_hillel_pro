var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн",

    price: function () {
        let sum = 0;
        for (let key in this) {
            let parcedValue = parseInt(this[key])
            if (!isNaN(parcedValue)) {
                sum = sum + parcedValue
            }
        }
        return sum;
    },

    minPrice: function () {
        let minNumber;
        for (let key in this) {
            let parcedValue = parseInt(this[key])
            if (!isNaN(parcedValue)) {
                if (minNumber === undefined) {
                    minNumber = parcedValue
                } else {
                    if (parcedValue < minNumber) {
                        minNumber = parcedValue
                    }
                }
            }
        }
        return minNumber;
    },
    maxPrice: function () {
        let maxNumber;
        for (let key in this) {
            let parcedValue = parseInt(this[key])
            if (!isNaN(parcedValue)) {
                if (maxNumber === undefined) {
                    maxNumber = parcedValue
                } else {
                    if (parcedValue > maxNumber) {
                        maxNumber = parcedValue
                    }
                }
            }
        }
        return maxNumber;
    }

};
services["Розбити скло"] = "200 грн";
console.log(services.maxPrice());