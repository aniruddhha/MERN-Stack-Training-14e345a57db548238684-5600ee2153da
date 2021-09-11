
conn = Mongo();
db = conn.getDB("cardb")

db.car.insertMany([{
	name : "uusdslkdfjsaslkfjuuu",
	price : 4592,
	isOkay : false,
	year : 2010,
	make : "JE"
}, {
	name : "abc",
	price : 4111,
	isOkay : true,
	year : 2015,
	make : "JE"
}, {
	name : "abc",
	price : 4111,
	isOkay : true,
	year : 2015,
	make : "JE"
} ])


cursor = db.car.find()

while(cursor.hasNext()) {
	 printjson( cursor.next() );
}



