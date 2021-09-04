const arr = [
    { id: 1, nm: 'android' },
    { id: 2, nm: 'ios' },
    { id: 3, nm: 'linux' },
]

console.log(arr.map(ar => ar.id).includes(2))