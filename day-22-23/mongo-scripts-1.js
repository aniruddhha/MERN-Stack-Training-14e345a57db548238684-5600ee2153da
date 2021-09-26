per_id = ObjectId()

db.mobile.insertMany([
    {
        "_id": ObjectId("5a934e000102030405000000"),
        "usNm": "Claudine Kshlerin"
    },
    {
        "_id": ObjectId("5a934e000102030405000001"),
        "usNm": "Norbert Ruecker"
    },
    {
        "_id": ObjectId("5a934e000102030405000002"),
        "usNm": "Ethyl Ruecker"
    },
    {
        "_id": ObjectId("5a934e000102030405000003"),
        "usNm": "Loy Jerde"
    },
    {
        "_id": ObjectId("5a934e000102030405000004"),
        "usNm": "Nicolas Kihn"
    },
    {
        "_id": ObjectId("5a934e000102030405000005"),
        "usNm": "Hunter Sipes"
    },
    {
        "_id": ObjectId("5a934e000102030405000006"),
        "usNm": "Dedrick Schiller"
    },
    {
        "_id": ObjectId("5a934e000102030405000007"),
        "usNm": "Leila Bergnaum"
    },
    {
        "_id": ObjectId("5a934e000102030405000008"),
        "usNm": "Leanna Larson"
    },
    {
        "_id": ObjectId("5a934e000102030405000009"),
        "usNm": "Daniela Swift"
    }
])

db.sim.insertOne({
    no: '32149846',
    provider: 'nnnnn',
    creator: {
        $ref: "mobile",
        $id: ObjectId("5a934e000102030405000009")
    }
})


db.sim.aggregate([{
    $lookup: {
        from: "mobile",
        localField: $ref,
        foreignField: "_id",
        as: "sims"
    }
}])

db.docs.find({ person: { $eq: per_id } })


