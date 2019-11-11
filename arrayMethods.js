const items = [
    { name: 'Book',  price: 400},
    { name: 'Car',   price: 1400},
    { name: 'Plane', price: 2400},
    { name: 'Ship',  price: 3400},
    { name: 'House', price: 4400},
    { name: 'TV',    price: 800}
]
 //filter

 const filteredItems = items.filter((item) => {
     return item.price <= 1500
 })