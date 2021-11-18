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
console.log(toys)

for (const toy of toys) {
    console.log(toy)
}
for (const toy of toys) {
    console.log(toy.price)
}
