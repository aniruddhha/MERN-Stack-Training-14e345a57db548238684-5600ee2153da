conn = Mongo();
db = conn.getDB("cardb")

// cur = db.car.find()

// cur = db.car.findOne()
// printjson(cur)

// cur = db.car.find({ year: 2008, make: "ME" }) // anding

// cur = db.car.find({ mfgDt: ISODate("2021-12-01") })

// cur = db.car.find({ price: { $gte: 2000 } })

// cur = db.car.find({ "features.bhp": { $gte: 13 } })

// cur = db.car.find({ models: { $nin: ['base'] } })

// cur = db.car.find({
//     mfgDt: { $gte: ISODate('2000-01-01'), $lte: ISODate('2021-01-01') }
// })

// cur = db.car.find({
//     "features.gears": {
//         $not: { $eq: 4 }
//     }
// })

// cur = db.car.find({
//     $or: [{ make: 'BE' }, { make: 'GE' }]
// })

cur = db.car.find({
    $and: [
        { price: { $gte: 30000 } }, {
            $or: [
                { "features.bhp": { $gte: 3 } },
                { "models": { $in: ['base'] } }
            ]
        }
    ]
})

while (cur.hasNext()) {
    printjson(cur.next())
}