class TaskController {

    

    async home(req, res) {
        try {
            res.render('home');
        } catch (error) {
            throw error;
        }
    }

    async properties(req, res) {
        
        try {
            let data = [
                {
                    "image": "assets/images/property-01.jpg",
                    "category": "Luxury Villa",
                    "price": "$2.264.000",
                    "address": "18 Old Street Miami, OR 97219",
                    "details": {
                        "bedrooms": 8,
                        "bathrooms": 8,
                        "area": "545m2",
                        "floor": "3",
                        "parking": "6 spots"
                    }
                },
                {
                    "image": "assets/images/property-02.jpg",
                    "category": "Luxury Villa",
                    "price": "$1.180.000",
                    "address": "54 New Street Florida, OR 27001",
                    "details": {
                        "bedrooms": 6,
                        "bathrooms": 5,
                        "area": "450m2",
                        "floor": "3",
                        "parking": "8 spots"
                    }
                },
                {
                    "image": "assets/images/property-03.jpg",
                    "category": "Luxury Villa",
                    "price": "$1.460.000",
                    "address": "26 Mid Street Portland, OR 38540",
                    "details": {
                        "bedrooms": 5,
                        "bathrooms": 4,
                        "area": "225m2",
                        "floor": "3",
                        "parking": "10 spots"
                    }
                },
                {
                    "image": "assets/images/property-04.jpg",
                    "category": "Apartment",
                    "price": "$584.500",
                    "address": "12 Hope Street Portland, OR 12650",
                    "details": {
                        "bedrooms": 4,
                        "bathrooms": 3,
                        "area": "125m2",
                        "floor": "25th",
                        "parking": "2 cars"
                    }
                },
                {
                    "image": "assets/images/property-05.jpg",
                    "category": "Penthouse",
                    "price": "$925.600",
                    "address": "34 Hope Street Portland, OR 42680",
                    "details": {
                        "bedrooms": 4,
                        "bathrooms": 4,
                        "area": "180m2",
                        "floor": "38th",
                        "parking": "2 cars"
                    }
                },
                {
                    "image": "assets/images/property-06.jpg",
                    "category": "Modern Condo",
                    "price": "$450.000",
                    "address": "22 Hope Street Portland, OR 16540",
                    "details": {
                        "bedrooms": 3,
                        "bathrooms": 2,
                        "area": "165m2",
                        "floor": "26th",
                        "parking": "3 cars"
                    }
                },
                {
                    "image": "assets/images/property-03.jpg",
                    "category": "Luxury Villa",
                    "price": "$980.000",
                    "address": "14 Mid Street Miami, OR 36450",
                    "details": {
                        "bedrooms": 8,
                        "bathrooms": 8,
                        "area": "550m2",
                        "floor": "3",
                        "parking": "12 spots"
                    }
                },
                {
                    "image": "assets/images/property-02.jpg",
                    "category": "Luxury Villa",
                    "price": "$1.520.000",
                    "address": "26 Old Street Miami, OR 12870",
                    "details": {
                        "bedrooms": 12,
                        "bathrooms": 15,
                        "area": "380m2",
                        "floor": "3",
                        "parking": "14 spots"
                    }
                },
                {
                    "image": "assets/images/property-01.jpg",
                    "category": "Luxury Villa",
                    "price": "$3.145.000",
                    "address": "34 New Street Miami, OR 24650",
                    "details": {
                        "bedrooms": 10,
                        "bathrooms": 12,
                        "area": "860m2",
                        "floor": "3",
                        "parking": "10 spots"
                    }
                }
            ]
            res.render('properties',{
                data
            });
        } catch (error) {
            throw error;
        }
    }

    async propertyDetails(req, res) {
        try {
            res.render('property-details');
        } catch (error) {
            throw error;
        }
    }

    async contactUs(req, res) {
        try {
            res.render('contact-us');
        } catch (error) {
            throw error;
        }
    }

}

module.exports = new TaskController();