conn = Mongo();
db = conn.getDB("cardb")

db.car.drop()

db.car.insertMany([
    {
        name: "uusdslkdfjsaslkfjuuu",
        price: 4592,
        isOkay: false,
        year: 2010,
        make: "JE",
        models: ["top", "classic", "base"],
        mfgDt: ISODate("2021-12-01"),
        features: {
            gears: 4,
            suspension: 'auto',
            bhp: 10
        }
    },
    {
        name: "mbmbn",
        price: 321321,
        isOkay: true,
        year: 2008,
        make: "ME",
        models: ["top"],
        mfgDt: ISODate("2010-10-01"),
        features: {
            gears: 4,
            suspension: 'auto',
            bhp: 15
        }
    },
    {
        name: "nbvnn",
        price: 313243,
        isOkay: false,
        year: 2008,
        make: "BE",
        models: ["top", "base"],
        mfgDt: ISODate("2008-01-12"),
        features: {
            gears: 3,
            suspension: 'semi-auto',
            bhp: 11
        }
    }
])