const mobiles = ['android', 'apple', 'windows', 'linux', 'symbian', 'palm']

function traditionalFor() {
    for (let i = 0; i < mobiles.length; i++) {
        console.log(mobiles[i])
    }
}

function forEachLoop() {
    mobiles.forEach((el, ind) => console.log(`Element is ${el} Index is ${ind}`))
}

function find() {
    /*mobiles.forEach(el => {
        if (el.length > 4) console.log(el)
    })*/

    const dt = mobiles.find(el => el.length > 4)
    console.log('find', dt)

    const filMbsLn = mobiles.filter(el => el.length > 4)
    console.log('filter', filMbsLn)

    const filMbsNm = mobiles.filter(el => el.includes('w'))
    console.log('filter', filMbsNm)

    const test = mobiles.every(el => el.includes(''))
    console.log(test)

    const testAny = mobiles.some(el => el.length > 4)
    console.log(testAny)
}

function map() {
    const onlyMap = mobiles.map(el => [el.toUpperCase()])
    console.log(onlyMap)

    const flMap = mobiles.flatMap(el => [el.toUpperCase()])
    console.log(flMap)
}

map()