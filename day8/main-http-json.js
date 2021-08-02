const str = `{
    "day" : "monday",
   "num" : 1,
   "isOff" : false, 
   "date" : "2021-08-02",
   "week" : {
       "calendar" : "normal"
   },
   "adjecent" : [
   20, 21, 23,24
   ]
   }`
console.log(str)
console.log(JSON.parse(str))

const dt = {
    date: '2021-08-02',
    day: 'Monday',
    number: 1
}

console.log(JSON.stringify(dt))

