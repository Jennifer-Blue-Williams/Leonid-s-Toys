const toys = [
    {
    id: 1,
    name: "Barbie Jeep",
    manufacturer: "Little Tykes",
    size: "large",
    price: 299.99,
    inStock: true
},
{
    id: 2,
    name: "monopoly",
    manufacturer: "Hasbro",
    size: "small",
    price: 27.97,
    inStock: false
},
{
    id: 3,
    name: "baseball",
    manufacturer: "Rawlings",
    size: "small",
    price: 3.99,
    inStock: true
}
]

const armyguy = {
    id: 4,
    name: "G.I. Joe",
    manufacturer: "Hasbro",
    size: "small",
    price: 1.99,
    inStock: true
}
    
const capgun = {
    id: 5,
    name: "Cap Gun",
    manufacturer: "Nichols",
    size: "small",
    price: 7.49,
    inStock: false
}

toys.push(armyguy)
// console.log(toys)
toys.push(capgun)
// console.log(toys)

for (const toy of toys) {
    console.log(toy.size)
}







